import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "@src/app/base";
import { Repository } from "typeorm";
import { Application } from "../entities/application.entity";

@Injectable()
export class ApplicationsService extends BaseService<Application> {
  constructor(
    @InjectRepository(Application)
    private readonly _repo: Repository<Application>
  ) {
    super(_repo);
  }
}
