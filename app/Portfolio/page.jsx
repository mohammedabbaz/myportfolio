"use client"
import React from 'react'
import {motion} from "framer-motion"

function page() {
  return (
    <motion.div
    className="h-full "
    initial={{ y: "-200vh" }}
    animate={{ y: 0 }}
    transition={{ duration: 0.5 }}
  >
      portfolio
    </motion.div>
  )
}

export default page
