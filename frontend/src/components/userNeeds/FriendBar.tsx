import React from "react";
import FriendCard from "../helperComponets/FriendCard";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { updateChannelBar } from "@/store/sectionSlice";

function FriendBar() {
  const dispatch = useDispatch();
  return (
    <div className="1border-1 border-gray-600 black3 rounded-tl-2xl hide-scrollbar overflow-y-scroll left-[500px] items-center flex flex-col h-[100vh]  sm:w-[20%]">
      <Button
        onClick={() =>
          dispatch(
            updateChannelBar({
              activeState: "friendsOption",
            })
          )
        }
        className="black6 w-[60%] h-[30px] m-2 rounded-md"
      >
        {" "}
        Friends{" "}
      </Button>
      <hr className="w-[100%] border border-gray-600 l-black" />
      <h1 className="text-md cgray">Direct Messages</h1>
      <FriendCard></FriendCard>
      <FriendCard></FriendCard>
      <FriendCard></FriendCard>
      <FriendCard></FriendCard>
      <FriendCard></FriendCard>
      <FriendCard></FriendCard>
      <FriendCard></FriendCard>
    </div>
  );
}

export default FriendBar;
