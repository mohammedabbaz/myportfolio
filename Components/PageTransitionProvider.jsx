"use client";
import React from "react";
import NavBar from "../Components/NavBar.jsx";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation.js";

function PageTransitionProvider({ children }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div
        key={pathname}
        className="w-screen h-screen bg-gradient-to-b from-white to-yellow-100 text-black "
      >
        {/* page transition header */}
        <motion.div
          className="bg-black fixed w-screen h-screen rounded-b-[100px] z-40 text-white flex items-center justify-center"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />

        <motion.div
          className=" fixed m-auto left-0 right-0 bottom-0 top-0 text-white font-bold text-4xl z-50 w-fit h-fit"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {pathname.substring(1)}
        </motion.div>

        <motion.div
          className="bg-black fixed w-screen h-screen rounded-t-[100px] bottom-0  left-0 z-30 text-white"
          initial={{ height: "140vh" }}
          animate={{
            height: "0vh",
            transition: { delay: 0.5 },
          }}
        />

        <div className="h-24">
          <NavBar />
        </div>
        <div className="h-[calc(100vh-6rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
}

export default PageTransitionProvider;
