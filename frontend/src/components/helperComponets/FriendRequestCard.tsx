import React, { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { User } from "@/types";
import axios from "axios";
import apiEndPoints from "@/ApiEndPoints";
import { LoaderCircle } from "lucide-react";
import { toast } from "sonner";

function FriendRequestCard({
  name = "default",
  avatar = "https://images.unsplash.com/photo-1726661025476-be2e9f427565?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
  username = "username",
  userId = "",
  updateFunction,
}: {
  name: string;
  avatar: string;
  username: string;
  userId: string;
  updateFunction: (data: { username: string }) => void;
}) {
  const [loading, setLoading] = useState(false);
  const acceptRequest = async () => {
    if (loading === true) return;

    setLoading(true);
    console.log("add friend function starts");

    try {
      const apiProcess = await axios.post(apiEndPoints.addFriend, {
        userId: userId,
        friendUsername: username,
      });

      console.log(apiProcess);
      updateFunction({ username: username });
      setLoading(false);
      toast("Request Accepted")
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div
      className={`1border-2 relative  h-[50px] rounded-md flex items-center bg-zinc-900 hover:bg-zinc-800 w-full m-0.5`}
    >
      <div
        className={`w-[30px] h-[30px] relative overflow-hidden rounded-full m-3`}
      >
        <Image src={avatar} alt="Image" fill></Image>
      </div>

      <h1 className="text-white ">{name || "Friend Name"}</h1>

      <Button className="theme-color absolute right-2 " onClick={acceptRequest}>
        Accept
        {loading && (
          <div className="animate-spin text-4xl flex items-center justify-center ">
            <LoaderCircle />
          </div>
        )}
      </Button>
    </div>
  );
}

export default FriendRequestCard;
