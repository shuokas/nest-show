import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  category: string;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  create_time: string;

  @Column()
  upadte_time: string;

  @Column()
  create_user: string;
}
