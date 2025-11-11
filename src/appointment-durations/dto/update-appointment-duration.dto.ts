import { PartialType } from '@nestjs/mapped-types';
import { CreateAppointmentDurationDto } from './create-appointment-duration.dto';

export class UpdateAppointmentDurationDto extends PartialType(CreateAppointmentDurationDto) {}
