import { Router } from 'express'
import { deleteUser, getAllUsers, patchUser, postNewUser } from '../controllers/users.controller'

export const userRoutes: Router = Router()

userRoutes.post('', postNewUser)
userRoutes.get('', getAllUsers)
userRoutes.patch('/:id', patchUser)
userRoutes.delete('/:id', deleteUser)