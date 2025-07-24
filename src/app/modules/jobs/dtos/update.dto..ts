import { OmitType, PartialType } from "@nestjs/swagger";
import { IsOptional } from "class-validator";
import { JobCreateDto } from "./create.dto";

export class JobUpdateDto extends PartialType(
  OmitType(JobCreateDto, ["createdBy"])
) {
  @IsOptional()
  updatedBy: any;
}
