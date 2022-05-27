import {MigrationInterface, QueryRunner} from "typeorm";

export class createTaskTable1653656601016 implements MigrationInterface {
    name = 'createTaskTable1653656601016'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Tasks" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_f38c2a61ff630a16afca4dac442" DEFAULT NEWSEQUENTIALID(), "title" nvarchar(255) NOT NULL, "description" nvarchar(255) NOT NULL, "status" nvarchar(255) NOT NULL, CONSTRAINT "PK_f38c2a61ff630a16afca4dac442" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Tasks"`);
    }

}
