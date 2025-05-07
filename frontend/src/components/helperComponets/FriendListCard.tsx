import React, { useState } from "react";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { EllipsisVertical } from "lucide-react";

function FriendListCard() {
  const [online, setOnline] = useState(true);

  return (
    <div className="flex  flex-col items-center">
      <div className="border-t-1 border-gray-800 w-[95%]"></div>

      <div className="1border-t-1 h-[70px] relative w-full border-gray-700  flex items-center  cgray black4 rounded-md ">
        <div className=" w-[40px] h-[40px] relative overflow-hidden rounded-full m-3">
          <Image
            src="https://i.pinimg.com/736x/38/47/6a/38476a63fc182e5f98bc4320ad3897c0.jpg"
            alt=""
            fill
          ></Image>
        </div>

        <div
          className={
            online
              ? " borderc w-3 h-3 bg-green-700 rounded-full relative right-6 top-4"
              : " w-3 h-3 bg-red-700 rounded-full relative right-6 top-4 "
          }
        ></div>

        <div>
          <h1 className="text-white ">Friend Name</h1>
          {online ? (
            <p className="font text-white text-xs">Online</p>
          ) : (
            <p className="font text-white text-xs">Offline</p>
          )}
        </div>

        <div className=" absolute right-6 flex  gap-2">
          <div className="  w-[40px] h-[40px] rounded-full flex items-center justify-center black1">
            <MessageCircle></MessageCircle>
          </div>
          <div className="  w-[40px] h-[40px] rounded-full flex items-center justify-center black1">
            <EllipsisVertical></EllipsisVertical>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FriendListCard;
