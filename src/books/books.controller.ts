import { Body, Controller, Get, Post, Header, Delete, Put, Query } from '@nestjs/common';
import { BooksService } from './books.service';
import CreateBookDto from './dto/create-book.dto';
import {ApiResponse, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import UpdateBookDto from './dto/update-book.dto';

@Controller('book')
export default class BooksController {
  constructor(private readonly bookServices: BooksService) {}
  
  @Header('Content-Type', 'application/json')
  @ApiResponse({ status: 200, description: "To add new book to database" })
  @ApiBearerAuth()
  @Post('post')
  postUser( @Body() book: CreateBookDto) {
        return this.bookServices.insert(book);
  }

  @ApiResponse({ status: 200, description: "To get all books" })
  @ApiBearerAuth()
  @Get()
  getAll() {
    return this.bookServices.getAllBooks();
  }
  @ApiResponse({ status: 200, description: "To delete a book" })
  @ApiQuery({ name: 'book_id', required: true, type: Number, description: `id of book which is being deleted`})
  @ApiBearerAuth()
  @Delete('delete')
  deleteBook(@Query('book_id') bookID) {
    return this.bookServices.delete(bookID);
  }

  @ApiResponse({ status: 200, description: "To update a book" })
  @ApiBearerAuth()
  @Put('update')
  updateBook(@Body() book: UpdateBookDto) {
      return this.bookServices.update(book);
    }
}
