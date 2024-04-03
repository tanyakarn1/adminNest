import { Controller, Get,  Put, Param, Body, HttpException, HttpStatus } from '@nestjs/common';
import { User, UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':username')
  async getUser(@Param('username') username: string): Promise<User> {
    const user = await this.userService.getUser(username);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return user;
  } 

  @Put(':username/block')
  async blockUser(@Param('username') username: string): Promise<User> {
    const user = await this.userService.blockUser(username);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return user;
  }
}
