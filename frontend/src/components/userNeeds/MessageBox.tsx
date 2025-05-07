import React from "react";
import Image from "next/image";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import MessageCard from "../helperComponets/MessageCard";

function MessageBox() {
  return (
    <div className="relative h-full black6">
      <div className=" flex items-center pl-4 gap-5 h-12 border-gray-600">
        <div className=" relative overflow-hidden h-[35px] w-[35px] rounded-full">
          <Image
            src="https://i.pinimg.com/736x/09/8d/21/098d21b01bf67d9ce2ba5f7f33979902.jpg"
            fill
            alt=""
          ></Image>
        </div>
        <h1 className="text-white ">Friend Name</h1>
      </div>

      <div className="hide-scrollbar overflow-y-scroll h-full ">
        <MessageCard className="left-[400px]"></MessageCard>
        <MessageCard className="left-[400px]"></MessageCard>
        <MessageCard></MessageCard>
        <MessageCard></MessageCard>
        <MessageCard className="left-[400px]"></MessageCard>
        <MessageCard></MessageCard>
        <MessageCard></MessageCard>
      </div>

      <Input className="absolute left-1/6 bottom-6 w-4/6 h-[44px] bg-white "></Input>
      <Button className="absolute bottom-7 left-5/6 ml-2 theme-color">
        Send
      </Button>
    </div>
  );
}

export default MessageBox;
