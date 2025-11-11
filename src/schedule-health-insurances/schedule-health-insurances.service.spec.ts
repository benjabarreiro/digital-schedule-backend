import { Test, TestingModule } from '@nestjs/testing';
import { ScheduleHealthInsurancesService } from './schedule-health-insurances.service';

describe('ScheduleHealthInsurancesService', () => {
  let service: ScheduleHealthInsurancesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScheduleHealthInsurancesService],
    }).compile();

    service = module.get<ScheduleHealthInsurancesService>(ScheduleHealthInsurancesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
