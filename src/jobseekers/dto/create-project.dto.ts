import { Length , IsOptional, Min, IsNumber } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export default class CreateProjectDto {

    @ApiProperty({description:'Enter the title of the project > ', type: "string"})
    readonly title: string;

    @ApiProperty({description:'Enter the subject of the project > ', type: "string",})
    readonly subject: string;

    @ApiProperty({description:"Enter priority of the project", type: "string"})
    readonly priority: string;

    @ApiProperty({description:"Enter size of the project", type: "string"})
    readonly size: string;

    @ApiProperty({description:"Enter description of the project", type: "string"})
    readonly description: string;

    @ApiProperty({description:"Enter skills which are required for the project", type: "string"})
    readonly skills: string;
  }