import { Category, RealEstate } from '../entities'
import { CreateCategory } from '../interfaces/categories.interfaces'
import { categoryRepo } from '../repositories'

export const createNewCategory = async (body: CreateCategory): Promise<Category> => {
    return await categoryRepo.save(body)
}

export const listAllCategories = async (): Promise<Category[]> => {
    return await categoryRepo.find()
}

export const listAllRealEstatesByCategory = async (id: number): Promise<any> => {
    return await categoryRepo.findOne({ where: { id: id }, relations: { realEstate: true } })
}