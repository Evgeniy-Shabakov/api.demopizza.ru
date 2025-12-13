
export function generateUniqueSuffix() {
   return Date.now() + '-' + Math.round(Math.random() * 1E9)
}