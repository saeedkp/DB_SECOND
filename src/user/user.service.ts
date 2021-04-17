import { Injectable } from '@nestjs/common';
import UserEntity from '../db/user.entity';
import CreateUserDto from './dto/create-user.dto';
import UpdateUserDto from './dto/update-user.dto';
import BookEntity from '../db/book.entity';
import {getConnection} from "typeorm";

@Injectable()
export class UserServices {

  async insert(userDetails: CreateUserDto): Promise<UserEntity> {
    const userEntity: UserEntity = UserEntity.create();
    const {name } = userDetails;
    userEntity.name = name;
    await UserEntity.save(userEntity);
    return userEntity;
  }
  async getAllUsers(): Promise<UserEntity[]> {
    return await UserEntity.find();
  }
  async getBooksOfUser(userID: number): Promise<BookEntity[]> {
    console.log(typeof(userID));
    const user: UserEntity = await UserEntity.findOne({where: {id: userID}, relations: ['books']});
    return user.books;
  }
  async delete(userID: number): Promise<UserEntity> {
    const user = await UserEntity.findOne(userID);
    await user.remove();
    return user;
  }
  async update(userDetails: UpdateUserDto): Promise<UserEntity> {
    const { id, name } = userDetails;
    const user = await UserEntity.findOne(id);
    if(user != undefined) {
      user.name = name;
      await UserEntity.save(user);
    }
    return user;
  }
  async findOne(username: string): Promise<UserEntity | undefined> {
    return await UserEntity.findOne({where: {username: username}});
  }
}