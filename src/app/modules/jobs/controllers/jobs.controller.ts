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
import { SuccessResponse } from "@src/app/types";
import { JobCreateDto } from "../dtos/create.dto";
import { JobFilterDTO } from "../dtos/filter.dto";
import { JobUpdateDto } from "../dtos/update.dto.";
import { Job } from "../entities/job.entity";
import { JobsService } from "../services/jobs.service";

@Controller("jobs")
@ApiBearerAuth()
export class JobsController {
  RELATIONS = [];
  constructor(private readonly service: JobsService) {}
  @Get()
  async findAll(
    @Query() query: JobFilterDTO
  ): Promise<SuccessResponse | Job[]> {
    return this.service.findAllBase(query, { relations: this.RELATIONS });
  }

  @Get(":id")
  async findById(@Param("id") id: number): Promise<Job> {
    return this.service.findByIdBase(id, { relations: this.RELATIONS });
  }

  @Post()
  async createOne(@Body() body: JobCreateDto): Promise<Job> {
    return this.service.createOneBase(body, { relations: this.RELATIONS });
  }

  @Patch(":id")
  async updateOne(
    @Param("id") id: number,
    @Body() body: JobUpdateDto
  ): Promise<Job> {
    return this.service.updateOneBase(id, body, { relations: this.RELATIONS });
  }

  @Delete(":id")
  async deleteOne(@Param("id") id: number): Promise<SuccessResponse> {
    return this.service.deleteOneBase(id);
  }
}
