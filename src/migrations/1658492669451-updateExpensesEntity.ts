import {MigrationInterface, QueryRunner} from "typeorm";

export class updateExpensesEntity1658492669451 implements MigrationInterface {
    name = 'updateExpensesEntity1658492669451'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Expenses" ADD "typeId" int NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Expenses" ADD "statusId" int NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Expenses" DROP COLUMN "statusId"`);
        await queryRunner.query(`ALTER TABLE "Expenses" DROP COLUMN "typeId"`);
    }

}
