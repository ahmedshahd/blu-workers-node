import { Module } from '@nestjs/common';
import { WorkersService } from './workers.service';
import { WorkersController } from './workers.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [WorkersController],
  providers: [WorkersService, PrismaService],
})
export class WorkersModule {}
