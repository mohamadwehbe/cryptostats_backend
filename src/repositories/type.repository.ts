import { EntityRepository, Repository } from "typeorm";
import { InternalServerErrorException, Logger } from "@nestjs/common";
import { Type } from "../entities/type.entity";

@EntityRepository(Type)
export class TypeRepository extends Repository<Type> {
    private logger = new Logger('Type Repository');

    async getTypes(): Promise<Type[]> {

        const query = this.createQueryBuilder('types');
        try {
            const types = await query.getMany();
            return types;
        } catch (error) {
            this.logger.error(
                `Failed to get types.`,
                error.stack,
            );
            throw new InternalServerErrorException();
        }

    }
}