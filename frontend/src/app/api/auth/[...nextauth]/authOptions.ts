import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/User.moddel";
import prisma from "@/config/db.config";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Token } from "@/types";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      // type: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "password", type: "text" },
      },
      async authorize(credentials: any): Promise<any> {
        // await dbConnect();

        try {
          // const user = await UserModel.findOne({
          //   username: credentials.username,
          // });
          console.log("login function started");

          const user = await prisma.user.findUnique({
            where: {
              username: credentials.username,
            },
          });

          if (!user) {
            throw new Error("No user found");
          }

          // const isPasswordCorrect = await user.isPasswordCorrect(
          //   credentials.password
          // );

          const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            user.password
          );
          console.log(isPasswordCorrect);

          if (!isPasswordCorrect) {
            throw new Error("Wrong password");
          }

          return user;
        } catch (error: any) {
          throw new Error(error);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const payload = {
          username: user.username,
          id: user.id,
        };

        if (!process.env.JWT_SECRET) {
          throw new Error("JWT_SECRET is not defined in environment variables");
        }

        const JWTToken: string = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: "365d",
        });

        token._id = user.id?.toString(); // Convert ObjectId to string
        token.username = user.username;
        token.avatar = user.avatar;
        token.name = user.name;
        token.token = JWTToken;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user._id = token._id as string;
        session.user.username = token.username as string;
        session.user.name = token.name as string;
        session.user.avatar = token.avatar;
        session.token = token.token;
      }

      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/sign-in",
  },
};
