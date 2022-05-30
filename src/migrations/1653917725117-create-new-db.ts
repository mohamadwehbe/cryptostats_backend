import {MigrationInterface, QueryRunner} from "typeorm";

export class createNewDb1653917725117 implements MigrationInterface {
    name = 'createNewDb1653917725117'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Tasks" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_f38c2a61ff630a16afca4dac442" DEFAULT NEWSEQUENTIALID(), "title" nvarchar(255) NOT NULL, "description" nvarchar(255) NOT NULL, "status" nvarchar(255) NOT NULL, "userId" uniqueidentifier, CONSTRAINT "PK_f38c2a61ff630a16afca4dac442" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Users" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_16d4f7d636df336db11d87413e3" DEFAULT NEWSEQUENTIALID(), "username" nvarchar(255) NOT NULL, "password" nvarchar(255) NOT NULL, CONSTRAINT "PK_16d4f7d636df336db11d87413e3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Tasks" ADD CONSTRAINT "FK_ca17d7904535e3448bf3634a2ba" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Tasks" DROP CONSTRAINT "FK_ca17d7904535e3448bf3634a2ba"`);
        await queryRunner.query(`DROP TABLE "Users"`);
        await queryRunner.query(`DROP TABLE "Tasks"`);
    }

}
