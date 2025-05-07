"use client";

import { motion } from "framer-motion";
const KEY_FEATURES = [{
  title: "Visual Builder",
  description: "Drag and drop components, edit content visually, and see changes in real-time."
}, {
  title: "Premium Templates",
  description: "Access beautiful, responsive templates with modern animations built with Framer Motion."
}, {
  title: "Complete Projects",
  description: "Download full multi-page projects with all components and animations included."
}, {
  title: "Code Export",
  description: "Get clean, production-ready Next.js code that you can deploy anywhere."
}, {
  title: "SEO Optimized",
  description: "Coming Soon: SEO optimization, OG image generation, and analytics integration in the pipeline."
}, {
  title: "100% Free",
  description: "All features are completely free. Focus on building your product, not your UI."
}];
export default function FeaturesGrid() {
  return <motion.section className="relative py-32" initial={{
    opacity: 0
  }} whileInView={{
    opacity: 1
  }} transition={{
    duration: 1
  }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{
        y: 20,
        opacity: 0
      }} whileInView={{
        y: 0,
        opacity: 1
      }} className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Everything you need to launch{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              faster
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Stop wasting time building UI from scratch. Use our pre-built
            components and templates to launch your Next.js project in record
            time.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {KEY_FEATURES.map((feature, i) => <motion.div key={feature.title} initial={{
          y: 20,
          opacity: 0
        }} whileInView={{
          y: 0,
          opacity: 1
        }} transition={{
          delay: i * 0.1
        }} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent rounded-2xl blur-xl transition-all duration-500 group-hover:opacity-100 opacity-0" />
              <div className="relative backdrop-blur-xl bg-background/50 border border-border p-8 rounded-2xl">
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>)}
        </div>
      </div>
    </motion.section>;
}