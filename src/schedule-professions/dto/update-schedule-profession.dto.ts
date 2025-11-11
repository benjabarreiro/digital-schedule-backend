import { PartialType } from '@nestjs/mapped-types';
import { CreateScheduleProfessionDto } from './create-schedule-profession.dto';

export class UpdateScheduleProfessionDto extends PartialType(CreateScheduleProfessionDto) {}
