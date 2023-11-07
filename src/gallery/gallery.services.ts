import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePhotos } from './dto/create-photos.dto';
import { Photos } from './entities/gallery.entities';

@Injectable()
export class GalleryService {
  constructor(
    @InjectRepository(Photos)
    private readonly photosRepository: Repository<Photos>,
  ) {}
  create(createPhotos: CreatePhotos): Promise<Photos> {
    const { id, image, characters } = createPhotos;
    const photo = new Photos();
    photo.id = id;
    photo.image = image;
    photo.characters = characters;

    return this.photosRepository.save(photo);
  }
  async findAll(): Promise<Photos[]> {
    return await this.photosRepository.find();
  }
  async findOne(id: number): Promise<Photos> {
    return await this.photosRepository.findOneBy({ id });
  }
}
