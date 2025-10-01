import { setupOnInstalled } from './listeners/onInstalled'
import { setupOnStartup } from './listeners/onStartup'

console.log('Background service worker starting...')

setupOnInstalled()
setupOnStartup()
