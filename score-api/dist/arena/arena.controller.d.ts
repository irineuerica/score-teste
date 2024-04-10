import { ArenaService } from './arena.service';
import { AnalysisArenaDto } from './dto/analysis-arena.dto';
export declare class ArenaController {
    private readonly arenaService;
    constructor(arenaService: ArenaService);
    create(arenaData: AnalysisArenaDto): {
        totalPeopleCount: number;
        totalTicketAverage: number;
        isQualified: boolean;
    };
}
