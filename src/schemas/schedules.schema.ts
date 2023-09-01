import { z } from 'zod'

const scheduleSchema = z.object({
    id: z.number().positive(),
    date: z.string(),
    hour: z.string(),
    realEstateId: z.number().int().positive(),
    userId: z.number().int().positive()
})

export const createNewScheduleSchema = scheduleSchema.omit({ id: true, userId: true })