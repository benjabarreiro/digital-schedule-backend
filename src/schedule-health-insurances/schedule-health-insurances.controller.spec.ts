import { Test, TestingModule } from '@nestjs/testing';
import { ScheduleHealthInsurancesController } from './schedule-health-insurances.controller';
import { ScheduleHealthInsurancesService } from './schedule-health-insurances.service';

describe('ScheduleHealthInsurancesController', () => {
  let controller: ScheduleHealthInsurancesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScheduleHealthInsurancesController],
      providers: [ScheduleHealthInsurancesService],
    }).compile();

    controller = module.get<ScheduleHealthInsurancesController>(ScheduleHealthInsurancesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
