import { Controller, ParseIntPipe, UsePipes, ValidationPipe } from '@nestjs/common';
import { Get ,Put,Param,Delete,HttpException,HttpStatus} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.model';

@UsePipes( new ValidationPipe())
@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/:username')
  async getUser(@Param('username') username: string): Promise<User> {
    const user = await this.userService.getUser(username);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return user;
  } 

  @Put('/:username/block')
  async blockUser(@Param('username') username: string): Promise<User> {
    const user = await this.userService.blockUser(username);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return user;
  }
  /*@Delete('/:username')
  async deleteUser(@Param('username')username: string){
    const user = await this.userService.blockUser(username);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return user;
  }*/
  @Delete('/:userId')
  deleteUser(@Param('userId',ParseIntPipe) userId:number){
      return this.userService.delete(userId);
  }
  
}
