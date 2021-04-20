import { Length , IsOptional, Min, IsNumber } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export default class CreateFreelancerDto {
    @Length(3, 10)
    @ApiProperty({description:'Enter the firstname of the freelancer > ', type: "string", minLength: 3, maxLength: 10})
    readonly firstname: string;

    @Length(3, 10)
    @ApiProperty({description:'Enter the lastname of the freelancer > ', type: "string", minLength: 3, maxLength: 10})
    readonly lastname: string;

    @ApiProperty({description:"Enter username of the freelancer", type: "string"})
    readonly username: string;

    @ApiProperty({description:"Enter password of the freelancer", type: "string"})
    readonly password: string;

    @ApiProperty({description:"Enter email of the freelancer", type: "string"})
    readonly email: string;

    @Length(11, 11)
    @ApiProperty({description:"Enter password of the freelancer", type: "string", minLength: 11, maxLength: 11})
    readonly phone_number: string;

    @ApiProperty({description:"Enter score of the freelancer", type: "string"})
    readonly score: string;

    @ApiProperty({description:"Enter account type of the freelancer", type: "string"})
    readonly account_type: string;

    @ApiProperty({description:"Enter the resume id of freelancer' >", type: "number"})
    readonly resume: number;

    @ApiProperty({description:"Enter the IDs of freelancer's projects >", type: "array", items: {type: "number"}})
    readonly projects: number[] ;
  }