import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Expense } from '../entities/expense.entity';
import { User } from '../entities/user.entity';
import { ExpenseRepository } from '../repositories/expense.repository';
import { CreateExpenseDto } from './dto/create-expense.dto';

@Injectable()
export class ExpensesService {
    constructor(
        @InjectRepository(ExpenseRepository)
        private expenseRepository: ExpenseRepository,
    ) { }
    async getExpenses(user: User): Promise<Expense[]> {
        return this.expenseRepository.getExpenses(user);
    }

    async getExpenseById(id: string, user: User): Promise<Expense> {
        const found = await this.expenseRepository.findOne({ where: { id, user } });
        if (!found) {
            throw new NotFoundException(`Expense with id '${id}' not found`);
        }
        return found;
    }

    createExpense(createExpenseDto: CreateExpenseDto, user: User): Promise<Expense> {
        return this.expenseRepository.createExpense(createExpenseDto, user);
    }

    async deleteExpense(id: string, user: User): Promise<void> {
        const result = await this.expenseRepository.delete({ id, user });

        if (result.affected === 0) {
            throw new NotFoundException(`Expense with id '${id}' not found`);
        }
    }

    async updateExpense(
        id: string,
        name: string,
        amount: number,
        user: User,
    ): Promise<Expense> {
        const expense = await this.getExpenseById(id, user);
        expense.name = name;
        expense.amount = amount;
        await this.expenseRepository.save(expense);
        return expense;
    }
}
