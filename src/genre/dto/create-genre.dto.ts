import { Length , IsOptional, Min, IsNumber } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export default class CreateGenreDto {
  @ApiProperty({description:"Enter the name of the genre.", type: "string"})
    readonly type: string;
  }