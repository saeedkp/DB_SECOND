import { Controller, Get, Request, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import {ApiResponse, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { Public } from './public.decorator';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @ApiResponse({ status: 200, description: "Login user + access token" })
	@Public()
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @ApiResponse({ status: 200, description: "Details of a user which has logged in before." })
	@ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}