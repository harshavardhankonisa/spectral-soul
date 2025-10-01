import { db } from '../client'
import type { Chat } from '../../../interface/database'

// CREATE or UPDATE
export async function upsertChat(chat: Chat) {
  return db.chats.put(chat)
}

// READ
export async function getChat(id: number) {
  return db.chats.get(id)
}

// DELETE
export async function deleteChat(id: number) {
  return db.chats.delete(id)
}

// GET ALL
export async function getAllChats() {
  return db.chats.toArray()
}
