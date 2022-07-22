import { Expense } from "../entities/expense.entity";
import { User } from "../entities/user.entity";
import { EntityRepository, Repository } from "typeorm";
import { InternalServerErrorException, Logger } from "@nestjs/common";
import { CreateExpenseDto } from "../expenses/dto/create-expense.dto";

@EntityRepository(Expense)
export class ExpenseRepository extends Repository<Expense> {

    private logger = new Logger('Expense Repository');

    async getExpenses(user: User): Promise<Expense[]> {

        const query = this.createQueryBuilder('expenses');
        query.where({ user });
        try {
            const expenses = await query.getMany();
            return expenses;
        } catch (error) {
            this.logger.error(
                `Failed to get expenses fro user "${user.username
                }".`,
                error.stack,
            );
            throw new InternalServerErrorException();
        }

    }

    async createExpense(createExpensedto: CreateExpenseDto, user: User): Promise<Expense> {
        const { name, amount, typeId, statusId } = createExpensedto;
        const expense = this.create({
            name,
            amount,
            typeId,
            statusId,
            user,
        });
        await this.save(expense);
        return expense;
    }
}