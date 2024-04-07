import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user/user.model';
import dbconfig from './dbconfig';


import { ConfigModule} from '@nestjs/config';








@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({
      load:[appConfig],
    }),
    SequelizeModule.forRootAsync({
      useFactory:()=>({
    dialect: 'mysql',
    host: process.env.DATABASE_HOST,
    port: +process.env.DATABASE_PORT,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD ,
    database: process.env.DATABASE_NAME,
    models: [User],
    synchronize: true,
   }),
  }),
  ],
  controllers:[AppController],
  providers: [AppService],
  
})
export class AppModule {}
 
function appConfig() {
  return dbconfig;
}

