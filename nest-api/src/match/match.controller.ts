import { Controller, Get, Post, Put, Delete, Req, UseGuards } from '@nestjs/common';
import { Request } from "express";
import { InjectKnex, Knex } from 'nestjs-knex';

@Controller('match')
export class MatchController {
  constructor(
    @InjectKnex() private readonly knex: Knex,
  ) { }
  
  @Post()
  create(@Req() request: Request): object {
    return { req: request.body };
  }

  @Get()
  async read() {
    return this.knex.select('*').from('match');
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
