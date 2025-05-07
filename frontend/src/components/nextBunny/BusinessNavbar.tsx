"use client";
import Image from "next/image";


import Link from "next/link";
import { Bell, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTheme } from "next-themes";
export default function BusinessNavbar() {
  const {
    theme,
    setTheme
  } = useTheme();
  return <nav className="fixed top-0 w-full z-50 border-b bg-background/95 backdrop-blur-xl border-border">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-primary relative w-8 h-8 rounded-md">
              {/* Logo */}
              <Image src={"https://i.pinimg.com/736x/a7/9c/3c/a79c3c7ed953e8b51c3b006323933316.jpg"} fill alt="Logo" ></Image> 
            </div>
            <span className="text-xl font-semibold">Doughnut</span>
          </Link>
          <div className="hidden md:flex gap-8">
            <Link href="/services" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Server
            </Link>
            <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Direct Messages
            </Link>
            <Link href="/case-studies" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Case Studies
            </Link>
            <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Friends
            </Link>

            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="mr-2">
                {theme === "dark" ? <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg> : <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                  </svg>}
              </Button>


          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 bg-primary/10 px-4 py-1.5 rounded-full">
            <span className="text-primary text-sm font-semibold">Pro</span>
            <span className="text-sm text-muted-foreground">Member</span>
          </div>
          <Button size="icon" variant="ghost" className="relative">
            <Bell className="h-5 w-5 text-muted-foreground" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full" />
          </Button>
          <Button size="icon" variant="ghost">
            <Plus className="h-5 w-5 text-muted-foreground" />
          </Button>
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </nav>;
}