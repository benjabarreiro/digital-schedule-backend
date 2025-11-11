import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ScheduleProfessionsService } from './schedule-professions.service';
import { CreateScheduleProfessionDto } from './dto/create-schedule-profession.dto';
import { UpdateScheduleProfessionDto } from './dto/update-schedule-profession.dto';

@Controller('schedule-professions')
export class ScheduleProfessionsController {
  constructor(private readonly scheduleProfessionsService: ScheduleProfessionsService) {}

  @Post()
  create(@Body() createScheduleProfessionDto: CreateScheduleProfessionDto) {
    return this.scheduleProfessionsService.create(createScheduleProfessionDto);
  }

  @Get()
  findAll() {
    return this.scheduleProfessionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.scheduleProfessionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateScheduleProfessionDto: UpdateScheduleProfessionDto) {
    return this.scheduleProfessionsService.update(+id, updateScheduleProfessionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.scheduleProfessionsService.remove(+id);
  }
}
