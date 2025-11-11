import { Module } from '@nestjs/common';
import { ScheduleProfessionsService } from './schedule-professions.service';
import { ScheduleProfessionsController } from './schedule-professions.controller';

@Module({
  controllers: [ScheduleProfessionsController],
  providers: [ScheduleProfessionsService],
})
export class ScheduleProfessionsModule {}
