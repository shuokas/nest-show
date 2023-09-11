import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { CreateArticleDto } from './article.dto';
import { ArticleService } from './article.service';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticleService) {}

  //   @Get(':articleId')
  //   getArticleById(@Param(':articleId') articleId: string) {
  //     return this.articlesService.getArticleById();
  //   }
  // 查询列表
  @Get('/list')
  getArticleList(): any {
    return this.articlesService.getArticleList();
  }
  // 查询单个数据
  @Get(':articleId')
  getArticleById(@Param(':articleId') articleId: string) {
    return this.articlesService.getArticleById(articleId);
  }
  // 新增数据
  @Post('add')
  addArticle(@Body() createArticleDto: CreateArticleDto) {
    return this.articlesService.createArticle(createArticleDto);
  }
}
