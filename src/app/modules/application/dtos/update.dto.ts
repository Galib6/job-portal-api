import { OmitType, PartialType } from "@nestjs/swagger";
import { IsOptional } from "class-validator";
import { ApplicationCreateDto } from "./create.dto";

export class ApplicationUpdateDto extends PartialType(
  OmitType(ApplicationCreateDto, ["createdBy"])
) {
  @IsOptional()
  updatedBy: any;
}
