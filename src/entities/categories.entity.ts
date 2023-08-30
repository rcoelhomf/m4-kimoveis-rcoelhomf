import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { RealEstate } from './realEstates.entity'

@Entity('categories')
export class Category {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ length: 45 })
    name: string;

    @OneToMany(() => RealEstate, (realEstates) => realEstates.category)
    realEstate: RealEstate[];
}