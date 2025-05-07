import React, { useState } from "react";
import { Button } from "../ui/button";
import AllFriends from "./AllFriends";
import AddFriend from "./AddFriend";

function Friend() {
  const [active, setActive] = useState("");
  return (
    <div className="w-full h-full  ">
      <div className="flex justify-center gap-2  items-center m-2">
      <Button
        onClick={() => setActive("Add")}
        className=" h-7 theme-color  "
      >
        <p className="text-xs">Add Friend</p>
        
      </Button>

      <Button onClick={() => setActive("All")} className="h-7 theme-color">
      <p className="text-xs"> All Friends</p>
       
      </Button>
      </div>


      {
        active === "All" ? <AllFriends/> : <AddFriend/>
      }
    </div>
  );
}

export default Friend;
