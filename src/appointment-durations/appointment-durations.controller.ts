import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AppointmentDurationsService } from './appointment-durations.service';
import { CreateAppointmentDurationDto } from './dto/create-appointment-duration.dto';
import { UpdateAppointmentDurationDto } from './dto/update-appointment-duration.dto';

@Controller('appointment-durations')
export class AppointmentDurationsController {
  constructor(private readonly appointmentDurationsService: AppointmentDurationsService) {}

  @Post()
  create(@Body() createAppointmentDurationDto: CreateAppointmentDurationDto) {
    return this.appointmentDurationsService.create(createAppointmentDurationDto);
  }

  @Get()
  findAll() {
    return this.appointmentDurationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appointmentDurationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAppointmentDurationDto: UpdateAppointmentDurationDto) {
    return this.appointmentDurationsService.update(+id, updateAppointmentDurationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appointmentDurationsService.remove(+id);
  }
}
