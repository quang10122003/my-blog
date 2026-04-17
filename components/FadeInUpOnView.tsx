"use client"
import { motion } from "motion/react"
import React, { use } from "react"

type props = { 
    children: React.ReactNode
}
export default function FadeInUpOnView({ children }: props) {
  return (
    <motion.div initial={{opacity:0 ,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true, margin:"-100px"}} transition={{duration:0.7,delay:0.4}}>
        {children}
    </motion.div>
  )
}