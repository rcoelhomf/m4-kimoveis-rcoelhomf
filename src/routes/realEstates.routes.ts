import { Router } from 'express'
import { getAllRealEstate, postNewRealEstate } from '../controllers/realEstates.controller'
import { validateBody, verifyAdminMiddleware, verifyTokenMiddleware } from '../middlewares/global.middlewares'
import { createRealEstateSchema } from '../schemas/realEstates.schemas'
import { verifyAddressExists } from '../middlewares/realEstates.middlewares'

export const realEstatesRoutes: Router = Router()

realEstatesRoutes.post('', verifyTokenMiddleware, verifyAdminMiddleware, validateBody(createRealEstateSchema), verifyAddressExists, postNewRealEstate)
realEstatesRoutes.get('', getAllRealEstate)
