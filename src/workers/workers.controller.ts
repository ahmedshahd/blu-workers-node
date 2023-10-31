import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { WorkersService } from './workers.service';
import { CreateWorkerDto } from './dto/create-worker.dto';
import { UpdateWorkerDto } from './dto/update-worker.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';

@ApiTags('Workers')
@Controller('workers')
export class WorkersController {
  constructor(private readonly workersService: WorkersService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new worker' })
  @ApiBody({ type: CreateWorkerDto, description: 'New worker details' })
  @ApiResponse({
    status: 201,
    description: 'The worker has been successfully created',
  })
  async create(@Body() createWorkerDto: CreateWorkerDto) {
    return await this.workersService.create(createWorkerDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get a list of all workers' })
  @ApiResponse({ status: 200, description: 'List of all workers' })
  async findAll() {
    return await this.workersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a worker by ID' })
  @ApiParam({ name: 'id', description: 'Worker ID' })
  @ApiResponse({ status: 200, description: 'Worker details' })
  async findOne(@Param('id') id: string) {
    return await this.workersService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a worker by ID' })
  @ApiParam({ name: 'id', description: 'Worker ID' })
  @ApiBody({ type: UpdateWorkerDto, description: 'Updated worker details' })
  @ApiResponse({
    status: 200,
    description: 'The worker has been successfully updated',
  })
  async update(
    @Param('id') id: string,
    @Body() updateWorkerDto: UpdateWorkerDto,
  ) {
    return await this.workersService.update(+id, updateWorkerDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a worker by ID' })
  @ApiParam({ name: 'id', description: 'Worker ID' })
  @ApiResponse({
    status: 200,
    description: 'The worker has been successfully deleted',
  })
  async remove(@Param('id') id: string) {
    return await this.workersService.remove(+id);
  }
}
