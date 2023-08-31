import { Category } from '../entities'
import { CreateCategory } from '../interfaces/categories.interfaces'
import { categoryRepo } from '../repositories'

export const createNewCategory = async (body: CreateCategory): Promise<Category> => {
    return await categoryRepo.save(body)
}

export const listAllCategories = async (): Promise<Category[]> => {
    return await categoryRepo.find()
}