import { Module } from '@nestjs/common';
import { AppointmentDurationsService } from './appointment-durations.service';
import { AppointmentDurationsController } from './appointment-durations.controller';

@Module({
  controllers: [AppointmentDurationsController],
  providers: [AppointmentDurationsService],
})
export class AppointmentDurationsModule {}
