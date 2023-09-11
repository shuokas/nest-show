import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  category: string;

  @Column()
  title: string;

  @Column('text')
  content: string;

  @Column('datetime')
  create_time: string;

  @Column('datetime')
  update_time: string;

  @Column('int')
  create_user: number;
}
