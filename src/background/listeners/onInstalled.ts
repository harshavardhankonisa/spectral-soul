import { db } from '../../services/dexie/client'

export const setupOnInstalled = () => {
  chrome.runtime.onInstalled.addListener(async () => {
    console.log('Extension installed → Initializing DB...')
    // great
    try {
      await db.open()
      console.log('Dexie DB initialized successfully')
    } catch (err) {
      console.error('Failed to initialize Dexie DB', err)
    }
    console.log('DB seeded successfully')
  })
}
