import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { ExpenseRepository } from '../repositories/expense.repository';
import { ExpensesController } from './expenses.controller';
import { ExpensesService } from './expenses.service';

@Module({
  imports: [TypeOrmModule.forFeature([ExpenseRepository]), AuthModule],
  controllers: [ExpensesController],
  providers: [ExpensesService]
})
export class ExpensesModule { }
