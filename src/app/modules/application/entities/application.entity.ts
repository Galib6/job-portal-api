import { BaseEntity } from "@src/app/base";
import { ENUM_COLUMN_TYPES, ENUM_TABLE_NAMES } from "@src/shared";
import { Type } from "class-transformer";
import { Column, Entity, ManyToOne, RelationId } from "typeorm";
import { Job } from "../../jobs/entities/job.entity";
import { User } from "../../user/entities/user.entity";

@Entity(ENUM_TABLE_NAMES.APPLICATIONS, {
  orderBy: { createdAt: "DESC" },
})
export class Application extends BaseEntity {
  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, nullable: true })
  applicantName?: string;

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, nullable: true })
  applicantEmail?: string;

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, nullable: true })
  cvUrl?: string;

  @ManyToOne(() => Job, { onDelete: "NO ACTION", nullable: false })
  @Type(() => Job)
  job?: Job;

  @RelationId((e: Application) => e.job)
  jobId?: Job;

  @ManyToOne(() => User, { onDelete: "NO ACTION", nullable: true })
  @Type(() => User)
  user?: User;

  @RelationId((e: Application) => e.user)
  userId?: Job;
}
