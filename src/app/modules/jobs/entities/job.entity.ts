import { BaseEntity } from "@src/app/base";
import { ENUM_COLUMN_TYPES, ENUM_TABLE_NAMES } from "@src/shared";
import { Column, Entity } from "typeorm";

@Entity(ENUM_TABLE_NAMES.JOBS, { orderBy: { createdAt: "DESC" } })
export class Job extends BaseEntity {
  public static readonly SEARCH_TERMS: string[] = ["title", "location"];

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, nullable: true })
  title?: string;

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, nullable: true })
  description?: string;

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, nullable: true })
  location?: string;

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, nullable: true })
  salary?: number;

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, nullable: true })
  companyName?: string;

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, nullable: true })
  position?: string;

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, nullable: true })
  jobType?: string;

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, nullable: true })
  locationType?: string;

  @Column({ type: ENUM_COLUMN_TYPES.TIMESTAMP_UTC, nullable: true })
  applicationDeadline?: Date;

  @Column({ type: ENUM_COLUMN_TYPES.INT, nullable: true })
  vacancies?: number;

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, nullable: true })
  age?: string;

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, nullable: true })
  experience?: string;

  @Column({ type: ENUM_COLUMN_TYPES.TEXT, nullable: true })
  requirements?: any;
}
