import { z } from 'zod'

export const productAdminBody = z.strictObject({
   name: z.preprocess(
      (file) => file?.value,             // 1. Просто достаем .value из объекта
      z.string().trim().min(2).max(100)  // 2. Валидируем строку как обычно
   ),

   categoryId: z.preprocess(
      (file) => file?.value,
      z.coerce.number().int().min(1)
   ),

   priceDefault: z.preprocess(
      (file) => file?.value,
      z.coerce.number().nonnegative().nullish()
   ),

   bonusCoinsDefault: z.preprocess(
      (file) => file?.value,
      z.coerce.number().nonnegative().nullish()
   ),

   descriptionShort: z.preprocess(
      (file) => file?.value,
      z.string()
         .trim()
         .min(2)
         .max(255)
         .catch('')
         .transform((val) => (val === '' ? null : val))
         .nullish()
   ),

   descriptionFull: z.preprocess(
      (file) => file?.value,
      z.string()
         .trim()
         .min(2)
         .max(2000)
         .catch('')
         .transform((val) => (val === '' ? null : val))
         .nullish()
   ),

   positionInCategory: z.preprocess(
      (file) => {
         const val = file?.value; // 1. Достаем текстовое значение

         // 2. Ваша логика очистки строк
         if (val === 'null' || val === 'undefined' || val === '' || val === undefined) {
            return null;
         }

         // 3. Превращаем в число перед отправкой в Zod
         return Number(val);
      },
      // 4. Валидируем уже очищенное число или null
      z.number().int().min(1).max(1000).nullish()
   ),

   imageFile: z
      .custom()
      .refine(
         (file) => !file || !file.mimetype || file.mimetype.startsWith('image'),
         { message: 'Можно добавлять только файлы картинок' }
      )
      .optional(),

   isActive: z.preprocess(
      (file) => {
         const val = file?.value; // 1. Достаем текстовое значение поля

         if (val === '1' || val === 'true') return true;
         if (val === '0' || val === 'false') return false;

         return val; // Если пришло что-то другое, отдаем как есть, чтобы Zod выдал ошибку валидации
      },
      // 2. Проверяем, что на выходе получился честный boolean
      z.boolean({
         required_error: "Поле isActive обязательно для заполнения",
         invalid_type_error: "Поле isActive должно быть логического типа (true/false или 1/0)"
      })
   ),
})
