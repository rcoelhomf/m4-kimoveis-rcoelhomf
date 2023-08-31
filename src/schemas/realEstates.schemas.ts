import { z } from 'zod'

const realEstateSchema = z.object({
    id: z.number().positive(),
    value: z.string().or(z.number()).default(0),
    size: z.number().int().positive(),
    address: z.object({
        street: z.string().max(45),
        zipCode: z.string().max(8),
        number: z.number().int().positive(),
        city: z.string().max(20),
        state: z.string().max(2)
    }),
    categoryId: z.number().int().positive(),
    sold: z.boolean().default(false),
    createdAt: z.string(),
    updatedAt: z.string()
})

export const createRealEstateSchema = realEstateSchema.omit({ id: true, sold: true, createdAt: true, updatedAt: true })