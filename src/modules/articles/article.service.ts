import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from './Article.entity';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article)
    private articleRepository: Repository<Article>,
  ) {}
  // 获取列表数据
  async getArticleList(): Promise<Article[]> {
    return this.articleRepository.find();
  }

  getArticleById(): string {
    return '获取列表数据1112122';
  }
}
