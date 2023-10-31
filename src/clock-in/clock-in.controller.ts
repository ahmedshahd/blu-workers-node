import { Controller, Post, Get, Query, Body } from '@nestjs/common';
import { ClockInService } from './clock-in.service';
import { CreateClockInDto } from './dto/create-clock-in.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiQuery,
} from '@nestjs/swagger';

@ApiTags('Clock In')
@Controller('worker')
export class ClockInController {
  constructor(private readonly clockInService: ClockInService) {}

  @Post('clock-in')
  @ApiOperation({
    summary: 'Clock In',
    description: 'Clock in at a specific location.',
  })
  @ApiBody({ type: CreateClockInDto, description: 'Clock-in details' })
  @ApiResponse({ status: 201, description: 'The clock-in was successful' })
  async create(@Body() clockInDto: CreateClockInDto) {
    return await this.clockInService.create(clockInDto);
  }

  @Get('clock-ins')
  @ApiOperation({
    summary: 'Get Clock-Ins',
    description: 'Get a list of clock-ins for a worker.',
  })
  @ApiQuery({ name: 'worker_id', description: 'Worker ID', required: true })
  @ApiResponse({ status: 200, description: 'List of clock-ins for the worker' })
  async findAll(@Query('worker_id') workerId: number) {
    return await this.clockInService.findAll(workerId);
  }
}
