import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.model'; // Import the UserDocument type
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  get() {
    throw new Error('Method not implemented.');
  }
  constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>) {}

  async blockUser(userId: string): Promise<User | null> {
    return await this.userModel.findOneAndUpdate(
      { _id: userId },
      { $set: { isBlocked: true } },
      { new: true } // Return the updated document
    );
  }

  async unblockUser(userId: string): Promise<User | null> {
    return await this.userModel.findOneAndUpdate(
      { _id: userId },
      { $set: { isBlocked: false } },
      { new: true }
    );
  }

  async getUser(userId: string): Promise<User | null> {
    return await this.userModel.findById(userId);
  }
}

