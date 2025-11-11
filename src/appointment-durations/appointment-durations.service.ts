import { Injectable } from '@nestjs/common';
import { CreateAppointmentDurationDto } from './dto/create-appointment-duration.dto';
import { UpdateAppointmentDurationDto } from './dto/update-appointment-duration.dto';

@Injectable()
export class AppointmentDurationsService {
  create(createAppointmentDurationDto: CreateAppointmentDurationDto) {
    return 'This action adds a new appointmentDuration';
  }

  findAll() {
    return `This action returns all appointmentDurations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} appointmentDuration`;
  }

  update(id: number, updateAppointmentDurationDto: UpdateAppointmentDurationDto) {
    return `This action updates a #${id} appointmentDuration`;
  }

  remove(id: number) {
    return `This action removes a #${id} appointmentDuration`;
  }
}
