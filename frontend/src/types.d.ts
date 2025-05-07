import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    token: string;
    user: {
      _id: string;
      username: string;
      name: string;
      avatar: string;
      email?: string | null; // if you're using email
    };
  }

  declare module "next-auth" {
    interface token {
        _id : string,
        username : string,
        name: string,
        avatar : string,
        token : string
    };
  }

  interface User {
    _id: string;
    username: string;
    name: string;
    avatar: string;
  }

  interface JWT {
    _id: string;
    username: string;
    name: string;
    avatar: string;
    token: string;
  }
}

declare module "next-auth/jwt" {
    interface JWT extends Token {}
  }
  
  // Define a reusable Token type
  export type Token = {
    _id: string;
    username: string;
    name: string;
    avatar: string;
    token: string; // This is your actual JWT string
  };

  export type User = {
    id: number;
    username: string;
    name: string;
    password: string;  // You may want to exclude this in frontend for security
    avatar: string;
    online: boolean;
    createdAt: string;  // You can convert this to a Date object if needed
    updatedAt: string;  // Same as above, could be a Date
  };
  
