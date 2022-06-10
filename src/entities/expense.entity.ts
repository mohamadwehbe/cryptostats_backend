import { Exclude } from 'class-transformer';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity('Expenses')
export class Expense {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column()
  amount: number;
  @ManyToOne((_type) => User, (user) => user.expenses, { eager: false })
  @Exclude({ toPlainOnly: true })
  user: User;
}
