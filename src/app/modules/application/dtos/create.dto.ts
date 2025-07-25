import { ApiProperty } from "@nestjs/swagger";
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from "class-validator";
import { Job } from "../../jobs/entities/job.entity";

export class ApplicationCreateDto {
  @ApiProperty({
    type: String,
    description: "Name of the applicant",
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  applicantName?: string;

  @ApiProperty({
    type: String,
    description: "Email of the applicant",
    required: true,
  })
  @IsNotEmpty()
  @IsEmail()
  applicantEmail?: string;

  @ApiProperty({
    type: String,
    description: "notes of the applicant",
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  notes?: string;

  @ApiProperty({ type: String, description: "Job ID", required: true })
  @IsNotEmpty()
  @IsNumber()
  job?: Job;

  @ApiProperty({ type: String, description: "CV URL", required: false })
  @IsString()
  cvUrl?: string;

  @IsOptional()
  createdBy: any;
}
