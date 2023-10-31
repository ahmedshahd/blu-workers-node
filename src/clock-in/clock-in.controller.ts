import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { ClockInService } from './clock-in.service';
import { ClockInDto } from './dto/create-clock-in.dto';

@Controller('worker')
export class ClockInController {
  constructor(private readonly clockInService: ClockInService) {}

  @Post("clock-in")
  clockIn(@Body() clockInDto: ClockInDto) {
    return this.clockInService.create(clockInDto);
  }

  @Get("clock-ins")
  findAll(@Query('worker_id') workerId: number) {
    return this.clockInService.findAll();
  }
}
