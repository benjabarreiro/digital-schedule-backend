import { Test, TestingModule } from '@nestjs/testing';
import { ScheduleProfessionsService } from './schedule-professions.service';

describe('ScheduleProfessionsService', () => {
  let service: ScheduleProfessionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScheduleProfessionsService],
    }).compile();

    service = module.get<ScheduleProfessionsService>(ScheduleProfessionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
