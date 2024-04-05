import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';

@Module({
    imports: [
        SequelizeModule.forFeature([User]),
  ],
  controllers: [AppController,UserController],
  providers: [UserService, AppService],

})
export class UserModule {}
