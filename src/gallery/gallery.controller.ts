import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreatePhotos } from './dto/create-photos.dto';
import { Photos } from './entities/gallery.entities';
import { GalleryService } from './gallery.services';

@Controller('/api')
export class GalleryController {
  constructor(private readonly galleryService: GalleryService) {}
  @Post()
  create(@Body() createPhotos: CreatePhotos): Promise<Photos> {
    console.log(createPhotos);
    return this.galleryService.create(createPhotos);
  }
  @Get()
  findOne(@Query('id') id: number): Promise<Photos> {
    return this.galleryService.findOne(id);
  }
  @Get('/all')
  findAll(): Promise<Photos[]> {
    return this.galleryService.findAll();
  }
}
