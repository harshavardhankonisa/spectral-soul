import { db } from '../client'
import type { Activity } from '../../../interface/database'

// CREATE or UPDATE
export async function upsertActivity(activity: Activity) {
  return db.activities.put(activity)
}

// READ
export async function getActivity(id: number) {
  return db.activities.get(id)
}

// DELETE
export async function deleteActivity(id: number) {
  return db.activities.delete(id)
}

// GET ALL
export async function getAllActivities() {
  return db.activities.toArray()
}
