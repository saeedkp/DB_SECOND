import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import BooksController from './books.controller';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { APP_GUARD } from '@nestjs/core';
@Module({
  imports: [],
  controllers: [BooksController],
  providers: [BooksService, {
    provide: APP_GUARD,
    useClass: JwtAuthGuard,
  },],
})
export default class BooksModule {}