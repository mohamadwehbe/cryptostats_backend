import {MigrationInterface, QueryRunner} from "typeorm";

export class createStatusTable1652967526734 implements MigrationInterface {
    name = 'createStatusTable1652967526734'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Statuses" ("Id" int NOT NULL IDENTITY(1,1), "Name" nvarchar(255) NOT NULL, CONSTRAINT "PK_6eff60a532e72472b0bbc095e01" PRIMARY KEY ("Id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Statuses"`);
    }

}
