import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from "class-validator";

export enum JobType {
  FullTime = "Full-time",
  PartTime = "Part-time",
  Contract = "Contract",
  Temporary = "Temporary",
  Internship = "Internship",
  Volunteer = "Volunteer",
}

export enum LocationType {
  Remote = "Remote",
  OnSite = "On-site",
  Hybrid = "Hybrid",
}

export class JobCreateDto {
  @ApiProperty({ description: "Job title" })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({ description: "Job description" })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiPropertyOptional({ description: "Job location" })
  @IsOptional()
  @IsString()
  location?: string;

  @ApiPropertyOptional({ description: "Salary for the job", type: Number })
  @IsOptional()
  @IsNumber()
  salary?: number;

  @ApiPropertyOptional({ description: "Company name" })
  @IsOptional()
  @IsString()
  companyName?: string;

  @ApiPropertyOptional({ description: "Position name" })
  @IsOptional()
  @IsString()
  position?: string;

  @ApiPropertyOptional({
    description: "Application deadline",
    type: String,
    format: "date-time",
  })
  @IsOptional()
  @IsString()
  applicationDeadline?: Date;

  @ApiPropertyOptional({ description: "Number of vacancies", type: Number })
  @IsOptional()
  @IsNumber()
  vacancies?: number;

  @ApiPropertyOptional({ description: "Age requirement", type: Number })
  @IsOptional()
  @IsString()
  age?: string;

  @ApiPropertyOptional({ description: "Experience required" })
  @IsOptional()
  @IsString()
  experience?: string;

  @ApiPropertyOptional({
    description: "Job requirements",
    type: "object",
    additionalProperties: true,
  })
  @IsOptional()
  requirements?: any;

  @ApiPropertyOptional({
    description: "Type of job",
    enum: JobType,
  })
  @IsOptional()
  @IsString()
  @IsEnum(JobType)
  jobType?: JobType;

  @ApiPropertyOptional({
    description: "Type of location",
    enum: LocationType,
  })
  @IsOptional()
  @IsString()
  @IsEnum(LocationType)
  locationType?: LocationType;

  @IsOptional()
  createdBy: any;
}
