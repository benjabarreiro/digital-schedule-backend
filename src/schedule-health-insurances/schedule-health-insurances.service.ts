import { Injectable } from '@nestjs/common';
import { CreateScheduleHealthInsuranceDto } from './dto/create-schedule-health-insurance.dto';
import { UpdateScheduleHealthInsuranceDto } from './dto/update-schedule-health-insurance.dto';

@Injectable()
export class ScheduleHealthInsurancesService {
  create(createScheduleHealthInsuranceDto: CreateScheduleHealthInsuranceDto) {
    return 'This action adds a new scheduleHealthInsurance';
  }

  findAll() {
    return `This action returns all scheduleHealthInsurances`;
  }

  findOne(id: number) {
    return `This action returns a #${id} scheduleHealthInsurance`;
  }

  update(id: number, updateScheduleHealthInsuranceDto: UpdateScheduleHealthInsuranceDto) {
    return `This action updates a #${id} scheduleHealthInsurance`;
  }

  remove(id: number) {
    return `This action removes a #${id} scheduleHealthInsurance`;
  }
}
