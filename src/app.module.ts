import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { galleryModule } from './gallery/gallery.module';
import { Photos } from './gallery/entities/gallery.entities';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: 'gallery',
      entities: [Photos],
      logging: true,
      synchronize: false,
    }),
    galleryModule,
  ],
})
export class AppModule {}
