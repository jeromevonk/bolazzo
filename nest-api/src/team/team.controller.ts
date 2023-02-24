import { Controller, Get, Post, Put, Delete, Req } from '@nestjs/common';
import { Request } from "express";
import { InjectKnex, Knex } from 'nestjs-knex';

@Controller('team')
export class TeamController {
  constructor(
    @InjectKnex() private readonly knex: Knex,
  ) { }

  @Get()
  async read() {
    return this.knex.select('*').from('team');
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