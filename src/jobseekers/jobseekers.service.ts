import { Injectable } from '@nestjs/common';
import EmployerEntity from 'src/db/employer.entity';
import ProjectEntity from 'src/db/project.entity';
import CreateEmployerDto from './dto/create-employer.dto';
import {getConnection} from "typeorm";
import UpdateBookDto from 'src/Books/dto/update-book.dto';
import UpdateEmployerDto from './dto/update-employer.dto';

@Injectable()
export class JobseekersService {

    async insert(employerDetails: CreateEmployerDto): Promise<EmployerEntity> {
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

    async delete(employerId: number): Promise<EmployerEntity> {
          const employer = await EmployerEntity.findOne(employerId);
          await employer.remove();
          return employer;
      }

    async update(employerDetails: UpdateEmployerDto): Promise<EmployerEntity> {
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

    async findOne(username: string): Promise<EmployerEntity | undefined> {
        return await EmployerEntity.findOne({where: {username: username}});
    }
    
}
