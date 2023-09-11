import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from '../../entity/article.entity';
import { CreateArticleDto } from './article.dto';

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
  getArticleById(id): Promise<Article> {
    return this.articleRepository.findOneBy({ id });
  }
  // addd
  createArticle(createArticleDto: CreateArticleDto) {
    // 处理创建文章的逻辑，可以将数据保存到数据库中等
    let articleObj = new Article();
    articleObj = {
      ...createArticleDto,
      create_time: '2023-09-10 17:39:49',
      // update_time: '',
    };
    console.log('ssss', articleObj);

    return this.articleRepository.save(articleObj);
  }
}
