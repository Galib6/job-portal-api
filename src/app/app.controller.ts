import { Controller, Get, Post } from "@nestjs/common";
import { ApiOperation } from "@nestjs/swagger";
import { AppService } from "./app.service";
import { LogCleanupService } from "./services";

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly logCleanupService: LogCleanupService
  ) {}

  @Get("/health")
  health() {
    return { status: "ok" };
  }

  @ApiOperation({ summary: "Get log files statistics" })
  @Get("/logs/stats")
  async getLogStats() {
    const stats = await this.logCleanupService.getLogStats();
    return {
      message: "Log statistics retrieved successfully",
      data: stats,
    };
  }

  @ApiOperation({ summary: "Manually trigger log cleanup" })
  @Post("/logs/cleanup")
  async manualLogCleanup() {
    await this.logCleanupService.manualCleanup();
    return {
      message: "Log cleanup triggered successfully",
    };
  }
}
