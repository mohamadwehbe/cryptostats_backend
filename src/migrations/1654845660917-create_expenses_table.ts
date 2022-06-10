import {MigrationInterface, QueryRunner} from "typeorm";

export class createExpensesTable1654845660917 implements MigrationInterface {
    name = 'createExpensesTable1654845660917'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Expenses" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_73a0d7637c29244275d95476dfd" DEFAULT NEWSEQUENTIALID(), "name" nvarchar(255) NOT NULL, "amount" int NOT NULL, "userId" uniqueidentifier, CONSTRAINT "PK_73a0d7637c29244275d95476dfd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Expenses" ADD CONSTRAINT "FK_3ccd68f2e3057e48f220b789588" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Expenses" DROP CONSTRAINT "FK_3ccd68f2e3057e48f220b789588"`);
        await queryRunner.query(`DROP TABLE "Expenses"`);
    }

}
