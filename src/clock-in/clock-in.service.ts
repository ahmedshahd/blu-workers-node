import { Injectable } from '@nestjs/common';
import { CreateClockInDto } from './dto/create-clock-in.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ClockInService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createClockInDto: CreateClockInDto) {
    const fixedLat = 30.04943009453158;
    const fixedLong = 31.2403226932535;
    const { workerId, latitude, longitude } = createClockInDto;
    const timestamp = Math.floor(Date.now() / 1000);
    const distance = this.calculateDistance(
      latitude,
      longitude,
      fixedLat,
      fixedLong,
    );

    const maxDistance = 2000;

    if (distance > maxDistance) {
      throw new Error(
        'Clock-in rejected. Location is too far from the reference.',
      );
    }
    return this.prismaService.clockIn.create({
      data: {
        workerId,
        timestamp,
        latitude,
        longitude,
      },
    });
  }

  findAll(workerId: number) {
    return this.prismaService.clockIn.findMany({
      where: {
        workerId,
      },
    });
  }

  private calculateDistance(
    workerLat: number,
    workerLong: number,
    fixedLat: number,
    fixedLong: number,
  ): number {
    const R = 6371;

    const dLat = this.degreesToRadians(fixedLat - workerLat);
    const dLon = this.degreesToRadians(fixedLong - workerLong);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.degreesToRadians(workerLat)) *
        Math.cos(this.degreesToRadians(fixedLat)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;

    return distance * 1000;
  }

  private degreesToRadians(degrees: number): number {
    return degrees * (Math.PI / 180);
  }
}
