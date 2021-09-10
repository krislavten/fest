import { join } from 'path';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { root } from 'app/utils';
import { LoggerMiddleware } from 'app/middleware/logger.middleware';
import { ListModule } from './list/list.module';
import { IndexModule } from './index/index.module';
import { MenuMiddleware } from 'app/middleware/menu.middleware';

const ENV = process.env.NODE_ENV;

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: !ENV ? '.env' : `.env.${ENV}`,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(root, 'public'),
    }),
    ListModule,
    IndexModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware, MenuMiddleware).forRoutes('*');
  }
}
