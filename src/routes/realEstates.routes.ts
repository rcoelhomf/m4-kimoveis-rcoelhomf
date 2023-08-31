import { Router } from 'express'
import { getAllRealEstate, postNewRealEstate } from '../controllers/realEstates.controller'
import { validateBody } from '../middlewares/global.middlewares'
import { createRealEstateSchema } from '../schemas/realEstates.schemas'

export const realEstatesRoutes: Router = Router()

realEstatesRoutes.post('', validateBody(createRealEstateSchema), postNewRealEstate)
realEstatesRoutes.get('', getAllRealEstate)
