import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, ManyToMany, JoinTable } from 'typeorm';

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

}