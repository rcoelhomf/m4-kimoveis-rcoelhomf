import { Router } from 'express'
import { getAllCategories, getAllRealEstateByCategory, postNewCategory } from '../controllers/categories.controller'
import { verifyAdminMiddleware, verifyTokenMiddleware } from '../middlewares/global.middlewares'
import { verifyCategoryIdMiddleware, verifyNameMiddleware } from '../middlewares/categories.middlewares'

export const categoriesRoutes: Router = Router()

categoriesRoutes.post('', verifyTokenMiddleware, verifyNameMiddleware, verifyAdminMiddleware, postNewCategory)
categoriesRoutes.get('', getAllCategories)
categoriesRoutes.get('/:id/realEstate', verifyCategoryIdMiddleware, getAllRealEstateByCategory)