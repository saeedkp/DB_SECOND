import { Body, Controller, Get, Post, Header, Delete, Put, Query } from '@nestjs/common';
import GenreServices from './genre.service';
import CreateGenreDto from './dto/create-genre.dto';
import UpdateGenreDto from './dto/update-genre.dto';
import {ApiResponse, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';

@Controller('genre')
export default class GenreController {
  constructor(private readonly genreServices: GenreServices) {}
  @ApiResponse({ status: 200, description: "To add new genre" })
  @Post('post')
  postGenre( @Body() genre: CreateGenreDto) {
    return this.genreServices.insert(genre);
  }
  @ApiResponse({ status: 200, description: "To get all the genres" }) 
  @Get()
  getAll() {
    return this.genreServices.getAllGenre();
  }
  @ApiResponse({ status: 200, description: "To delete a genre" })
  @ApiQuery({ name: 'genre_id', required: true, type: Number, description: `id of genre being deleted`})
  @Delete('delete')
  deleteGenre(@Query('genre_id') genreID) {
    return this.genreServices.delete(genreID);
  }

  @ApiResponse({ status: 200, description: "To update a genre" })
  @Put('update')
  updateGenre(@Body() genre: UpdateGenreDto) {
      return this.genreServices.update(genre);
    }
}