import { Request, Response, NextFunction } from "express";
import { ApiError } from "../utils/ApiError";
import { asyncHandler } from "../utils/asyncHandler";
import jwt, { JwtPayload } from "jsonwebtoken";
import prisma from "../utils/db.config";
// import { getSession } from 'next-auth/react';

// Extend Express Request interface to include `user`
declare global {
  namespace Express {
    interface Request {
      user?: any; // Replace `any` with your actual User type if available
    }
  }
}

interface AuthUser {
    id: number;
    username: String;
    avatar: String;
    name:string
}

export const verifyJWT = asyncHandler(async (req: Request , res: Response , next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    console.log("this is auth test :" , authHeader)
    if(authHeader === null || authHeader === undefined) {
        return res.status(401).json({status: 401, message: "UnAuthorized !!"})
    }
    const token = authHeader.split(" ")[1];

    // * verify the jwt token
    console.log("this is auth token :" , token)
    jwt.verify(token , process.env.JWT_SECRET!, (err , user) => {
        if(err)
            return res.status(401).json({ status: 401, message: "UnAuthorized oops" })
        console.log(user);
        req.user = user as AuthUser;
        next(); })



    next();
  } catch (error: any) {
    throw new ApiError(401, error?.message || "Invalid access token");
  }
});
