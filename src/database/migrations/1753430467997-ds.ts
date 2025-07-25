import { MigrationInterface, QueryRunner } from 'typeorm';

export class Ds1753430467997 implements MigrationInterface {
  name = 'Ds1753430467997';

  public async up(queryRunner: QueryRunner): Promise<void> {
    // Auto-generated migration queries
        await queryRunner.query(`ALTER TABLE "jobs" RENAME COLUMN "jobsType" TO "jobType"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Auto-generated rollback queries
        await queryRunner.query(`ALTER TABLE "jobs" RENAME COLUMN "jobType" TO "jobsType"`);
  }
}
