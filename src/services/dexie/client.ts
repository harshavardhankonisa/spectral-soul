import Dexie from 'dexie'
import type { User, Activity, Chat, Action, Task, VoteAgenda } from '../../interface/database'

export class SplitSoulDB extends Dexie {
  users!: Dexie.Table<User, number>
  activities!: Dexie.Table<Activity, number>
  chats!: Dexie.Table<Chat, number>
  actions!: Dexie.Table<Action, number>
  tasks!: Dexie.Table<Task, number>
  votes!: Dexie.Table<VoteAgenda, number>

  constructor() {
    super('split_soul_db')
    this.version(1).stores({
      users: '++id, username, createdAt, vector',
      activities: '++id, createdAt, createdBy',
      chats: '++id, user.id, createdAt',
      actions: '++id, createdAt, createdBy',
      tasks: '++id, createdAt, modifiedAt, status',
      votes: '++id, createdAt, status'
    })
  }
}

export const db = new SplitSoulDB()
