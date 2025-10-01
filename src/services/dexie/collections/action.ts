import { db } from '../client'
import type { Action } from '../../../interface/database'

// CREATE or UPDATE
export async function upsertAction(action: Action) {
  return db.actions.put(action)
}

// READ
export async function getAction(id: number) {
  return db.actions.get(id)
}

// DELETE
export async function deleteAction(id: number) {
  return db.actions.delete(id)
}

// GET ALL
export async function getAllactions() {
  return db.actions.toArray()
}
