import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell } from "lucide-react";
import FriendRequestCard from "../helperComponets/FriendRequestCard";
import axios from "axios";
import apiEndPoints from "@/ApiEndPoints";
import { useSession } from "next-auth/react";
import { User } from "@/types";
import { LoaderCircle } from "lucide-react";

function Notification() {
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [friendRequest, setFriendRequest] = useState<User[]>([]);
  const session = useSession();
  console.log(friendRequest.length);

  useEffect(() => {
    const fetch = async () => {
      if (loading === true) return;
      setLoading(true);
      console.log("Fetch started");
      const response = await axios.get(
        `${apiEndPoints.getFriendRequest}/${session.data?.user._id}`
      );

      console.log("the data :", response.data.data);
      if (response.data.data) {
        setFriendRequest(response.data.data);
      } else {
        setFriendRequest([]);
      }

      setLoading(false);
    };

    if (session.status === "authenticated") {
      fetch();
    } else console.log("not authenticated");
  }, [session.status, active]);

  const updatefriendRequest = (data: { username: string }) => {
    setFriendRequest((prev) =>
      prev.filter((e) => e.username !== data.username)
    );
  };

  return (
    <div className="relative ">
      <h1 className="cursor-pointer" onClick={() => setActive((prev) => !prev)}>
        <Bell />
      </h1>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-[-209px] mt-5 z-50 bg-white text-white p-5 w-[25vw] jet-black rounded-sm"
          >
            Notification
            {loading && (
              <div className="animate-spin relative bottom-6 left-15 text-4xl flex relative items-center justify-center ">
                <LoaderCircle />
              </div>
            )}
            {/* <div className="animate-spin relative bottom-6 left-15 text-4xl flex relative  items-center justify-center ">
                <LoaderCircle />
              </div> */}
           
            {typeof friendRequest !== "string" &&
            friendRequest.length > 0 &&
            loading === false
              ? friendRequest.map((r, i) => {
                  return (
                    <FriendRequestCard
                      updateFunction={updatefriendRequest}
                      userId={session.data?.user._id as string}
                      name={r.name}
                      username={r.username}
                      key={i}
                      avatar={r.avatar}
                    ></FriendRequestCard>
                  );
                })
              : null}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Notification;
