import { Module } from '@nestjs/common';
import { UserServices } from './user.service';
import { UserController } from './user.controller';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserServices, {
    provide: APP_GUARD,
    useClass: JwtAuthGuard,
  }],
  exports: [UserServices],
})
export class UserModule {}