import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

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
  @IsNumber()
  age?: number;

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

  @IsOptional()
  createdBy: any;
}
