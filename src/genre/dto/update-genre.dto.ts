import { Length , IsOptional, Min, IsNumber } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export default class UpdateGenreDto {

    @ApiProperty({description:"Enter the id of the genre for updating.", type: "number"})
    readonly id: number;

    @ApiProperty({description:"Enter the name of the genre for updating.", type: "string"})
    readonly type: string;
  }