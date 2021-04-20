import { Body, Controller, Get, ParseIntPipe, Post, Put, Header, Delete, Query } from '@nestjs/common';
import CreateEmployerDto from './dto/create-employer.dto';
import { JobseekersService } from './jobseekers.service';
import {ApiResponse, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import UpdateEmployerDto from './dto/update-employer.dto';
import { Public } from '../public.decorator';

@Controller('jobseekers')
export class JobseekersController {
    constructor(private readonly jobseekersServices: JobseekersService) {}

    @Header('Content-Type', 'application/json')
    @ApiResponse({ status: 200, description: "Adds new employer to database" })
    @Public()
    @Post('employerpost')
    postEmployer( @Body() user: CreateEmployerDto) {
        return this.jobseekersServices.insert(user);
    }

    @ApiResponse({ status: 200, description: "To get all the employers" })
    @Public()
    @Get('employers')
    getAll() {
        return this.jobseekersServices.getAllEmployers();
    }

    @ApiResponse({ status: 200, description: "To get all projects of an employer with a specific ID which comes with the request" })  
    @Get('employerprojects')
    getBooks( @Body('employerId', ParseIntPipe) employerId: number ) {
        return this.jobseekersServices.getProjectsOfEmployer(employerId);
    }

    @ApiResponse({ status: 200, description: "To delete an employer" })
    @ApiQuery({name: 'employerId', required: true, type: Number, description :`id of employer which is being deleted`})
    @Delete('employerdelete')
    deleteEmployer(@Query('employerId') employerId) {
        return this.jobseekersServices.delete(employerId);
    }

    @ApiResponse({ status: 200, description: "To update an employer" })
    @Put('employerupdate')
    updateUser(@Body() employer: UpdateEmployerDto) {
        return this.jobseekersServices.update(employer);
    }


}
