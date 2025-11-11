import { Test, TestingModule } from '@nestjs/testing';
import { AppointmentDurationsService } from './appointment-durations.service';

describe('AppointmentDurationsService', () => {
  let service: AppointmentDurationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppointmentDurationsService],
    }).compile();

    service = module.get<AppointmentDurationsService>(AppointmentDurationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
