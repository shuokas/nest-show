import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from '../../entity/article.entity';
import { CreateArticleDto, UpdateArticleDto } from './article.dto';
// node中使用 import引入方式会报错 => ERROR [ExceptionsHandler] (0 , dayjs_1.default) is not a function
const dayjs = require('dayjs');

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
      create_time: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    };
    return this.articleRepository.save(articleObj);
  }
  // 编辑文章
  updateArticle(id: number, updateArticleDto: UpdateArticleDto) {
    // 处理创建文章的逻辑，可以将数据保存到数据库中等
    let articleObj = new Article();
    articleObj = {
      ...updateArticleDto,
      update_time: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    };
    return this.articleRepository.update(+id, articleObj);
  }
  // 删除文章
  deleteArticle(id: number) {
    return this.articleRepository.delete(+id);
  }
}
