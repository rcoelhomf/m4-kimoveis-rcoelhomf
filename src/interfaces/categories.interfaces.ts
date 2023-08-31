import { z } from 'zod'
import { createCategorySchema } from '../schemas/categories.schema'
import { Repository } from 'typeorm'
import { Category } from '../entities'

export type CreateCategory = z.infer<typeof createCategorySchema>

export type CategoryRepo = Repository<Category>