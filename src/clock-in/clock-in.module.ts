import { Module } from '@nestjs/common';
import { ClockInService } from './clock-in.service';
import { ClockInController } from './clock-in.controller';

@Module({
  controllers: [ClockInController],
  providers: [ClockInService]
})
export class ClockInModule {}
