import { Test, TestingModule } from '@nestjs/testing';
import { ScheduleProfessionsController } from './schedule-professions.controller';
import { ScheduleProfessionsService } from './schedule-professions.service';

describe('ScheduleProfessionsController', () => {
  let controller: ScheduleProfessionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScheduleProfessionsController],
      providers: [ScheduleProfessionsService],
    }).compile();

    controller = module.get<ScheduleProfessionsController>(ScheduleProfessionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
