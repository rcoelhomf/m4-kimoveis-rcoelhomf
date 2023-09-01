import { Router } from 'express'
import { getAllSchedulesRealEstate, postNewSchedule } from '../controllers/schedules.controller'
import { validateBody, verifyAdminMiddleware, verifyTokenMiddleware } from '../middlewares/global.middlewares'
import { createNewScheduleSchema } from '../schemas/schedules.schema'
import { verifyRealEstateIdMiddleware, verifyRealEstateScheduleExistsMiddlewares, verifyUserScheduleExistsMiddlewares } from '../middlewares/schedules.middlewares'

export const schedulesRoutes: Router = Router()

schedulesRoutes.post('', verifyTokenMiddleware, validateBody(createNewScheduleSchema), verifyRealEstateIdMiddleware, verifyRealEstateScheduleExistsMiddlewares, verifyUserScheduleExistsMiddlewares, postNewSchedule)
schedulesRoutes.get('/realEstate/:id', verifyTokenMiddleware, verifyAdminMiddleware, getAllSchedulesRealEstate)