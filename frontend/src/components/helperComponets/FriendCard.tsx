import React from "react";
import Image from "next/image";
import { hover } from "framer-motion";

function FriendCard() {
  return (
    <div
      className={`1border-2  h-[45px] rounded-md flex items-center w-full black4 m-0.5`}
    >
      <div
        className={`w-[30px] h-[30px] relative overflow-hidden rounded-full m-3`}
      >
        <Image
          src="https://i.pinimg.com/736x/38/47/6a/38476a63fc182e5f98bc4320ad3897c0.jpg"
          alt=""
          fill
        ></Image>
      </div>

      <h1 className="text-white ">Friend Name</h1>
    </div>
  );
}

export default FriendCard;
