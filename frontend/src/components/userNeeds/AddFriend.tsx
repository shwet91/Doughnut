import React, { useEffect, useState } from "react";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import apiEndPoints from "@/ApiEndPoints";
import SearchUserCard from "../helperComponets/SearchUserCard";
import { Avatar } from "@radix-ui/react-avatar";
import { User } from "@/types";
import { FaSpinner } from "react-icons/fa";
import { toast } from "sonner";

function AddFriend() {
  const [open, setOpen] = useState(true);
  const [query, setQuery] = useState("");
  const [loader, setLoader] = useState(false);
  const [result, setResult] = useState<User[]>([]);
  const [reqBtn, setReqBtn] = useState(true);

  useEffect(() => {
    if (result.length === 1) {
      setReqBtn(false);
    } else {
      setReqBtn(true);
    }
  }, [query, result]);

  const sendFriendRequestBtn = async () => {
    if (loader === true) return;

    setLoader(true);

    if (result.length === 1) {
      const senRequest = await axios.post(apiEndPoints.createFriendRequest, {
        userId: 1,
        friendUsername: result[0].username,
      });

      setLoader(false);
      toast("Friend Request Send Succesfully");
    }
  };

  useEffect(() => {
    const delayDebounce = setTimeout(async () => {
      if (query.trim()) {
        setResult([]);
        setLoader(true);
        const searchUser = axios
          .get(`${apiEndPoints.searchUser}/${query}`)
          .then((res) => {
            setResult(res.data.data);

            setLoader(false);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }, 300);
  }, [query]);

  return (
    <div className="w-screen1 rounded-lg m-4">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="w-full  p-6 rounded-lg  l-black "
          >
            <h1 className=" text-gray-500 font text-3xl cgray">Add Friends</h1>
            <p className="font cgray">You can add friends with username.</p>

            <div className="sm:w-[75%] justify-center flex flex-col sm:flex-row gap-2">
              <Input
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter Username"
                className=" text-white"
              ></Input>
              <Button
                disabled={reqBtn}
                onClick={sendFriendRequestBtn}
                className=" font theme-color select-none"
              >
                Send Friend Request
              </Button>
            </div>

            <div className=" border w-full mt-5">
              {loader ? (
                <div className="animate-spin text-4xl flex m-5 text-white items-center justify-center ">
                  <FaSpinner />
                  {/* <h1 className="text-8xl">.</h1> */}
                </div>
              ) : null}

              <div className="w-[50px] h-[50px] border m-5"> </div>
              <div className="w-[50px] h-[50px] border m-5"> </div>
              <div className="w-[50px] h-[50px] border m-5"> </div>

              {result.map((e: User, i) => {
                return (
                  <SearchUserCard
                    key={i}
                    name={e.name}
                    avatar={e.avatar}
                  ></SearchUserCard>
                );
              })}
              <SearchUserCard></SearchUserCard>
              <div className="w-[50px] h-[50px] border m-5"> </div>
              <div className="w-[50px] h-[50px] border m-5"> </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default AddFriend;
