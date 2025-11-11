import { Module } from '@nestjs/common';
import { ScheduleDaysService } from './schedule-days.service';
import { ScheduleDaysController } from './schedule-days.controller';

@Module({
  controllers: [ScheduleDaysController],
  providers: [ScheduleDaysService],
})
export class ScheduleDaysModule {}
