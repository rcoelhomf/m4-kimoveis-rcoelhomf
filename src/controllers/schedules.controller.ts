import { Request, Response } from 'express'
import { createNewSchedule, listAllSchedulesRealEstate } from '../services/schedules.services'

export const postNewSchedule = async (req: Request, res: Response): Promise<Response> => {
    const { sub } = res.locals.decoded
    await createNewSchedule(req.body, Number(sub))

    return res.status(201).json({ message: 'Schedule created' })
}

export const getAllSchedulesRealEstate = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params
    const realEstate = await listAllSchedulesRealEstate(Number(id))

    return res.status(200).json(realEstate)
}