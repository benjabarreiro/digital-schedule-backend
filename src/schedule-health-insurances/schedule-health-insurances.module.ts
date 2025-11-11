import { Module } from '@nestjs/common';
import { ScheduleHealthInsurancesService } from './schedule-health-insurances.service';
import { ScheduleHealthInsurancesController } from './schedule-health-insurances.controller';

@Module({
  controllers: [ScheduleHealthInsurancesController],
  providers: [ScheduleHealthInsurancesService],
})
export class ScheduleHealthInsurancesModule {}
