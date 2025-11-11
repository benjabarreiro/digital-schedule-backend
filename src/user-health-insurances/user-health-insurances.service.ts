import { Injectable } from '@nestjs/common';
import { CreateUserHealthInsuranceDto } from './dto/create-user-health-insurance.dto';
import { UpdateUserHealthInsuranceDto } from './dto/update-user-health-insurance.dto';

@Injectable()
export class UserHealthInsurancesService {
  create(createUserHealthInsuranceDto: CreateUserHealthInsuranceDto) {
    return 'This action adds a new userHealthInsurance';
  }

  findAll() {
    return `This action returns all userHealthInsurances`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userHealthInsurance`;
  }

  update(id: number, updateUserHealthInsuranceDto: UpdateUserHealthInsuranceDto) {
    return `This action updates a #${id} userHealthInsurance`;
  }

  remove(id: number) {
    return `This action removes a #${id} userHealthInsurance`;
  }
}
