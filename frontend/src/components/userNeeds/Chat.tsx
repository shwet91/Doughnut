"use client";

import React from "react";
import ChatCard from "../helperComponets/ChatCard";
import Dm from "./Dm";

function Chat() {
  return <div className=" hide-scrollbar overflow-y-scroll h-screen sm:w-[4%] sm:p-0 flex flex-col items-center gap-2 ">
    
    
    <Dm></Dm>
  

  </div>;
}

export default Chat;
