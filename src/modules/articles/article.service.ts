import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from '../../entity/article.entity';

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
  // 获取指定条目数据
  getArticleById(): Promise<Article> {
    return this.articleRepository.findOneBy({ id: 1 });
  }
}
