// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const log = (name: string, msg: string, ...args: any[]) => {
  console.log(`[${name}] ${msg}`, ...args)
}
