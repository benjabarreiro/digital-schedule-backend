import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ScheduleHealthInsurancesService } from './schedule-health-insurances.service';
import { CreateScheduleHealthInsuranceDto } from './dto/create-schedule-health-insurance.dto';
import { UpdateScheduleHealthInsuranceDto } from './dto/update-schedule-health-insurance.dto';

@Controller('schedule-health-insurances')
export class ScheduleHealthInsurancesController {
  constructor(private readonly scheduleHealthInsurancesService: ScheduleHealthInsurancesService) {}

  @Post()
  create(@Body() createScheduleHealthInsuranceDto: CreateScheduleHealthInsuranceDto) {
    return this.scheduleHealthInsurancesService.create(createScheduleHealthInsuranceDto);
  }

  @Get()
  findAll() {
    return this.scheduleHealthInsurancesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.scheduleHealthInsurancesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateScheduleHealthInsuranceDto: UpdateScheduleHealthInsuranceDto) {
    return this.scheduleHealthInsurancesService.update(+id, updateScheduleHealthInsuranceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.scheduleHealthInsurancesService.remove(+id);
  }
}
