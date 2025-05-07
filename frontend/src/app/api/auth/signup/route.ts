import UserModel from "@/models/User.moddel";
import UploadImage from "@/lib/cloudinary";
import { NextResponse } from "next/server";
import { UploadApiResponse } from "cloudinary";
import dbConnect from "@/lib/dbConnect";
import prisma from "@/config/db.config";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  // dbConnect();
  try {
    console.log("sign-up function started");
    const formData = await request.formData();

    const name = formData.get("name") as string;
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
    const avatar = (formData.get("avatar") as File) || null;

    const uplodedAvatar: UploadApiResponse = (await UploadImage(
      avatar,
      "Doughnut-Folder"
    )) as UploadApiResponse;

    if (!uplodedAvatar.url) {
      throw new Error("failed to upload avatar");
    }

    // const newUser = await UserModel.create({
    //   name,
    //   username,
    //   password,
    //   avatar: uplodedAvatar.url,
    // });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        name,
        username,
        password : hashedPassword,
        avatar: uplodedAvatar.url,
      },
    });

    console.log(newUser);

    // const user = await UserModel.findById(newUser?._id);

    // if (!user) {
    //   throw new Error("failed to create user document");
    // }

    const user = await prisma.user.findUnique({
      where: {
        id: newUser.id,
      },
    });

    if (!user) {
      throw new Error("failed to create user document");
    }

    return NextResponse.json(
      {
        msg: "success",
        data: user,
      },
      {
        status: 200,
      }
    );
  } catch (error: unknown) {
    const e = error as Error; // Type assertion
    throw new Error(e.message);
  }
}
