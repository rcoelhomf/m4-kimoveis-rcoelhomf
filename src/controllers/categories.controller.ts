import { Request, Response } from 'express'
import { createNewCategory, listAllCategories } from '../services/categories.services'

export const postNewCategory = async (req: Request, res: Response): Promise<Response> => {
    const category = await createNewCategory(req.body)

    return res.status(201).json(category)
}

export const getAllCategories = async (req: Request, res: Response): Promise<Response> => {
    const categories = await listAllCategories()

    return res.status(200).json(categories)
}