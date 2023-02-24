import { Controller, Get, Post, Put, Delete, Req, UseGuards } from '@nestjs/common';
import { Request } from "express";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('match')
export class MatchController {
  @Post()
  create(@Req() request: Request): object {
    return { req: request.body };
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  read(): object {
    return { homeTeam: "Qatar", awayTeam: "Equador" };
  }

  @Put()
  update(): object {
    return { msg: "updated"};
  }

  @Delete()
  delete(): object {
    return { msg: "deleted" };
  }
}