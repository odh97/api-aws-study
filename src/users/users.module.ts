import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

// @Module({
//   imports: [UsersModule],
//   controllers: [AppController, UsersController],
//   providers: [AppService],
// })

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
