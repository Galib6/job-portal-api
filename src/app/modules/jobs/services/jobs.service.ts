import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "@src/app/base";
import { Repository } from "typeorm";
import { Job } from "../entities/job.entity";

@Injectable()
export class JobsService extends BaseService<Job> {
  constructor(
    @InjectRepository(Job)
    private readonly _repo: Repository<Job>
  ) {
    super(_repo);
  }
}
