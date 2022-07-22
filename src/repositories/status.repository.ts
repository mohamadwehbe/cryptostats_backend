import { Status } from "../entities/status.entity";
import { EntityRepository, Repository } from "typeorm";
import { InternalServerErrorException, Logger } from "@nestjs/common";

@EntityRepository(Status)
export class StatusRepository extends Repository<Status> {
    private logger = new Logger('Status Repository');

    async getStatuses(): Promise<Status[]> {

        const query = this.createQueryBuilder('statuses');
        try {
            const statuses = await query.getMany();
            return statuses;
        } catch (error) {
            this.logger.error(
                `Failed to get statuses.`,
                error.stack,
            );
            throw new InternalServerErrorException();
        }

    }
}