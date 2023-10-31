import { Test, TestingModule } from '@nestjs/testing';
import { ClockInController } from './clock-in.controller';
import { ClockInService } from './clock-in.service';

describe('ClockInController', () => {
  let controller: ClockInController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClockInController],
      providers: [ClockInService],
    }).compile();

    controller = module.get<ClockInController>(ClockInController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
