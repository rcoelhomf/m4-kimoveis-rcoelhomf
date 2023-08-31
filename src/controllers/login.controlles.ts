import { Request, Response } from 'express'
import { loginUser } from '../services/login.services'

export const postLogin = async (req: Request, res: Response): Promise<Response> => {
    const token = await loginUser(req.body)

    return res.status(200).json(token)
}