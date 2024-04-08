import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Model } from 'sequelize';
import { Op } from 'sequelize';
import { Sequelize } from 'sequelize';
import { User } from './user.model'; // Import the User entity


@Injectable()
export class UserService {
  userRepository: any;
  delete(userId: number) {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
  ) {}

  async getUser(username: string): Promise<User | undefined> {
    return await this.userModel.findOne({ where:{id: userId} }); // Find by ID
  }

  async blockUser(userId: string): Promise<User | undefined> {
    const user = await this.userModel.findOne({ where:{id: userId} });
    if (user) {
      user.isBlocked = true;
      await this.userModel.save(user);
      return user;
    }
    return undefined; // Or throw an HttpException for clarity
  }

  async unblockUser(userId: string): Promise<User | undefined> {
    const user = await this.userRepository.findOne({where:{ id: userId} });
    if (user) {
      user.isBlocked = false;
      await this.userRepository.save(user);
      return user;
    }
    return undefined; // Or throw an HttpException for clarity
  }
  async searchUsers(searchTerm: string): Promise<User[]> {
    return await this.userModel.findAll({
      where: {
        [Op.or]: [
          { username: { [Op.like]: `%${searchTerm}%` } },
          { email: { [Op.like]: `%${searchTerm}%` } },
          // ... search by other fields if needed
        ],
      },
    });
  }

  async getUserProfile(userId: number): Promise<User | undefined> {
    return await this.userModel.findByPk(userId);
  }

  
  

  // ... other methods as needed (implement using UserRepository)
}
