import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { ProductService } from './product.service';

@Controller('info')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('/product')
  getProductList(@Req() request: Request): string {
    return this.productService.getProductList(request);
  }

  @Get('/type')
  getTypeList(): string {
    return this.productService.getTypeList();
  }

  @Get('/userlist')
  getUserList(): any {
    return this.productService.findAll();
  }
  @Get('/userlistById')
  getUserListById(): any {
    return this.productService.findById(1);
  }
}
