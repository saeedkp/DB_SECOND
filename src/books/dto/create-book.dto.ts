import { Length , IsOptional, Min, IsNumber } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export default class CreateBookDto {
    @ApiProperty({description:"Enter the name of the book", type: "string"})
    readonly name: string;
    @ApiProperty({description:"Enter the book's owner ID", type: "number"})
    readonly userID: number;
    @ApiProperty({description:"Enter IDs of book's genres", type: "array", items: {type: "number"}})
    readonly genreIDs: number[];
  }