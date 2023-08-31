import { Router } from 'express'
import { postLogin } from '../controllers/login.controlles'

export const loginRoute: Router = Router()

loginRoute.post('', postLogin)