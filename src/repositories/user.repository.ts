import { ConflictException, InternalServerErrorException, Logger } from '@nestjs/common';
import { AuthCredentialsDto } from '../auth/dto/auth-credentials.dto';
import { User } from '../entities/user.entity';
import { EntityRepository, getManager, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  private logger = new Logger('User Repository');
  async createUser(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    let userExists = await this.findOne({
      where: { username: authCredentialsDto.username.toLowerCase() },
    });
    if (userExists) {
      throw new ConflictException('Username already Exists');
    }
    const { username, password } = authCredentialsDto;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = this.create({ username, password: hashedPassword });
    await this.save(user);
  }

  async getUserData(user: User) {

    const manager = getManager();
    try {

      const userData = await manager.createQueryBuilder(User, 'user')
        .leftJoinAndMapMany('user.expenses', 'user.expenses', 'expense')
        .leftJoinAndMapMany('user.tasks', 'user.tasks', 'task')
        .where('user.id =:userId', { userId: user.id })
        .getMany()
      return {
        Username: user.username,
        Expenses: user.expenses.map(exp => { return { Name: exp.name, Amount: exp.amount } }),
        Tasks: user.tasks.map(task => { return { Title: task.title, Description: task.description } })
      };
    } catch (error) {
      this.logger.error(
        `Failed to get user data for user "${user.username
        }".`,
        error.stack,
      );
      throw new InternalServerErrorException();
    }

  }

}
