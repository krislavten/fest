import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { IndexService } from './index.service';

@Controller()
export class IndexController {
  constructor(private indexService: IndexService) {}

  @Get('/index')
  root(@Res() res: Response) {
    return res.render('index.njk', {
      message: this.indexService.getHello(),
    });
  }
}
