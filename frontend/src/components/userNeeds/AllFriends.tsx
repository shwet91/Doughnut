import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "framer-motion";
import FriendListCard from "../helperComponets/FriendListCard";
import { useSession } from "next-auth/react";
import axios from "axios";
import apiEndPoints from "@/ApiEndPoints";
import { User } from "@/types";
import { LoaderCircle } from "lucide-react";

function AllFriends() {
  const session = useSession();
  const [loading, setLoading] = useState(false);
  const [friends, setFriends] = useState<User[]>([]);

  const updateFriends = (user : User) => {
      setFriends((prev) => prev.filter((e) => e.id !== user.id))
  }

  useEffect(() => {
    const fetch = async () => {
      if (loading === true) return;
      try {
        setLoading(true);
        console.log("Fetch started");
        const response = await axios.get(`${apiEndPoints.getFriends}/${session.data?.user._id}`);

        if (response.data.data) {
          setFriends(response.data.data.friends);
        } else {
          setFriends([]);
        }

        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };

   

    if (session.status === "authenticated") {
      fetch();
    } else console.log("not authenticated");
  }, [session.status]);

  return (
    <div className="l-black h-full">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <div className=" w-full l-black ">
            {/* <button onClick={() => console.log(" new :" , friends)
            }>click</button> */}

            {loading && (
              <div className="animate-spin p-5 text-4xl flex  items-center justify-center ">
                <LoaderCircle />
              </div>
            )}

            {friends.length > 0 &&
              friends.map((e, i) => (
                <FriendListCard updateFriendFunction={updateFriends} user={e} key={i}></FriendListCard>
              ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default AllFriends;
