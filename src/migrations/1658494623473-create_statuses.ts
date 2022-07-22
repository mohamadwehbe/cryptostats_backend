import {MigrationInterface, QueryRunner} from "typeorm";

export class createStatuses1658494623473 implements MigrationInterface {
    name = 'createStatuses1658494623473'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Statuses" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, CONSTRAINT "PK_4fa736ddb0fc9fa158c2b373262" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Statuses"`);
    }

}
