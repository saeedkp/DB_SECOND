import { Body, Controller, Get, Post, Header } from '@nestjs/common';
import { BooksService } from './books.service';
import CreateBookDto from './dto/create-book.dto';
import {ApiResponse, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';

@Controller('book')
export default class BooksController {
  constructor(private readonly bookServices: BooksService) {}
  
  @Header('Content-Type', 'application/json')
  @ApiResponse({ status: 200, description: "To add new book to database" })
  @Post('post')
  postUser( @Body() book: CreateBookDto) {
        return this.bookServices.insert(book);
  }

  @ApiResponse({ status: 200, description: "To get all books" })
  @Get()
  getAll() {
    return this.bookServices.getAllBooks();
  }
}
