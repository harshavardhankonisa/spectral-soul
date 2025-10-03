import { db } from '../client'
import type { User } from '../../../interface/database'
import { getEmbeddingFromText } from '../../transformers/embedder'

async function withEmbedding(user: User): Promise<User> {
  const textForEmbedding = `${user.username} ${user.description ?? ''}`
  const vector = await getEmbeddingFromText(textForEmbedding)
  return { ...user, vector, modifiedAt: new Date() }
}

// CREATE
export async function createUser(user: User) {
  const userWithVector = await withEmbedding(user)
  return db.users.add(userWithVector)
}

// UPDATE BY ID
export async function updateUser(id: number, changes: Partial<User>) {
  const existing = await db.users.get(id)
  if (!existing) return

  const updated = { ...existing, ...changes }
  const updatedWithVector = await withEmbedding(updated as User)
  return db.users.put(updatedWithVector)
}

// READ
export async function getUser(id: number) {
  return db.users.get(id)
}

// DELETE
export async function deleteUser(id: number) {
  return db.users.delete(id)
}

// GET ALL
export async function getAllUsers() {
  return db.users.toArray()
}
