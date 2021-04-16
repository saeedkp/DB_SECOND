import { Length , IsOptional, Min, IsNumber } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export default class UpdateBookDto {
  @ApiProperty({description:"Enter ID of the book", type: "number"}) 
  readonly id: number;

  @ApiProperty({description:"Enter name of the book", type: "string"}) 
  readonly name: string;

  @ApiProperty({description:"Enter Id of the book's owner", type: "number"}) 
  readonly userID: number;

  @ApiProperty({description:"Enter IDs of book's genres", type: "array", items: {type: "number"}}) 
  readonly genreIDs: number[];
}