import { Request, Response } from 'express'
import { createNewCategory, listAllCategories, listAllRealEstatesByCategory } from '../services/categories.services'

export const postNewCategory = async (req: Request, res: Response): Promise<Response> => {
    const category = await createNewCategory(req.body)

    return res.status(201).json(category)
}

export const getAllCategories = async (req: Request, res: Response): Promise<Response> => {
    const categories = await listAllCategories()

    return res.status(200).json(categories)
}

export const getAllRealEstateByCategory = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params
    const realEstates = await listAllRealEstatesByCategory(Number(id))

    return res.status(200).json(realEstates)
}