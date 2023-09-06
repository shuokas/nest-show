import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
import { ProductModule } from './modules/ProductList/product.module';
// import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql', // 数据库类型
        host: configService.get('DATABASE_HOST'), // 数据库主机
        port: configService.get('DATABASE_PORT'), // 数据库端口
        username: configService.get('DATABASE_USERNAME'), // 数据库用户名
        password: configService.get('DATABASE_PASSWORD'), // 数据库密码
        database: configService.get('DATABASE_NAME'), // 数据库名称
        entities: [__dirname + '/**/*.entity.{js,ts}'], // 实体类所在的路径
        synchronize: true, // 自动同步数据库结构
      }),
    }),
    ProductModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}