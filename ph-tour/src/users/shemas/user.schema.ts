import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type useDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  name: string;
  @Prop()
  email: string;
  @Prop()
  password: string;
  @Prop()
  role: string;
  @Prop()
  phone: string;
  @Prop()
  picture: string;
  @Prop()
  address: string;
  @Prop()
  isDeleted: boolean;
  @Prop()
  isActive: boolean;
  @Prop()
  isVerified: boolean;
  //complex scenarios in which types cannot be implicitly reflected (for example, arrays or nested object structures), types must be indicated explicitly, as follows:
  @Prop([String])
  auths: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
