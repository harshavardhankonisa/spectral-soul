import { db } from '../client'
import type { User } from '../../../interface/database'
import { getEmbeddingFromText } from '../../transformers/embedder'

const CACHE_TTL_MS = 1000 * 60 * 5 // 5 minutes

type UsersCache = {
  ts: number
  users: User[]
}

let allUsersCache: UsersCache | null = null
const userByIdCache = new Map<number, { ts: number; user: User }>()

function invalidateCachesForUser(id?: number) {
  allUsersCache = null
  if (typeof id === 'number') {
    userByIdCache.delete(id)
  }
}

function isCacheFresh(ts: number) {
  return Date.now() - ts <= CACHE_TTL_MS
}

async function withEmbedding(user: User): Promise<User> {
  const textForEmbedding = `${user.username} ${user.description ?? ''}`
  const vector = await getEmbeddingFromText(textForEmbedding)
  return { ...user, vector, modifiedAt: new Date() }
}

// CREATE
export async function createUser(user: User) {
  try {
    const userWithVector = await withEmbedding(user)
    const id = await db.users.add(userWithVector)
    invalidateCachesForUser(id as number)
    return id
  } catch (error) {
    console.error('Error creating user:', error)
    throw new Error('Failed to create user')
  }
}

// UPDATE BY ID
export async function updateUser(id: number, changes: Partial<User>) {
  try {
    const existing = await db.users.get(id)
    if (!existing) return null
    const updated = { ...existing, ...changes }
    const updatedWithVector = await withEmbedding(updated as User)
    await db.users.put(updatedWithVector)
    invalidateCachesForUser(id)
    return updatedWithVector
  } catch (error) {
    console.error(`Error updating user with ID ${id}:`, error)
    throw new Error('Failed to update user')
  }
}

// READ
export async function getUser(id: number) {
  const cached = userByIdCache.get(id)
  if (cached && isCacheFresh(cached.ts)) return cached.user
  try {
    const user = await db.users.get(id)
    if (user) userByIdCache.set(id, { ts: Date.now(), user })
    return user
  } catch (error) {
    console.error(`Error fetching user with ID ${id}:`, error)
    throw new Error('Failed to fetch user')
  }
}

// DELETE
export async function deleteUser(id: number) {
  try {
    const res = await db.users.delete(id)
    invalidateCachesForUser(id)
    return res
  } catch (error) {
    console.error(`Error deleting user with ID ${id}:`, error)
    throw new Error('Failed to delete user')
  }
}

// GET ALL
export async function getAllUsers() {
  if (allUsersCache && isCacheFresh(allUsersCache.ts)) return allUsersCache.users

  try {
    const users = await db.users.toArray()

    const normalized = users.map(u => {
      if (!u.vector || u.vector === null) return u
      const mag = Math.sqrt(u.vector.reduce((s, v) => s + v * v, 0)) || 1
      return { ...u, vector: u.vector.map(v => v / mag) }
    })

    allUsersCache = { ts: Date.now(), users: normalized }
    for (const u of normalized) userByIdCache.set(u.id as number, { ts: Date.now(), user: u })

    return normalized
  } catch (error) {
    console.error('Error fetching all users:', error)
    throw new Error('Failed to fetch users')
  }
}

// VECTOR SEARCH
export async function searchUsersByVector(query: string) {
  try {
    const queryVectorRaw = await getEmbeddingFromText(query)
    const magnitudeQ = Math.sqrt(queryVectorRaw.reduce((sum, val) => sum + val * val, 0)) || 1
    const queryVector = queryVectorRaw.map(v => v / magnitudeQ)

    const users = await getAllUsers()
    if (!users.length) return []

    const topK = Math.max(5, Math.ceil(users.length * 0.1))

    const SIM_THRESHOLD = 0.1

    const scored: { user: User; similarity: number }[] = []
    for (let i = 0; i < users.length; i++) {
      const u = users[i]
      if (!u.vector) continue
      const vec = u.vector
      const len = Math.min(vec.length, queryVector.length)
      let dot = 0
      for (let j = 0; j < len; j++) dot += vec[j] * queryVector[j]
      if (dot >= SIM_THRESHOLD) scored.push({ user: u, similarity: dot })
    }

    if (!scored.length) return []

    scored.sort((a, b) => b.similarity - a.similarity)

    return scored.slice(0, topK).map(s => s.user)
  } catch (error) {
    console.error('Error searching users by vector:', error)
    throw new Error('Failed to search users by vector')
  }
}
