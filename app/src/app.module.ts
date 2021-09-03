import { join } from 'path';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { root } from 'app/utils';
import { ListModule } from './list/list.module';
import { IndexModule } from './index/index.module';

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
export class AppModule {}
