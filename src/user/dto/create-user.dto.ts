import { Length , IsOptional, Min, IsNumber } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export default class CreateUserDto {
    @Length(3, 10)
    @ApiProperty({description:'Enter the name of the user > ', type: "string", minLength: 3, maxLength: 10})
    readonly name: string;

    @ApiProperty({description:"Enter the IDs of user's books >", type: "array", items: {type: "number"}})
    readonly books: number[] ;
  }