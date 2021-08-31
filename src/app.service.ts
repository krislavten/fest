import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Wu!';
  }

  getViewName(): string {
    return 'index';
  }
}
