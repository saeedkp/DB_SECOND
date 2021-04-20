import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export default class ProjectEntity extends BaseEntity 
{
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ length: 500 })
    title: string;
  
    @Column({ length: 500 })
    subject: string;
  
    @Column({length: 500, unique:true })
    priority: string;
  
    @Column({length: 500})
    size: string;
  
    @Column({length: 2000})
    description: string;
  
    @Column({length: 2000})
    skills: string;

}