import { Module } from '@nestjs/common';
import GenreServices from './genre.service';
import GenreController from './genre.controller';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [],
  controllers: [GenreController],
  providers: [GenreServices, {
    provide: APP_GUARD,
    useClass: JwtAuthGuard,
  }],
})
export default class GenreModule {}