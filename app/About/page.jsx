"use client"
import React from 'react'
import {motion} from 'framer-motion'
function page() {
  return (
    <motion.div
    className="h-full w-full flex justify-center items-center "
    initial={{ y: "-200vh" }}
    animate={{ y: 0 }}
    transition={{ duration: 0.5 }}
  >
      about
    </motion.div>
  )
}

export default page
