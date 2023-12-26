import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { TasksServiceModule } from './modules/tasks-service/tasks-service.module';


@Module({
  imports: [ScheduleModule.forRoot(), TasksServiceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
