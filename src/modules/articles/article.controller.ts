import { Controller, Get, Param } from '@nestjs/common';
import { ArticleService } from './article.service';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticleService) {}

  //   @Get(':articleId')
  //   getArticleById(@Param(':articleId') articleId: string) {
  //     return this.articlesService.getArticleById();
  //   }

  @Get('/list')
  getArticleList(): any {
    return this.articlesService.getArticleList();
  }
}
