"use client";
import React, { useState } from "react";

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { FaSpinner } from "react-icons/fa";
import { toast } from "sonner";

function SignOut() {
  const [loading, setLoading] = useState(false);

  const signOutHandler = async () => {
    if (loading) return;
    try {
      setLoading(true);

      const res = await signOut({
        redirect: false,
        callbackUrl: "/",
      });
      console.log(res);
      toast("Loged out successfully");
      setLoading(false);
    } catch (error) {
      const e = error as Error; // Type assertion
      setLoading(false);
      throw new Error(e.message);
    }
  };
  return (
    <Button onClick={signOutHandler}>
      <h1>Sign Out</h1>{" "}
      {loading ? (
        <div className="w-full h-full animate-spin text-4xl flex relative items-center justify-center ">
          <FaSpinner></FaSpinner>
        </div>
      ) : null}
    </Button>
  );
}

export default SignOut;
