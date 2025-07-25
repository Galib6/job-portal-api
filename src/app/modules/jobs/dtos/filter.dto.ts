import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { BaseFilterDTO } from "@src/app/base/baseFilter.dto";
import { IsEnum, IsNumberString, IsOptional, IsString } from "class-validator";
import { JobType, LocationType } from "./create.dto";

export class JobFilterDTO extends BaseFilterDTO {
  @ApiProperty({
    type: Number,
    description: "Limit the number of results",
    default: 10,
    required: false,
  })
  @IsOptional()
  @IsNumberString()
  readonly limit: number = 10;

  @ApiProperty({
    type: Number,
    description: "The page number",
    default: 1,
    required: false,
  })
  @IsOptional()
  @IsNumberString()
  readonly page: number = 1;

  @ApiProperty({
    type: String,
    description: "The search term",
    required: false,
  })
  @IsOptional()
  @IsString()
  readonly searchTerm!: string;

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

  @ApiPropertyOptional({
    description: "Type of location",
    example: "e",
  })
  @IsOptional()
  @IsString()
  location?: string;
}
