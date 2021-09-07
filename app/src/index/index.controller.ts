import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { IndexService } from './index.service';

@Controller(['', '/index'])
export class IndexController {
  constructor(private indexService: IndexService) {}

  @Get()
  root(@Res() res: Response) {
    return res.render(this.indexService.getViewName(), {
      message: this.indexService.getHello(),
    });
  }
}
