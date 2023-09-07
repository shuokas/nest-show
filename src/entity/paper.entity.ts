import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Paper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  category: string;

  @Column()
  content: string;

  // 其他字段...

  // 可以定义各种与用户相关的方法和关联关系
}
