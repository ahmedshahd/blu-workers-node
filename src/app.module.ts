import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WorkerModule } from './worker/worker.module';
import { ClockInModule } from './clock-in/clock-in.module';
import { WorkersModule } from './workers/workers.module';

@Module({
  imports: [WorkerModule, ClockInModule, WorkersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
