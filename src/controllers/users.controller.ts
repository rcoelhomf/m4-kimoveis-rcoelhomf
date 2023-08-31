import { Request, Response } from 'express'
import { createNewUser, eraseUser, listAllUsers, updateUser } from '../services/users.services'

export const postNewUser = async (req: Request, res: Response): Promise<Response> => {
    const user = await createNewUser(req.body)
    return res.status(201).json(user)
}

export const getAllUsers = async (req: Request, res: Response): Promise<Response> => {
    const users = await listAllUsers()
    return res.status(200).json(users)
}

export const patchUser = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params
    const user = await updateUser(req.body, Number(id))
    return res.status(200).json(user)
}

export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params
    await eraseUser(Number(id))
    return res.status(204).json()
}