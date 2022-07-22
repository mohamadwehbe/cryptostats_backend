import { Body, Controller, Delete, Get, Logger, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { GetUser } from '../auth/get-user.decorator';
import { Expense } from '../entities/expense.entity';
import { User } from '../entities/user.entity';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { ExpensesService } from './expenses.service';
@ApiTags('Expenses')
@Controller('expenses')
@UseGuards(AuthGuard())
@ApiBearerAuth()
export class ExpensesController {
    private logger = new Logger('ExpensesController');

    constructor(private readonly expensesService: ExpensesService) { }

    @Get()
    getExpenses(
        @GetUser() user: User,
    ): Promise<Expense[]> {
        this.logger.verbose(
            `User "${user.username}" retrieving all expenses.`,
        );
        return this.expensesService.getExpenses(user);
    }

    @Get('/:id')
    getExpenseById(@Param('id') id: string, @GetUser() user: User): Promise<Expense> {
        return this.expensesService.getExpenseById(id, user);
    }

    @Post()
    createExpense(
        @Body() createExpensedto: CreateExpenseDto,
        @GetUser() user: User,
    ): Promise<Expense> {
        this.logger.verbose(
            `User "${user.username}" creating a new expense. Data ${JSON.stringify(
                createExpensedto,
            )}`,
        );
        return this.expensesService.createExpense(createExpensedto, user);
    }

    @Delete('/:id')
    deleteExpense(@Param('id') id: string, @GetUser() user: User): Promise<void> {
        return this.expensesService.deleteExpense(id, user);
    }

    @Patch('/:id')
    updateExpense(
        @Param('id') id: string,
        @Body() updateExpenseDto: UpdateExpenseDto,
        @GetUser() user: User,
    ): Promise<Expense> {
        const { name, amount, typeId, statusId } = updateExpenseDto;
        return this.expensesService.updateExpense(id, name, amount, typeId, statusId, user);
    }
}