import { Module } from '@nestjs/common';
import { JobseekersService } from './jobseekers.service';
import { JobseekersController } from './jobseekers.controller';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Module({
  providers: [JobseekersService, {
    provide: APP_GUARD,
    useClass: JwtAuthGuard,
  }],
  controllers: [JobseekersController]
})
export class JobseekersModule {}
