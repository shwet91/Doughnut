import { application } from "express";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import { asyncHandler } from "../utils/asyncHandler";
import prisma from "../utils/db.config";

const addFriend = asyncHandler(async (req, res) => {
  const { userId, friendUsername }: { userId: number; friendUsername: string } =
    req.body;

  // userId is first time request accepter's Id and friend Username is request sender's username

  if (!friendUsername || !userId) {
    throw new ApiError(400, "friendUsername or userId not found");
  }

  const friend = await prisma.user.findUnique({
    where: {
      username: friendUsername,
    },
  });

  if (!friend) {
    throw new ApiError(400, "No User found");
  }

  const updatedUser = await prisma.user.update({
    where: {
      id: Number(userId),
    },
    data: {
      friends: {
        connect: { id: Number(friend.id) },
      },
    },
  });

  const updatedFriend = await prisma.user.update({
    where: {
      username: friendUsername,
    },
    data: {
      friends: {
        connect: { id: Number(userId) },
      },
    },
  });

  const deleteFriendRequest = await prisma.friendRequest.deleteMany({
    where: {
      friend: Number(userId),
      owner: friend.id,
    },
  });

  console.log(deleteFriendRequest);

  return res
    .status(200)
    .json(new ApiResponse(200, updatedUser, "friend created"));
});

const getFriends = asyncHandler(async (req, res) => {
  const { userId } = req.params;

  console.log(userId);

  if (!userId) {
    throw new ApiError(400, "provide user Id");
  }

  const user = await prisma.user.findUnique({
    where: {
      id: Number(userId),
    },
    include: {
      friends: true,
    },
  });

  if (!user) {
    throw new ApiError(400, "user not found");
  }

  return res.status(200).json(new ApiResponse(200, user, "fetch success"));
});

const createFriendRequest = asyncHandler(async (req, res) => {
  const { userId, friendUsername } = req.body;

  if (!userId || !friendUsername) {
    throw new ApiError(400, "No userId and friendUsername");
  }

  const user = await prisma.user.findUnique({
    where: {
      id: Number(userId),
    },
    include: {
      friends: true,
    },
  });

  if (!user) {
    throw new ApiError(400, "No User found");
  }

  const friend = await prisma.user.findUnique({
    where: {
      username: friendUsername,
    },
  });

  if (!friend) {
    throw new ApiError(400, "No such friend suer found");
  }

  console.log("this is test :" , friend.id , user.id)

  if (friend.id === user.id) {
    throw new ApiError(400, "user can not send request to itself");
  }

  const alreadyFriend = user.friends.some((f) => f.id === friend.id);
  if (alreadyFriend) {
    throw new ApiError(400, "User is already friend");
  }

  const alreadyRequestExist = await prisma.friendRequest.findMany({
    where: {
      OR: [
        {
          owner: user.id,
          friend: friend.id,
        },
        // {
        //   owner: friend.id,
        //   friend: user.id,
        // },
      ],
    },
  });

  console.log(alreadyRequestExist);

  if (alreadyRequestExist.length >= 1) {
    throw new ApiError(400, "Request already send");
  }

  const friendRequest = await prisma.friendRequest.create({
    data: {
      owner: Number(userId),
      friend: friend.id,
    },
  });

  return res
    .status(200)
    .json(new ApiResponse(200, friendRequest, "Request send successfully"));
});

const getUser = asyncHandler(async (req, res) => {
  const { username } = req.params;

  if (!username) {
    throw new ApiError(400, "No username found");
  }

  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  });

  if (!user) {
    throw new ApiError(400, "user not found");
  }

  return res.status(200).json(new ApiResponse(200, user, "User fetch success"));
});

const searchUser = asyncHandler(async (req, res) => {
  const { username } = req.params;

  if (!username) {
    throw new ApiError(400, "No username found");
  }

  const user = await prisma.user.findMany({
    where: {
      username: {
        startsWith: username,
        mode: "insensitive",
      },
    },
  });

  if (!user) {
    throw new ApiError(400, "user not found");
  }

  return res.status(200).json(new ApiResponse(200, user, "User fetch success"));
});

const getFriendRequest = asyncHandler(async (req, res) => {
  const { userId } = req.params;

  console.log(" thes is the gfriend :", userId);

  if (!userId) {
    throw new ApiError(400, "please provide the user Id");
  }

  const friendRequests = await prisma.friendRequest.findMany({
    where: {
      friend: Number(userId),
    },
    include: {
      sender: true,
    },
  });

  if (friendRequests.length === 0) {
    console.log("supermns");
    return res.status(200).json(new ApiResponse(200, "No requests found"));
  }

  const senders = friendRequests.map((req) => req.sender);

  return res
    .status(200)
    .json(new ApiResponse(200, senders, "Friend Request fretch successful"));
});

const removeFriend = asyncHandler(async(req , res) => {
  const { userId , friendId } = req.body;

  console.log(req.body)

  if( !userId || !friendId) {
    throw new ApiError(400 , "please provide user or friend Id")
  }

  const user = await prisma.user.findUnique({
    where : {
      id : Number(userId)
    },
    include : {
      friends : true
    }
  })

  if(!user){
    throw new ApiError(400 , "No user found")
  }

  const friend = await prisma.user.findUnique({
    where : {
      id : Number(friendId)
    }
  })

  if(!friend){
    throw new ApiError(400 , "No Friend as user foind")
  }

  const isFriend = user.friends.some(f => f.id === friend.id )

  if( !isFriend ){
    throw new ApiError(400 , "This user is not your friend")
  }

  const updatedUser = await prisma.user.update({
    where : {
      id : user.id
    },
    data : {
      friends : {
        disconnect : { id : friend.id }
      }
    }
  })

  const updatedFriend = await prisma.user.update({
    where : {
      id : friend.id
    },
    data : {
      friends : {
        disconnect : { id : user.id }
      }
    }
  })

  return res.status(200).json(new ApiResponse(200 , updatedUser , "Friend removed from the list."))

})

export {
  addFriend,
  getFriends,
  createFriendRequest,
  getUser,
  searchUser,
  getFriendRequest,
  removeFriend
};
