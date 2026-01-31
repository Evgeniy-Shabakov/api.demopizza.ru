
export function parseJWTTimeToMs(timeStr) {
   const value = parseInt(timeStr)

   if (timeStr.includes('s')) return value * 1000
   if (timeStr.includes('m')) return value * 60 * 1000
   if (timeStr.includes('h')) return value * 60 * 60 * 1000
   if (timeStr.includes('d')) return value * 24 * 60 * 60 * 1000

   return value
}