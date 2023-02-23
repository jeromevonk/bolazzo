import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MatchController } from './match/match.controller';
import { TeamController } from './team/team.controller';

@Module({
  imports: [],
  controllers: [AppController, MatchController, TeamController],
  providers: [AppService],
})
export class AppModule {}
