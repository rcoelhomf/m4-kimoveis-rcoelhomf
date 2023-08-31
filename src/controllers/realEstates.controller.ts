import { Request, Response } from 'express'
import { createRealState, listAllRealEstates } from '../services/realEstates.services'

export const postNewRealEstate = async (req: Request, res: Response): Promise<Response> => {
    const realEstate = await createRealState(req.body)

    return res.status(201).json(realEstate)
}

export const getAllRealEstate = async (req: Request, res: Response): Promise<Response> => {
    const realEstates = await listAllRealEstates()

    return res.status(200).json(realEstates)
}