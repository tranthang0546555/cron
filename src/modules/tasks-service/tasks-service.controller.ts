import { Controller, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Controller('tasks-service')
export class TasksServiceController {
  private readonly logger = new Logger(TasksServiceController.name);

  @Cron(CronExpression.EVERY_10_MINUTES)
  async handleCron() {
    const targets = process.env.API_TARGET.split(',');
    this.logger.log('Every 10 minutes, avoid shutting down the server');
    targets.forEach(async (target) => {
      await fetch(target);
      this.logger.log('Called :: ' + target);
    });
  }
}
