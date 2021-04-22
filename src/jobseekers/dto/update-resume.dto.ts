import { Length , IsOptional, Min, IsNumber } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export default class UpdateResumeDto {

    @ApiProperty({description:'Enter the ID of the resume > ', type: "number"})
    readonly id: number;

    @ApiProperty({description:'Enter the languages of the user > ', type: "string"})
    readonly languages: string;

    @ApiProperty({description:'Enter the university of the user > ', type: "string",})
    readonly university: string;

    @ApiProperty({description:"Enter license of the user", type: "string"})
    readonly license: string;

    @ApiProperty({description:"Enter interests of the user", type: "string"})
    readonly interests: string;

    @ApiProperty({description:"Enter skills of the user", type: "string"})
    readonly skills: string;

    @ApiProperty({description:"Enter sample work of the user", type: "string"})
    readonly sample_work: string;

    @ApiProperty({description:"Enter the id of owner' >", type: "number"})
    readonly freelancer: number;
  }