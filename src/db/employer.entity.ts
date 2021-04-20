import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import ProjectEntity from './project.entity';

@Entity()
export default class EmployerEntity extends BaseEntity {

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

  // 1:n relation with project
  @OneToMany(type => ProjectEntity, project => project.employer)
  @JoinTable()
  projects: ProjectEntity[];

}