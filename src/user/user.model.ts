import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema() // Decorator for the class definition
export class User {
  @Prop({ required: true }) // Decorator for the property
  username: string;

  @Prop({ required: true }) // Decorator for the property
  email: string;

  @Prop({ default: false }) // Decorator for the property
  isBlocked: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);