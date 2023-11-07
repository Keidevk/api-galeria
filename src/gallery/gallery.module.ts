import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Photos } from './entities/gallery.entities';
import { GalleryController } from './gallery.controller';
import { GalleryService } from './gallery.services';

@Module({
  imports: [
    TypeOrmModule.forFeature([Photos], {
      type: 'mysql',
      host: process.env.HOST,
      port: parseInt(process.env.PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: 'gallery',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      migrationsRun: true,
      logging: true,
      synchronize: false,
    }),
  ],
  controllers: [GalleryController],
  providers: [GalleryService],
})
export class galleryModule {
  constructor(private dataSource: DataSource) {}
}
