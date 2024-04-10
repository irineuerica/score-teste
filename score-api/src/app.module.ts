import { Module } from '@nestjs/common';
import { ArenaModule } from './arena/arena.module';

@Module({
  imports: [ArenaModule],
})
export class AppModule {}
