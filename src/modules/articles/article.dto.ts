export class CreateArticleDto {
  title: string;
  content: string;
  category: string;
  create_time: string;
  update_time: string;
  create_user: number;
}
export class UpdateArticleDto {
  id: number;
  title: string;
  content: string;
  category: string;
  create_time: string;
  update_time: string;
  create_user: number;
}
