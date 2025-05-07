"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
export default function BusinessHero() {
  return <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
      </div>
      <div className="container relative pt-20 text-center">
        <motion.h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }}>
          Transform Your Business with
          <br />
          <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            Nextbunny
          </span>
        </motion.h1>
        <motion.p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.1
      }}>
          Partner with industry-leading consultants to accelerate your business
          growth. Our expert team brings innovative solutions to help you
          achieve exceptional results.
        </motion.p>
        <motion.div className="mt-8 flex flex-wrap justify-center gap-4" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.2
      }}>
          <Button size="lg">Book Consultation</Button>
          <Button size="lg" variant="outline">
            View Services
          </Button>
        </motion.div>
      </div>
    </section>;
}