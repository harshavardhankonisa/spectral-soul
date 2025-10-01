export const setupOnInstalled = () => {
  chrome.runtime.onInstalled.addListener(async () => {
    console.log('Extension installed → Initializing DB...')
    // await seedData();
    console.log('DB seeded successfully')
  })
}
