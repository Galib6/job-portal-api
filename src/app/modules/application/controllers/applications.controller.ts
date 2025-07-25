import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from "@nestjs/common";
import { ApiBearerAuth } from "@nestjs/swagger";
import { Auth } from "@src/app/decorators";
import { AuthType } from "@src/app/enums/auth-type.enum";
import { SuccessResponse } from "@src/app/types";
import { ApplicationCreateDto } from "../dtos/create.dto";
import { ApplicationFilterDTO } from "../dtos/filter.dto";
import { ApplicationUpdateDto } from "../dtos/update.dto";
import { Application } from "../entities/application.entity";
import { ApplicationsService } from "../services/applications.service";

@Controller("applications")
@ApiBearerAuth()
export class ApplicationsController {
  RELATIONS = [];
  constructor(private readonly service: ApplicationsService) {}

  @Get()
  async findAll(
    @Query() query: ApplicationFilterDTO
  ): Promise<SuccessResponse | Application[]> {
    return this.service.findAllBase(query, { relations: this.RELATIONS });
  }

  @Get(":id")
  async findById(@Param("id") id: number): Promise<Application> {
    return this.service.findByIdBase(id, { relations: this.RELATIONS });
  }

  @Auth(AuthType.None)
  @Post()
  async createOne(@Body() body: ApplicationCreateDto): Promise<Application> {
    return this.service.createOneBase(body, { relations: this.RELATIONS });
  }

  @Patch(":id")
  async updateOne(
    @Param("id") id: number,
    @Body() body: ApplicationUpdateDto
  ): Promise<Application> {
    return this.service.updateOneBase(id, body, { relations: this.RELATIONS });
  }

  @Delete(":id")
  async deleteOne(@Param("id") id: number): Promise<SuccessResponse> {
    return this.service.deleteOneBase(id);
  }
}
