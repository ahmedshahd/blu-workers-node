import { Module } from '@nestjs/common';
import { ClockInService } from './clock-in.service';
import { ClockInController } from './clock-in.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ClockInController],
  providers: [ClockInService,PrismaService]
})
export class ClockInModule {}
