import { Body, Controller, Get, ParseIntPipe, Post, Put, Header, Delete, Query } from '@nestjs/common';
import CreateEmployerDto from './dto/create-employer.dto';
import { JobseekersService } from './jobseekers.service';
import {ApiResponse, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import UpdateEmployerDto from './dto/update-employer.dto';
import { Public } from '../public.decorator';
import CreateFreelancerDto from './dto/create-freelancer.dto';
import UpdateFreelancerDto from './dto/update-freelancer.dto';
import CreateResumeDto from './dto/create-resume.dto';
import UpdateResumeDto from './dto/update-resume.dto';
import CreateProjectDto from './dto/create-project.dto';
import UpdateProjectDto from './dto/update-project.dto';

@Controller('jobseekers')
export class JobseekersController {
    constructor(private readonly jobseekersServices: JobseekersService) {}

    @Header('Content-Type', 'application/json')
    @ApiResponse({ status: 200, description: "Adds new employer to database" })
    @ApiBearerAuth()
    @Post('employer/post')
    postEmployer( @Body() employer: CreateEmployerDto) {
        return this.jobseekersServices.insertEmployer(employer);
    }

    @ApiResponse({ status: 200, description: "To get all the employers" })
    @ApiBearerAuth()
    @Get('employer/get')
    getAllEmp() {
        return this.jobseekersServices.getAllEmployers();
    }

    @ApiResponse({ status: 200, description: "To get all projects of an employer with a specific ID which comes with the request" })  
    @ApiQuery({name: 'employerId', required: true, type: Number, description :`id of employer which wants his/her project`})
    @ApiBearerAuth()
    @Post('employer/projects')
    getProjectsEmp(@Query('employerId') employerId) {
        return this.jobseekersServices.getProjectsOfEmployer(employerId);
    }

    @ApiResponse({ status: 200, description: "To delete an employer" })
    @ApiQuery({name: 'employerId', required: true, type: Number, description :`id of employer which is being deleted`})
    @ApiBearerAuth()
    @Delete('employer/delete')
    deleteEmp(@Query('employerId') employerId) {
        return this.jobseekersServices.deleteEmployer(employerId);
    }

    @ApiResponse({ status: 200, description: "To update an employer" })
    @ApiBearerAuth()
    @Put('employer/update')
    updateEmp(@Body() employer: UpdateEmployerDto) {
        return this.jobseekersServices.updateEmployer(employer);
    }




    @Header('Content-Type', 'application/json')
    @ApiResponse({ status: 200, description: "Adds new freelancer to database" })
    @ApiBearerAuth()
    @Post('freelancer/post')
    postFreelancer( @Body() freelancer: CreateFreelancerDto) {
        return this.jobseekersServices.insertFreelancer(freelancer);
    }

    @ApiResponse({ status: 200, description: "To get all the freelancers" })
    @ApiBearerAuth()
    @Get('freelancer/get')
    getAllFree() {
        return this.jobseekersServices.getAllFreelancers();
    }

    @ApiResponse({ status: 200, description: "To get all projects of a freelancer with a specific ID which comes with the request" })  
    @ApiQuery({name: 'freelancerId', required: true, type: Number, description :`id of freelancer which wants his/her projects`})
    @ApiBearerAuth()
    @Post('freelancer/projects')
    getProjectsfree( @Query('freelancerId') freelancerId ) {
        return this.jobseekersServices.getProjectsOfFreelancer(freelancerId);
    }

    @ApiResponse({ status: 200, description: "To delete a freelancer" })
    @ApiQuery({name: 'freelancerId', required: true, type: Number, description :`id of freelancer which is being deleted`})
    @ApiBearerAuth()
    @Delete('freelancer/delete')
    deleteFree(@Query('freelancerId') freelancerId) {
        return this.jobseekersServices.deleteFreelancer(freelancerId);
    }

    @ApiResponse({ status: 200, description: "To update a freelancer" })
    @ApiBearerAuth()
    @Put('freelancer/update')
    updateFree(@Body() freelancer: UpdateFreelancerDto) {
        return this.jobseekersServices.updateFreelancer(freelancer);
    }




    @Header('Content-Type', 'application/json')
    @ApiResponse({ status: 200, description: "Adds new resume to database" })
    @ApiBearerAuth()
    @Post('resume/post')
    postResume( @Body() resume: CreateResumeDto) {
        return this.jobseekersServices.insertResume(resume);
    }

    @ApiResponse({ status: 200, description: "To get all the resumes" })
    @ApiBearerAuth()
    @Get('resume/get')
    getAllRes() {
        return this.jobseekersServices.getAllResumes();
    }

    @ApiResponse({ status: 200, description: "To delete a resume" })
    @ApiQuery({name: 'resumeId', required: true, type: Number, description :`id of resume which is being deleted`})
    @ApiBearerAuth()
    @Delete('resume/delete')
    deleteRes(@Query('resumeId') resumeId) {
        return this.jobseekersServices.deleteResume(resumeId);
    }

    @ApiResponse({ status: 200, description: "To update a resume" })
    @ApiBearerAuth()
    @Put('resume/update')
    updateRes(@Body() resume: UpdateResumeDto) {
        return this.jobseekersServices.updateResume(resume);
    }



    @Header('Content-Type', 'application/json')
    @ApiResponse({ status: 200, description: "Adds new project to database" })
    @ApiBearerAuth()
    @Post('project/post')
    postProject( @Body() project: CreateProjectDto) {
        return this.jobseekersServices.insertProject(project);
    }

    @ApiResponse({ status: 200, description: "To get all the projects" })
    @ApiBearerAuth()
    @Get('project/get')
    getAllProj() {
        return this.jobseekersServices.getAllProjects();
    }

    @ApiResponse({ status: 200, description: "To delete a project" })
    @ApiQuery({name: 'ProjectID', required: true, type: Number, description :`id of project which is being deleted`})
    @ApiBearerAuth()
    @Delete('project/delete')
    deleteProj(@Query('ProjectID') ProjectID) {
        return this.jobseekersServices.deleteProject(ProjectID);
    }

    @ApiResponse({ status: 200, description: "To update a project" })
    @ApiBearerAuth()
    @Put('project/update')
    updateProj(@Body() project: UpdateProjectDto) {
        return this.jobseekersServices.updateProject(project);
    }

}
