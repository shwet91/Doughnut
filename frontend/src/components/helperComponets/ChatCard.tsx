import React, { useState } from "react";

function ChatCard() {

  const [isActive , setIsActive] = useState(true)

  return (
    <div className=" relative flex items-center w-full h-20">
      {
        isActive &&  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-[80%] rounded-r-sm border-2 border-amber-400"></div>
      }
       {/* <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-[80%] rounded-r-sm border-2 border-amber-400"></div> */}
      <div className="mx-auto border-4 flex-shrink-0 border-pink-400 sm:w-[50px] sm:h-[50px] rounded-lg flex items-center justify-center">
       
        ChatCard
      </div>
    </div>
  );
}

export default ChatCard;
