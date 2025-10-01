import { db } from '../client'
import type { User } from '../../../interface/database'

// CREATE or UPDATE
export async function upsertUser(user: User) {
  return db.users.put(user)
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
