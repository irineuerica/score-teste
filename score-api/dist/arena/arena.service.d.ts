import { AnalysisArenaDto } from './dto/analysis-arena.dto';
export declare class ArenaService {
    analysis(arenaData: AnalysisArenaDto): {
        totalPeopleCount: number;
        totalTicketAverage: number;
        isQualified: boolean;
    };
}
