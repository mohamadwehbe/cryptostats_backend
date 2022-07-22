import {MigrationInterface, QueryRunner} from "typeorm";

export class createTypes1658495421337 implements MigrationInterface {
    name = 'createTypes1658495421337'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Types" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, CONSTRAINT "PK_bde908db2fba586c7332a13f03d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Types"`);
    }

}
