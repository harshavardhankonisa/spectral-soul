export const log = (name: string, msg: string, ...args: any[]) => {
  console.log(`[${name}] ${msg}`, ...args)
}
