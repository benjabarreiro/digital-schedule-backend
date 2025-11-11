import { Module } from '@nestjs/common';
import { UserHealthInsurancesService } from './user-health-insurances.service';
import { UserHealthInsurancesController } from './user-health-insurances.controller';

@Module({
  controllers: [UserHealthInsurancesController],
  providers: [UserHealthInsurancesService],
})
export class UserHealthInsurancesModule {}
