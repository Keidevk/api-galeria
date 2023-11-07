import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Photos {
  @PrimaryColumn({ primary: true, generated: 'increment' })
  id: number;

  @Column()
  image: string;

  @Column()
  characters: string;
}
