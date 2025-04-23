"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Terminal, Lock } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Hero() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Cybersecurity Engineer"
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = window.innerHeight / 6;
      const scrollTop = window.scrollY;
      const newOpacity = Math.max(0, 1 - scrollTop / maxScroll);
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-black" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: -30 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center max-w-3xl -mt-5" // Added negative margin-top here
      >
        <div className="flex justify-center mb-6 space-x-2">
          <Shield className="h-8 w-8 text-emerald-500" />
          <Terminal className="h-8 w-8 text-emerald-500" />
          <Lock className="h-8 w-8 text-emerald-500" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
          <span className="text-emerald-500">Security</span> is not a feature<span className="text-4xl">.</span>
          <br />
          It&apos;s a <span className="text-emerald-500">mindset</span><span className="text-4xl">.</span>
        </h1>
        <h2 className="text-4xl md:text-6xl font-medium text-white/80 mb-8 h-8 mt-16 flex justify-center items-center transition-opacity duration-200" style={{opacity}}>
          <Lock className="h-12 w-12"/>
        </h2>
      </motion.div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <motion.div
          initial={{ opacity: 0}}
          animate={{ opacity: 1, y: [0, -80, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        >
          <Link href="#about">
            <Button variant="ghost" size="icon" className="rounded-full border border-white/10">
              <ArrowRight className="h-4 w-4 rotate-90" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}