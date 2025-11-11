import { Injectable } from '@nestjs/common';
import { CreateScheduleProfessionDto } from './dto/create-schedule-profession.dto';
import { UpdateScheduleProfessionDto } from './dto/update-schedule-profession.dto';

@Injectable()
export class ScheduleProfessionsService {
  create(createScheduleProfessionDto: CreateScheduleProfessionDto) {
    return 'This action adds a new scheduleProfession';
  }

  findAll() {
    return `This action returns all scheduleProfessions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} scheduleProfession`;
  }

  update(id: number, updateScheduleProfessionDto: UpdateScheduleProfessionDto) {
    return `This action updates a #${id} scheduleProfession`;
  }

  remove(id: number) {
    return `This action removes a #${id} scheduleProfession`;
  }
}
