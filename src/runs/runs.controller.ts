import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CreateRunDto } from './dto/create-run.dto';
import { UpdateRunDto } from './dto/update-run.dto';
import { RunsService } from './runs.service';

@ApiTags('Runs')
@Controller('runs')
export class RunsController {
  constructor(private readonly runsService: RunsService) {}

  @Post()
  create(@Body() createRunDto: CreateRunDto) {
    return this.runsService.create(createRunDto);
  }

  @Get()
  findAll() {
    return this.runsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.runsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRunDto: UpdateRunDto) {
    return this.runsService.update(+id, updateRunDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.runsService.remove(+id);
  }
}
