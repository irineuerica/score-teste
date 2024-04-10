import { Controller, Post, Body} from '@nestjs/common';
import { ArenaService } from './arena.service';
import { AnalysisArenaDto } from './dto/analysis-arena.dto';

@Controller('arena')
export class ArenaController {
  constructor(private readonly arenaService: ArenaService) {}

  @Post()
  create(@Body() arenaData: AnalysisArenaDto) {
    return this.arenaService.analysis(arenaData);
  }
}
