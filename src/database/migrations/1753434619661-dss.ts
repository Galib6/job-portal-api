import { MigrationInterface, QueryRunner } from 'typeorm';

export class Dss1753434619661 implements MigrationInterface {
  name = 'Dss1753434619661';

  public async up(queryRunner: QueryRunner): Promise<void> {
    // Auto-generated migration queries
        await queryRunner.query(`ALTER TABLE "jobs" DROP COLUMN "requirements"`);
        await queryRunner.query(`ALTER TABLE "jobs" ADD "requirements" text`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Auto-generated rollback queries
        await queryRunner.query(`ALTER TABLE "jobs" ADD "requirements" jsonb`);
        await queryRunner.query(`ALTER TABLE "jobs" DROP COLUMN "requirements"`);
  }
}
