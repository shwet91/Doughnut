import React, { useState } from "react";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "framer-motion";
import FriendList from "./FriendList";

function AllFriends() {
  const [open, setOpen] = useState(true);
  return (
    <div className="l-black h-full">
      {/* <Button onClick={() => setOpen((prev) => !prev)} className="theme-color">
        All Friends
      </Button> */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <FriendList></FriendList>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default AllFriends;
