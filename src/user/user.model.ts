import { Column, Table,Model } from 'sequelize-typescript';
import { PrimaryGeneratedColumn,Entity } from 'typeorm';

@Table

export class User extends Model<User> {
  static save(user: User) {
    throw new Error('Method not implemented.');
  }
  @Column({primaryKey: true})
  id: string; 

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column({ defaultValue: false })
  isBlocked: boolean;

  @Column({ unique: false})
  password: string;
}



  // ... other user profile fields

