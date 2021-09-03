import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { ListService } from './list.service';

@Controller('list')
export class ListController {
  constructor(private listService: ListService) {}

  @Get()
  root(@Res() res: Response) {
    return res.render(this.listService.getViewName(), {
      message: this.listService.getHello(),
    });
  }
}
