import { z } from 'zod'

export const restaurantScheduleBodyValidationSchema = z.object({
   name: z
      .string().trim()
      .min(2, 'Название должно быть от 2 до 100 символов')
      .max(100, 'Название должно быть от 2 до 100 символов'),

   mondayIsOpen: z
      .boolean('Поле "Понедельник открыто" должно быть булевым значением'),

   mondayOpenTime: z
      .iso.time('Время должно быть в формате "03:15"'),

   mondayCloseTime: z
      .iso.time('Время должно быть в формате "03:15"'),

   tuesdayIsOpen: z
      .boolean('Поле "Вторник открыто" должно быть булевым значением'),

   tuesdayOpenTime: z
      .iso.time('Время должно быть в формате "03:15"'),

   tuesdayCloseTime: z
      .iso.time('Время должно быть в формате "03:15"'),

   wednesdayIsOpen: z
      .boolean('Поле "Среда открыто" должно быть булевым значением'),

   wednesdayOpenTime: z
      .iso.time('Время должно быть в формате "03:15"'),

   wednesdayCloseTime: z
      .iso.time('Время должно быть в формате "03:15"'),

   thursdayIsOpen: z
      .boolean('Поле "Четверг открыто" должно быть булевым значением'),

   thursdayOpenTime: z
      .iso.time('Время должно быть в формате "03:15"'),

   thursdayCloseTime: z
      .iso.time('Время должно быть в формате "03:15"'),

   fridayIsOpen: z
      .boolean('Поле "Пятница открыто" должно быть булевым значением'),

   fridayOpenTime: z
      .iso.time('Время должно быть в формате "03:15"'),

   fridayCloseTime: z
      .iso.time('Время должно быть в формате "03:15"'),

   saturdayIsOpen: z
      .boolean('Поле "Суббота открыто" должно быть булевым значением'),

   saturdayOpenTime: z
      .iso.time('Время должно быть в формате "03:15"'),

   saturdayCloseTime: z
      .iso.time('Время должно быть в формате "03:15"'),

   sundayIsOpen: z
      .boolean('Поле "Воскресенье открыто" должно быть булевым значением'),

   sundayOpenTime: z
      .iso.time('Время должно быть в формате "03:15"'),

   sundayCloseTime: z
      .iso.time('Время должно быть в формате "03:15"'),

}).strict()