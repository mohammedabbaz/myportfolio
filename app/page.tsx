"use client"
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="h-full "
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.8 , ease:'easeOut' }}
    >
      <div className=" h-full gap-2 flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-24 text-xl">
        {/* image container  */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero.png" className="object-contain" fill alt="image" />
        </div>

        {/* text container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-7 items-center justify-center">
          {/* title */}
          <h1 className="text-2xl md:text-4xl font-bold">
            Crafting Digital Solutions: A Software Developer's Portfolio
          </h1>
          {/*Description  */}
          <p className="md:text-xl">
            Welcome to my digital domain where innovation meets code. Explore my
            portfolio to witness a journey of turning ideas into reality. From
            elegant UI designs to robust backend architectures, Let's build the
            future together, one line of code at a time.
          </p>
          {/* buttons */}
          <div className=" w-full flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              View My Works
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black text-black">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
