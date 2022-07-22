import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Types')
export class Type {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
}