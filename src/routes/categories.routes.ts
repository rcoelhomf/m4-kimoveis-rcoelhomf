import { Router } from 'express'
import { getAllCategories, getAllRealEstateByCategory, postNewCategory } from '../controllers/categories.controller'

export const categoriesRoutes: Router = Router()

categoriesRoutes.post('', postNewCategory)
categoriesRoutes.get('', getAllCategories)
categoriesRoutes.get('/:id/realEstate', getAllRealEstateByCategory)