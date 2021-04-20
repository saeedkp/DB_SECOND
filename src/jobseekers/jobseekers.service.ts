import { Injectable } from '@nestjs/common';
import EmployerEntity from 'src/db/employer.entity';
import ProjectEntity from 'src/db/project.entity';
import CreateEmployerDto from './dto/create-employer.dto';
import {getConnection} from "typeorm";
import UpdateBookDto from 'src/Books/dto/update-book.dto';
import UpdateEmployerDto from './dto/update-employer.dto';
import CreateFreelancerDto from './dto/create-freelancer.dto';
import FreelancerEntity from 'src/db/freelancer.entity';
import UpdateFreelancerDto from './dto/update-freelancer.dto';
import CreateResumeDto from './dto/create-resume.dto';
import ResumeEntity from 'src/db/resume.entity';
import UpdateResumeDto from './dto/update-resume.dto';

@Injectable()
export class JobseekersService {

    async insertEmployer(employerDetails: CreateEmployerDto): Promise<EmployerEntity> {
        const employerEntity: EmployerEntity = EmployerEntity.create();
        const { firstname, lastname, username, password, email, phone_number} = employerDetails;
        employerEntity.firstname = firstname;
        employerEntity.lastname = lastname;
        employerEntity.username = username;
        employerEntity.password = password;
        employerEntity.email = email;
        employerEntity.phone_number = phone_number;
        await EmployerEntity.save(employerEntity);
        return employerEntity;
    }

    async getAllEmployers(): Promise<EmployerEntity[]> {
        return await EmployerEntity.find();
      }

    async getProjectsOfEmployer(employerID: number): Promise<ProjectEntity[]> {
        console.log(typeof(employerID));
        const employer: EmployerEntity = await EmployerEntity.findOne({where: {id: employerID}, relations: ['projects']});
        return employer.projects;
      }

    async deleteEmployer(employerId: number): Promise<EmployerEntity> {
          const employer = await EmployerEntity.findOne(employerId);
          await employer.remove();
          return employer;
      }

    async updateEmployer(employerDetails: UpdateEmployerDto): Promise<EmployerEntity> {
        const { id, firstname, lastname, username, password, email, phone_number} = employerDetails;
        const employer = await EmployerEntity.findOne(id);
        if(employer != undefined) {
            employer.firstname = firstname;
            employer.lastname = lastname;
            employer.username = username;
            employer.password = password;
            employer.email = email;
            employer.phone_number = phone_number;
            await EmployerEntity.save(employer);
        }
        return employer;
    }


    async insertFreelancer(freelancerDetails: CreateFreelancerDto): Promise<FreelancerEntity> {
        const freelancerEntity: FreelancerEntity = FreelancerEntity.create();
        const { firstname, lastname, username, password, email, phone_number, score, account_type} = freelancerDetails;
        freelancerEntity.firstname = firstname;
        freelancerEntity.lastname = lastname;
        freelancerEntity.username = username;
        freelancerEntity.password = password;
        freelancerEntity.email = email;
        freelancerEntity.phone_number = phone_number;
        freelancerEntity.score = score;
        freelancerEntity.account_type = account_type;
        await FreelancerEntity.save(freelancerEntity);
        return freelancerEntity;
    }

    async getAllFreelancers(): Promise<FreelancerEntity[]> {
        return await FreelancerEntity.find();
      }

    async getProjectsOfFreelancer(freelancerID: number): Promise<ProjectEntity[]> {
        console.log(typeof(freelancerID));
        const freelancer: FreelancerEntity = await FreelancerEntity.findOne({where: {id: freelancerID}, relations: ['projects']});
        return freelancer.projects;
      }

    async deleteFreelancer(freelancerID: number): Promise<FreelancerEntity> {
          const freelancer = await FreelancerEntity.findOne(freelancerID);
          await freelancer.remove();
          return freelancer;
      }

    async updateFreelancer(freelancerDetails: UpdateFreelancerDto): Promise<FreelancerEntity> {
        const { id, firstname, lastname, username, password, email, phone_number, score, account_type} = freelancerDetails;
        const freelancer = await FreelancerEntity.findOne(id);
        if(freelancer != undefined) {
            freelancer.firstname = firstname;
            freelancer.lastname = lastname;
            freelancer.username = username;
            freelancer.password = password;
            freelancer.email = email;
            freelancer.phone_number = phone_number;
            freelancer.score = score;
            freelancer.account_type = account_type;
            await FreelancerEntity.save(freelancer);
        }
        return freelancer;
    }


    async insertResume(resumeDetails: CreateResumeDto): Promise<ResumeEntity> {
        const resumeEntity: ResumeEntity = ResumeEntity.create();
        const { languages, university, license, interests, skills, sample_work } = resumeDetails;
        resumeEntity.languages = languages;
        resumeEntity.university = university;
        resumeEntity.license = license;
        resumeEntity.interests = interests;
        resumeEntity.skills = skills;
        resumeEntity.sample_work = sample_work;
        await ResumeEntity.save(resumeEntity);
        return resumeEntity;
    }

    async getAllResumes(): Promise<ResumeEntity[]> {
        return await ResumeEntity.find();
      }

    async deleteResume(resumeID: number): Promise<ResumeEntity> {
          const resume = await ResumeEntity.findOne(resumeID);
          await resume.remove();
          return resume;
      }

    async updateResume(resumeDetails: UpdateResumeDto): Promise<ResumeEntity> {
        const { id, languages, university, license, interests, skills, sample_work } = resumeDetails;
        const resume = await ResumeEntity.findOne(id);
        if(resume != undefined) {
            resume.languages = languages;
            resume.university = university;
            resume.license = license;
            resume.interests = interests;
            resume.skills = skills;
            resume.sample_work = sample_work;
            await ResumeEntity.save(resume);
        }
        return resume;
    }


    
}
