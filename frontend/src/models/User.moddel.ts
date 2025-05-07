import mongoose from "mongoose";
import { Schema, Document } from "mongoose";
import bcrypt from "bcrypt";

interface User extends Document {
  name: string;
  username: string;
  password: string;
  avatar: string;
  isPasswordCorrect(password: string): Promise<boolean>; 
}

const userSchema: Schema<User> = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    name: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: [true, "Please provide the passwprd for Document saving"],
    },

    avatar: {
      type: String,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.isPasswordCorrect = async function (password: string) {
  return await bcrypt.compare(password, this.password);
};

const UserModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>("User", userSchema);

export default UserModel;
