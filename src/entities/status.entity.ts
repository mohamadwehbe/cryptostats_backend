import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Statuses')
export class Status {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
}