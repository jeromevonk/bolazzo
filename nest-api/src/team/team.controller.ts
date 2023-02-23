import { Controller, Get, Post, Put, Delete, Req } from '@nestjs/common';
import { Request } from "express";

@Controller('team')
export class TeamController {
  @Get()
  findAllTeams(): object {
    return { name: "Qatar" };
  }

  @Post()
  create(@Req() request: Request): object {
    return { req: request.body };
  }
  
  @Put()
  update(): object {
    return { msg: "updated" };
  }

  @Delete()
  delete(): object {
    return { msg: "deleted" };
  }
}