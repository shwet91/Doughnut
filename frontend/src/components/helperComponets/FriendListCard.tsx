import React, { useState } from "react";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { EllipsisVertical } from "lucide-react";
import { User } from "@/types";
import { Button } from "../ui/button";
import axios from "axios";
import apiEndPoints from "@/ApiEndPoints";
import { useSession } from "next-auth/react";
import { LoaderCircle } from "lucide-react";
import { toast } from "sonner";

function FriendListCard({ user , updateFriendFunction }: { user: User , updateFriendFunction : (user : User) => void }) {
  const [removeFriendBtn, setRemoveFriendBts] = useState(false);
  const [loading, setLoading] = useState(false);

  const session = useSession();

  const removeFriendFuntion = async () => {
    try {
      if (loading === true) return;
      setLoading(true);

      const response = await axios.post(apiEndPoints.removeFriend, {
        userId: session.data?.user._id,
        friendId: user.id,
      });

      console.log(response.data);

      setLoading(false);
      updateFriendFunction(user)
      toast("Friend Removed from friendList")
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="flex  flex-col items-center">
      <div className="border-t-1 border-gray-800 w-[95%]"></div>

      <div className="1border-t-1 h-[70px] relative w-full border-gray-700  flex items-center  cgray black41 bg-zinc-900 hover:bg-zinc-950 rounded-md ">
        <div className=" w-[40px] h-[40px] relative overflow-hidden rounded-full m-3">
          <Image src={user.avatar} alt="" fill></Image>
        </div>

        <div
          className={
            user.online
              ? " borderc w-3 h-3 bg-green-700 rounded-full relative right-6 top-4"
              : " w-3 h-3 bg-red-700 rounded-full relative right-6 top-4 "
          }
        ></div>

        <div>
          <h1 className="text-white ">{user.name}</h1>
          {user.online ? (
            <p className="font text-white text-xs">Online</p>
          ) : (
            <p className="font text-white text-xs">Offline</p>
          )}
        </div>

        <div className=" absolute right-6 flex  gap-2">
          <div className="  w-[40px] h-[40px] rounded-full flex items-center justify-center black1">
            <MessageCircle></MessageCircle>
          </div>

          <div className=" bg-slate-900 ">
            <Button onClick={removeFriendFuntion} className=" relative theme-color w-[200px]">
              Remove Friend{" "}
              {loading && (
                <div className="animate-spin text-4xl flex absolute right-5 items-center justify-center ">
                  <LoaderCircle />
                </div>
                )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FriendListCard;
