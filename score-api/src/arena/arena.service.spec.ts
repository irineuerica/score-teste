import { Test, TestingModule } from '@nestjs/testing';
import { ArenaService } from './arena.service';

describe('ArenaService', () => {
  let service: ArenaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArenaService],
    }).compile();

    service = module.get<ArenaService>(ArenaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return isQualified true for an arena with more than 3000 people and ticket average greater than R$50', () => {
    const arenaData = {
      name: 'Arena',
      whatsapp: '119999999',
      zipCode: '00000-000',
      peopleCount: [3500, 4000, 3800],
      ticketAverages: [60, 55, 58]
    };

    expect(service.analysis(arenaData)).toEqual({totalTicketAverage: 173, isQualified: true, totalPeopleCount: 11300});
  });

  it('should return isQualified false for an arena with less than 3000 people', () => {
    const arenaData = {
      name: 'Arena',
      whatsapp: '119999999',
      zipCode: '00000-000',
      peopleCount: [10, 0, 10],
      ticketAverages: [60, 55, 58]
    };
    expect(service.analysis(arenaData)).toEqual({totalTicketAverage: 173, isQualified: false, totalPeopleCount: 20});
  });

  it('should return false for an arena with ticket average less than R$50', () => {
    const arenaData = {
      name: 'Arena',
      whatsapp: '119999999',
      zipCode: '00000-000',
      peopleCount: [3000, 2000, 100],
      ticketAverages: [10, 0, 0]
    };
    expect(service.analysis(arenaData)).toEqual({totalTicketAverage: 10, isQualified: false, totalPeopleCount: 5100});
  });

  it('should return false for an arena with less than 3000 people and ticket average less than R$50', () => {
    const arenaData = {
      name: 'Arena',
      whatsapp: '119999999',
      zipCode: '00000-000',
      peopleCount: [10, 0, 10],
      ticketAverages: [0, 0, 5]
    };
    expect(service.analysis(arenaData)).toEqual({totalTicketAverage: 5, isQualified: false, totalPeopleCount: 20});
  });
  
});


