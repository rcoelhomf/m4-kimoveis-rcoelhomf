import { z } from 'zod'
import { createRealEstateSchema } from '../schemas/realEstates.schemas'
import { Repository } from 'typeorm'
import { Address, RealEstate } from '../entities'

export type CreateRealEstate = z.infer<typeof createRealEstateSchema>

export type RealEstateRepo = Repository<RealEstate>
export type AddressRepo = Repository<Address>