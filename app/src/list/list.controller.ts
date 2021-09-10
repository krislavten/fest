import { Controller, Get, Req, Res } from '@nestjs/common';
import { Response } from 'express';
import { ListService } from './list.service';

@Controller('list')
export class ListController {
  constructor(private listService: ListService) {}

  @Get()
  root(@Res() res: Response, @Req() req: Response & { menu: string }) {
    console.log(req.menu);
    return res.render(this.listService.getViewName(), {
      message: this.listService.getHello(),
      menu: req.menu,
    });
  }
}
