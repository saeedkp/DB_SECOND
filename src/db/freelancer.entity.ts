import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne, ManyToMany, JoinColumn, OneToMany, JoinTable } from 'typeorm';
import ProjectEntity from './project.entity';
import ResumeEntity from './resume.entity';

@Entity()
export default class FreelancerEntity extends BaseEntity 
{
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ length: 500 })
    firstname: string;
  
    @Column({ length: 500 })
    lastname: string;
  
    @Column({length: 500, unique:true })
    username: string;
  
    @Column({length: 500})
    password: string;
  
    @Column({length: 500})
    email: string;
  
    @Column({length: 500})
    phone_number: string;
  
    @Column({length: 500})
    score: string;
  
    @Column({length: 500})
    account_type: string;

    @OneToOne(() => ResumeEntity, resume => resume.freelancer) // specify inverse side as a second parameter
    @JoinColumn()
    resume: ResumeEntity;

    // 1:n relation with project
    @OneToMany(type => ProjectEntity, project => project.freelancer)
    @JoinTable()
    projects: ProjectEntity[];

}