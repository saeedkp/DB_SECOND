import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export default class ResumeEntity extends BaseEntity 
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 500})
    languages: string;

    @Column({length: 500})
    university: string;

    @Column({length: 500})
    license: string;
  
    @Column({length: 2000})
    interests: string;
  
    @Column({length: 2000})
    skills: string;

    @Column({length: 2000})
    sample_work: string;

}