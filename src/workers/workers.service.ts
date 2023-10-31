import { PrismaService } from './../prisma.service';
import {  Injectable } from '@nestjs/common';
import { CreateWorkerDto } from './dto/create-worker.dto';
import { UpdateWorkerDto } from './dto/update-worker.dto';
import handleErrorWhen from 'src/helpers/handel-error';


@Injectable()
export class WorkersService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createWorkerDto: CreateWorkerDto) {
    return this.prismaService.worker.create({ data: createWorkerDto }).catch(
      handleErrorWhen([
        {
          code: 'P2002',
          message: `User with mobile number ${createWorkerDto.mobile} already exists.`,
        },
      ]),
    );
  }

  findAll() {
    return this.prismaService.worker.findMany({});
  }

  findOne(id: number) {
    return this.prismaService.worker.findFirst({
      where: {
        id,
      },
    });
  }

  update(id: number, updateWorkerDto: UpdateWorkerDto) {
    return this.prismaService.worker.update({
      where: {
        id,
      },
      data: updateWorkerDto,
    });
  }

  remove(id: number) {
    return this.prismaService.worker.delete({
      where: {
        id,
      },
    });
  }
}
