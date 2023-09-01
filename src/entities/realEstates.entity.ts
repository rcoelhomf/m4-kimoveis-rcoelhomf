import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Schedule } from './schedules.entity'
import { Category } from './categories.entity'
import { Address } from './addresses.entity'

@Entity('realEstates')
export class RealEstate {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ default: false })
    sold: boolean;

    @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 })
    value: string | number;

    @Column()
    size: number;

    @CreateDateColumn({ type: 'date' })
    createdAt: string;

    @UpdateDateColumn({ type: 'date' })
    updatedAt: string;

    @OneToMany(() => Schedule, (schedules) => schedules.realEstate)
    schedules: Schedule[];

    @OneToOne(() => Address, (adresses) => adresses.realEstate)
    @JoinColumn()
    address: Address

    @ManyToOne(() => Category, (categories) => categories.realEstate)
    category: Category;
}