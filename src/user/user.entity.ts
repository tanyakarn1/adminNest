import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  static Schema(Schema: any): (target: typeof import("./user.service").UserService, propertyKey: undefined, parameterIndex: 0) => void {
      throw new Error('Method not implemented.');
  }
  @Prop()
  username: string;

  @Prop({ default: false })
  isBlocked: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);