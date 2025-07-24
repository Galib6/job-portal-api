import { MigrationInterface, QueryRunner } from 'typeorm';

export class G1753374734612 implements MigrationInterface {
  name = 'G1753374734612';

  public async up(queryRunner: QueryRunner): Promise<void> {
    // Auto-generated migration queries
        await queryRunner.query(`CREATE TABLE "jobs" ("id" SERIAL NOT NULL, "isActive" boolean DEFAULT true, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "title" character varying, "description" character varying, "location" character varying, "salary" character varying, "companyName" character varying, "position" character varying, "applicationDeadline" TIMESTAMP, "vacancies" integer, "age" character varying, "experience" character varying, "requirements" jsonb, "createdById" integer, "updatedById" integer, CONSTRAINT "PK_cf0a6c42b72fcc7f7c237def345" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "applications" ("id" SERIAL NOT NULL, "isActive" boolean DEFAULT true, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "applicantName" character varying, "applicantEmail" character varying, "cvUrl" character varying, "createdById" integer, "updatedById" integer, "jobId" integer NOT NULL, "userId" integer NOT NULL, CONSTRAINT "PK_938c0a27255637bde919591888f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "jobs" ADD CONSTRAINT "FK_942364c910910a09a018566455e" FOREIGN KEY ("createdById") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "jobs" ADD CONSTRAINT "FK_097bfda46e8acc447e87f6cd06f" FOREIGN KEY ("updatedById") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "applications" ADD CONSTRAINT "FK_e0920cba7a5e76659f6f10e884e" FOREIGN KEY ("createdById") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "applications" ADD CONSTRAINT "FK_5d8ae7d8e8cbeb1c3e9f39cc0c9" FOREIGN KEY ("updatedById") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "applications" ADD CONSTRAINT "FK_f6ebb8bc5061068e4dd97df3c77" FOREIGN KEY ("jobId") REFERENCES "jobs"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "applications" ADD CONSTRAINT "FK_90ad8bec24861de0180f638b9cc" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Auto-generated rollback queries
        await queryRunner.query(`DROP TABLE "jobs"`);
        await queryRunner.query(`DROP TABLE "applications"`);
        await queryRunner.query(`ALTER TABLE "jobs" DROP CONSTRAINT "FK_942364c910910a09a018566455e"`);
        await queryRunner.query(`ALTER TABLE "jobs" DROP CONSTRAINT "FK_097bfda46e8acc447e87f6cd06f"`);
        await queryRunner.query(`ALTER TABLE "applications" DROP CONSTRAINT "FK_e0920cba7a5e76659f6f10e884e"`);
        await queryRunner.query(`ALTER TABLE "applications" DROP CONSTRAINT "FK_5d8ae7d8e8cbeb1c3e9f39cc0c9"`);
        await queryRunner.query(`ALTER TABLE "applications" DROP CONSTRAINT "FK_f6ebb8bc5061068e4dd97df3c77"`);
        await queryRunner.query(`ALTER TABLE "applications" DROP CONSTRAINT "FK_90ad8bec24861de0180f638b9cc"`);
  }
}
