import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserHealthInsurancesService } from './user-health-insurances.service';
import { CreateUserHealthInsuranceDto } from './dto/create-user-health-insurance.dto';
import { UpdateUserHealthInsuranceDto } from './dto/update-user-health-insurance.dto';

@Controller('user-health-insurances')
export class UserHealthInsurancesController {
  constructor(private readonly userHealthInsurancesService: UserHealthInsurancesService) {}

  @Post()
  create(@Body() createUserHealthInsuranceDto: CreateUserHealthInsuranceDto) {
    return this.userHealthInsurancesService.create(createUserHealthInsuranceDto);
  }

  @Get()
  findAll() {
    return this.userHealthInsurancesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userHealthInsurancesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserHealthInsuranceDto: UpdateUserHealthInsuranceDto) {
    return this.userHealthInsurancesService.update(+id, updateUserHealthInsuranceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userHealthInsurancesService.remove(+id);
  }
}
