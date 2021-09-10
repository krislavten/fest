import { Inject, Injectable, NestMiddleware, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request, Response, NextFunction } from 'express';

@Injectable({ scope: Scope.REQUEST })
export class MenuMiddleware implements NestMiddleware {
  constructor(@Inject(REQUEST) private request: Request) {}

  use(req: Request, res: Response, next: NextFunction) {
    if (req.params[0]?.indexOf('.') < 0) {
      console.log('Menu Request...', req.params[0]);
      this.request['menu'] = req.params[0];
    }
    next();
  }
}
