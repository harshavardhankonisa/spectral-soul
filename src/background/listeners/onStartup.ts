import { initDB } from '../../services/dexie/client'

export const setupOnStartup = () => {
  chrome.runtime.onStartup.addListener(() => {
    console.log('🔄 Browser restarted → Re-initializing DB...')
    initDB()
  })
}
