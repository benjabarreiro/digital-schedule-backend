import { PartialType } from '@nestjs/mapped-types';
import { CreateUserHealthInsuranceDto } from './create-user-health-insurance.dto';

export class UpdateUserHealthInsuranceDto extends PartialType(CreateUserHealthInsuranceDto) {}
