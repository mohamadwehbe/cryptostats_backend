import {MigrationInterface, QueryRunner} from "typeorm";

export class createUserTable1653902448071 implements MigrationInterface {
    name = 'createUserTable1653902448071'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Users" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_16d4f7d636df336db11d87413e3" DEFAULT NEWSEQUENTIALID(), "username" nvarchar(255) NOT NULL, "password" nvarchar(255) NOT NULL, CONSTRAINT "PK_16d4f7d636df336db11d87413e3" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Users"`);
    }

}
