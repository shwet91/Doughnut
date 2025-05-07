"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";

const formSchema = z.object({
  username: z.string().min(2).max(50),
  password: z.string(),
});

import { FaSpinner } from "react-icons/fa";
import { useState } from "react";
import { signIn } from 'next-auth/react';

function SignIn() {
  const [loading, setLoading] = useState(false);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (loading) return;

    const formData = new FormData();
    formData.append("username", values.username);
    formData.append("password", values.password);

    try {
      setLoading(true);
      
       const result = await signIn("credentials" , {
        redirect:false,
        username: values.username,
        password: values.password
      })

      console.log("success : " , result)
      toast("User Logged In Successfully");
      setLoading(false);
    } catch (error) {
      const e = error as Error; // Type assertion
      setLoading(false);
      throw new Error(e.message);
    }
  }

  return (
 
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 p-7 sm:w-1/2  flex flex-wrap gap-8  border-2 w-4/5 "
        >

          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={"text-gray-500"}>Username</FormLabel>
                <FormControl>
                  <Input
                    placeholder="shadcn"
                    className="text-gray-500"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={"text-gray-500"}>Password</FormLabel>
                <FormControl>
                  <Input
                    className="text-gray-500"
                    type="password"
                    placeholder="shadcn"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className={"sm:top-5  relative "}>
            Sign In
          </Button>
          {loading ? (
            <div className="animate-spin text-4xl flex relative bottom-4 sm:bottom-2 items-center justify-center ">
              <FaSpinner />
            </div>
          ) : null}
        </form>
      </Form>

  );
}

export default SignIn;
