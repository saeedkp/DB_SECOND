import { Body, Controller, Get, ParseIntPipe, Post, Put, Header, Delete, Query } from '@nestjs/common';
import CreateEmployerDto from './dto/create-employer.dto';
import { JobseekersService } from './jobseekers.service';
import {ApiResponse, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import UpdateEmployerDto from './dto/update-employer.dto';
import { Public } from '../public.decorator';
import CreateFreelancerDto from './dto/create-freelancer.dto';
import UpdateFreelancerDto from './dto/update-freelancer.dto';

@Controller('jobseekers')
export class JobseekersController {
    constructor(private readonly jobseekersServices: JobseekersService) {}

    @Header('Content-Type', 'application/json')
    @ApiResponse({ status: 200, description: "Adds new employer to database" })
    @Public()
    @Post('employer/post')
    postEmployer( @Body() employer: CreateEmployerDto) {
        return this.jobseekersServices.insertEmployer(employer);
    }

    @ApiResponse({ status: 200, description: "To get all the employers" })
    @Public()
    @Get('employer/get')
    getAllEmp() {
        return this.jobseekersServices.getAllEmployers();
    }

    @ApiResponse({ status: 200, description: "To get all projects of an employer with a specific ID which comes with the request" })  
    @Get('employer/projects')
    getProjectsEmp( @Body('employerId', ParseIntPipe) employerId: number ) {
        return this.jobseekersServices.getProjectsOfEmployer(employerId);
    }

    @ApiResponse({ status: 200, description: "To delete an employer" })
    @ApiQuery({name: 'employerId', required: true, type: Number, description :`id of employer which is being deleted`})
    @Delete('employer/delete')
    deleteEmp(@Query('employerId') employerId) {
        return this.jobseekersServices.deleteEmployer(employerId);
    }

    @ApiResponse({ status: 200, description: "To update an employer" })
    @Put('employer/update')
    updateEmp(@Body() employer: UpdateEmployerDto) {
        return this.jobseekersServices.updateEmployer(employer);
    }




    @Header('Content-Type', 'application/json')
    @ApiResponse({ status: 200, description: "Adds new freelancer to database" })
    @Public()
    @Post('freelancer/post')
    postFreelancer( @Body() freelancer: CreateFreelancerDto) {
        return this.jobseekersServices.insertFreelancer(freelancer);
    }

    @ApiResponse({ status: 200, description: "To get all the freelancers" })
    @Public()
    @Get('freelancer/get')
    getAllFree() {
        return this.jobseekersServices.getAllFreelancers();
    }

    @ApiResponse({ status: 200, description: "To get all projects of a freelancer with a specific ID which comes with the request" })  
    @Get('freelancer/projects')
    getProjectsfree( @Body('freelancerId', ParseIntPipe) freelancerId: number ) {
        return this.jobseekersServices.getProjectsOfFreelancer(freelancerId);
    }

    @ApiResponse({ status: 200, description: "To delete a freelancer" })
    @ApiQuery({name: 'freelancerId', required: true, type: Number, description :`id of freelancer which is being deleted`})
    @Delete('freelancer/delete')
    deleteFree(@Query('freelancerId') freelancerId) {
        return this.jobseekersServices.deleteFreelancer(freelancerId);
    }

    @ApiResponse({ status: 200, description: "To update a freelancer" })
    @Put('freelancer/update')
    updateFree(@Body() freelancer: UpdateFreelancerDto) {
        return this.jobseekersServices.updateFreelancer(freelancer);
    }


}
