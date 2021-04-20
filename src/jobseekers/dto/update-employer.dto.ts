import { Length , IsOptional, Min, IsNumber } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export default class UpdateEmployerDto {

    @ApiProperty({description:'Enter the ID of the employer > ', type: "number"})
    readonly id: number;

    @Length(3, 10)
    @ApiProperty({description:'Enter the firstname of the employer > ', type: "string", minLength: 3, maxLength: 10})
    readonly firstname: string;

    @Length(3, 10)
    @ApiProperty({description:'Enter the lastname of the employer > ', type: "string", minLength: 3, maxLength: 10})
    readonly lastname: string;

    @ApiProperty({description:"Enter username of the employer", type: "string"})
    readonly username: string;

    @ApiProperty({description:"Enter password of the employer", type: "string"})
    readonly password: string;

    @ApiProperty({description:"Enter email of the employer", type: "string"})
    readonly email: string;

    @Length(11, 11)
    @ApiProperty({description:"Enter password of the employer", type: "string", minLength: 11, maxLength: 11})
    readonly phone_number: string;

    @ApiProperty({description:"Enter the IDs of employer's projects >", type: "array", items: {type: "number"}})
    readonly projects: number[] ;
  }