import { Injectable } from '@nestjs/common';
import { CreateClockInDto } from './dto/create-clock-in.dto';
import { UpdateClockInDto } from './dto/update-clock-in.dto';

@Injectable()
export class ClockInService {
  create(createClockInDto: CreateClockInDto) {
    return 'This action adds a new clockIn';
  }

  findAll() {
    return `This action returns all clockIn`;
  }

  findOne(id: number) {
    return `This action returns a #${id} clockIn`;
  }

  update(id: number, updateClockInDto: UpdateClockInDto) {
    return `This action updates a #${id} clockIn`;
  }

  remove(id: number) {
    return `This action removes a #${id} clockIn`;
  }
}
