import { MigrationInterface, QueryRunner } from 'typeorm';

export class D1753429035989 implements MigrationInterface {
  name = 'D1753429035989';

  public async up(queryRunner: QueryRunner): Promise<void> {
    // Auto-generated migration queries
        await queryRunner.query(`ALTER TABLE "jobs" ADD "jobsType" character varying`);
        await queryRunner.query(`ALTER TABLE "jobs" ADD "locationType" character varying`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Auto-generated rollback queries
        await queryRunner.query(`ALTER TABLE "jobs" DROP COLUMN "jobsType"`);
        await queryRunner.query(`ALTER TABLE "jobs" DROP COLUMN "locationType"`);
  }
}
