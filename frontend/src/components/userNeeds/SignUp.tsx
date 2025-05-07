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
  name: z.string(),
  password: z.string(),
  avatar: z.any(),
});

import { FaSpinner } from "react-icons/fa";
import axios from "axios";
import { useState } from "react";

function SignUp() {
  const [loading, setLoading] = useState(false);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      name: "",
      password: "",
      avatar: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (loading) return;

    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("username", values.username);
    formData.append("password", values.password);
    formData.append("avatar", form.getValues("avatar"));

    try {
      setLoading(true);
      const response = await axios.post("/api/auth/signup", formData);
      console.log(response);
      toast("User Created Successfully");
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
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={"text-gray-500"}>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter Your Name"
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

          <FormField
            control={form.control}
            name="avatar"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={"text-gray-500"}>Avatar</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    className="text-gray-500 file:text-gray-600 hover:file:bg-gray-300 "
                    accept="image/*"
                    onChange={(event) => {
                      field.onChange(event.target.files?.[0]); // Capture the file
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className={"sm:top-5  relative "}>
            Sign Up
          </Button>
          {loading ? (
            <div className="animate-spin text-4xl flex relative bottom-4 sm:bottom-2 items-center justify-center ">
              <FaSpinner />
              {/* <h1 className="text-8xl">.</h1> */}
            </div>
          ) : null}
        </form>
      </Form>

  );
}

export default SignUp;
