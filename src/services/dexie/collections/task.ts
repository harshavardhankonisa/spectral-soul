import { db } from '../client'
import type { Task } from '../../../interface/database'

// CREATE or UPDATE
export async function upsertTask(task: Task) {
  return db.tasks.put(task)
}

// READ
export async function getTask(id: number) {
  return db.tasks.get(id)
}

// DELETE
export async function deleteTask(id: number) {
  return db.tasks.delete(id)
}

// GET ALL
export async function getAllTasks() {
  return db.tasks.toArray()
}
