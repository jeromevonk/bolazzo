import { Controller, Get, Post, Put, Delete, Req } from '@nestjs/common';
import { Request } from "express";

@Controller('match')
export class MatchController {
  @Post()
  create(@Req() request: Request): object {
    return { req: request.body };
  }

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