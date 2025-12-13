import path from 'path'
import fs from 'fs/promises'

export async function renameFileName(filePath, newFileName) {
  const dir = path.dirname(filePath)      // Получаем директорию
  const ext = path.extname(filePath)      // Получаем расширение
  const newPath = path.join(dir, newFileName + ext) // Новый путь
  
  await fs.rename(filePath, newPath)
  return newPath
}