import { Test, TestingModule } from '@nestjs/testing';
import { ScheduleDaysController } from './schedule-days.controller';
import { ScheduleDaysService } from './schedule-days.service';

describe('ScheduleDaysController', () => {
  let controller: ScheduleDaysController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScheduleDaysController],
      providers: [ScheduleDaysService],
    }).compile();

    controller = module.get<ScheduleDaysController>(ScheduleDaysController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
