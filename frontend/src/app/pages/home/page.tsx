'use client'
import { ScrollArea } from '@/components/ui/scroll-area'
import { ThemeProvider } from "next-themes";

import React from 'react'
import BusinessNavbar from '@/components/nextBunny/BusinessNavbar'
import BusinessHero from '@/components/nextBunny/BusinessHero'
import FeaturesGrid from '@/components/nextBunny/Features'
import AceTypewriterDemo from '@/components/nextBunny/AceTypewriterDemo'
import HardToResist from '@/components/nextBunny/HardToResist'
import Footer from '@/components/nextBunny/footer'

function page() {


  return (
    <div className='' >
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>

      <ScrollArea className='h-screen '>
      Home
        <BusinessNavbar></BusinessNavbar>
        <BusinessHero></BusinessHero>
        <FeaturesGrid></FeaturesGrid>
        <AceTypewriterDemo></AceTypewriterDemo>
        <HardToResist></HardToResist>
        <Footer></Footer>
      </ScrollArea>

      </ThemeProvider>
     
       


    </div>
  )
}

export default page