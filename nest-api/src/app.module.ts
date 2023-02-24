
import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MatchController } from './match/match.controller';
import { TeamController } from './team/team.controller';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Module({
  imports: [AuthModule],
  controllers: [AppController, MatchController, TeamController],
  providers: [AppService, {
    provide: APP_GUARD,
    useClass: JwtAuthGuard,
  },],
})
export class AppModule {}
