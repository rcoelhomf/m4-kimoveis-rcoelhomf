import { Router } from 'express'
import { postLogin } from '../controllers/login.controller'

export const loginRoute: Router = Router()

loginRoute.post('', postLogin)