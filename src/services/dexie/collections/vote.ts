import { db } from '../client'
import type { VoteAgenda } from '../../../interface/database'

// CREATE or UPDATE
export async function upsertVoteAgenda(voteAgenda: VoteAgenda) {
  return db.votes.put(voteAgenda)
}

// READ
export async function getVoteAgenda(id: number) {
  return db.votes.get(id)
}

// DELETE
export async function deleteVoteAgenda(id: number) {
  return db.votes.delete(id)
}

// GET ALL
export async function getAllVoteAgendas() {
  return db.votes.toArray()
}
