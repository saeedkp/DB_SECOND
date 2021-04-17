import { Body, Controller, Get, ParseIntPipe, Post, Put, Header, Delete, Query } from '@nestjs/common';
import { UserServices } from './user.service';
import CreateUserDto from './dto/create-user.dto';
import UpdateUserDto from './dto/update-user.dto';
import {ApiResponse, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';

@Controller('users')
export class UserController {
  constructor(private readonly usersServices: UserServices) {}

//'postUser()' will handle the creating of new User
  @Header('Content-Type', 'application/json')
  @ApiResponse({ status: 200, description: "Adds new user to database" })
  @Post('post')
  postUser( @Body() user: CreateUserDto) {
    return this.usersServices.insert(user);
  }
// 'getAll()' returns the list of all the existing users in the database
  @ApiResponse({ status: 200, description: "To get all the users" })
  @Get()
  getAll() {
    return this.usersServices.getAllUsers();
  }

//'getBooks()' return all the books which are associated with the user 
// provided through 'userID' by the request
  @ApiResponse({ status: 200, description: "To get all books of a user with a specific ID which comes with the request" })  
  @Get('books')
  getBooks( @Body('userID', ParseIntPipe) userID: number ) {
    return this.usersServices.getBooksOfUser(userID);
  }
    @ApiResponse({ status: 200, description: "To delete a user" })
    @ApiQuery({name: 'userID', required: true, type: Number, description :`id of user which is being deleted`})
    @Delete('delete')
    deleteUser(@Query('userID') userID) {
        return this.usersServices.delete(userID);
    }

    @ApiResponse({ status: 200, description: "To update a user" })
    @Put('update')
    updateUser(@Body() user: UpdateUserDto) {
        return this.usersServices.update(user);
    }
}
