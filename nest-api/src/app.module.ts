
import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { MatchController } from './match/match.controller';
import { TeamController } from './team/team.controller';
import { KnexModule } from 'nestjs-knex';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Module({
  imports: [AuthModule, KnexModule.forRoot({
    config: {
      client: "pg",
      // connection: process.env.PG_CONNECTION_STRING,
      connection: 'postgres://postgres:my_postgresql_password@localhost:5432/bolazzo',
    },
  }),],
  controllers: [MatchController, TeamController],
  providers: [ {
    provide: APP_GUARD,
    useClass: JwtAuthGuard,
  },],
})
export class AppModule {}
