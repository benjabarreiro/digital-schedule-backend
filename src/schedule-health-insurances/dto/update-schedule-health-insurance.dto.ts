import { PartialType } from '@nestjs/mapped-types';
import { CreateScheduleHealthInsuranceDto } from './create-schedule-health-insurance.dto';

export class UpdateScheduleHealthInsuranceDto extends PartialType(CreateScheduleHealthInsuranceDto) {}
