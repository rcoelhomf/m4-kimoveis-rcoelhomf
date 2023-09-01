import { Router } from 'express'
import { deleteUser, getAllUsers, patchUser, postNewUser } from '../controllers/users.controller'
import { verifyEmailExistsMiddleware, verifyIdExistsMiddleware } from '../middlewares/users.middlewares'
import { validateBody, verifyAdminMiddleware, verifyPermissionMiddleware, verifyTokenMiddleware } from '../middlewares/global.middlewares'
import { createUserSchema, updateUserSchema } from '../schemas/users.schema'

export const userRoutes: Router = Router()

userRoutes.post('', validateBody(createUserSchema), verifyEmailExistsMiddleware, postNewUser)
userRoutes.get('', verifyTokenMiddleware, verifyAdminMiddleware, getAllUsers)
userRoutes.patch('/:id', validateBody(updateUserSchema), verifyTokenMiddleware, verifyIdExistsMiddleware, verifyPermissionMiddleware, patchUser)
userRoutes.delete('/:id', verifyTokenMiddleware, verifyIdExistsMiddleware, verifyAdminMiddleware, deleteUser)