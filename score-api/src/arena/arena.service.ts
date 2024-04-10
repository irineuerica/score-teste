import { Injectable } from '@nestjs/common';
import { AnalysisArenaDto } from './dto/analysis-arena.dto';

@Injectable()
export class ArenaService {
  analysis(arenaData: AnalysisArenaDto) {

    const totalPeopleCount = arenaData.peopleCount.reduce((acc: number, curr: number) => acc + curr, 0);
    const totalTicketAverage = arenaData.ticketAverages.reduce((acc: number, curr: number) => acc + curr, 0);

    const isQualified = totalPeopleCount > 3000 && totalTicketAverage > 50;

    return {totalPeopleCount, totalTicketAverage, isQualified}
    
  }

}
