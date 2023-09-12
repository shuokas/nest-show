import {
  Controller,
  Get,
  Param,
  Post,
  Patch,
  Body,
  Delete,
} from '@nestjs/common';
import { CreateArticleDto, UpdateArticleDto } from './article.dto';
import { ArticleService } from './article.service';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticleService) {}

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
  // 编辑数据
  @Patch('update/:id')
  updateArticleById(
    @Param('id') id: number,
    @Body() updateArticleDto: UpdateArticleDto,
  ) {
    return this.articlesService.updateArticle(id, updateArticleDto);
  }
  // 删除
  @Delete('delete/:id')
  deleteArticleById(@Param('id') id: number) {
    return this.articlesService.deleteArticle(id);
  }
}
