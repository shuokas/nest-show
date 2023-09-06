import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './product.entity';
@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findById(id: number): Promise<User> {
    return this.userRepository.findOne({ where: { id: 2 } });
  }
  getProductList(req): string {
    console.log(req);
    return '测试自定义组件返回数据';
  }
  getTypeList(): string {
    return '类型接口';
  }
}
