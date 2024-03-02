"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import image from "../../public/image.png";
import Image from "next/image";
import Link from "next/link";

function page() {
  const projects = [
    {
      id: 1,
      title: "project 1",
      color: "bg-gradient-to-r from-gray-100 to-red-300",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ipsam eveniet quibusdam est, neque ducimus enim dolor dolore exercitationem similique esse ipsum!      ",
      image: image,
      url: "/",
    },
    {
      id: 2,
      title: "project 2",
      color: "bg-gradient-to-r from-gray-200 to-yellow-300",

      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ipsam eveniet quibusdam est, neque ducimus enim dolor dolore exercitationem similique esse ipsum!      ",
      image: image,
      url: "/",
    },
    {
      id: 3,
      title: "project 3",
      color: "bg-gradient-to-r from-pulple-200 to-yellow-300",

      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ipsam eveniet quibusdam est, neque ducimus enim dolor dolore exercitationem similique esse ipsum!      ",
      image: image,
      url: "/",
    },
    {
      id: 4,
      title: "project 4",
      color: "bg-gradient-to-r from-gray-100 to-yellow-300",

      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ipsam eveniet quibusdam est, neque ducimus enim dolor dolore exercitationem similique esse ipsum!      ",
      image: image,
      url: "/",
    },
  ];

  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0% ", "-80%"]);

  return (
    <motion.div
      className="h-full  "
      initial={{ y: "-200vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="h-[600vh] relative " ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] text-black flex items-center justify-center text-2xl md:text-6xl ">
          List of My works
        </div>
        {/* list of project  */}
        <div className="sticky h-screen top-0 flex items-center gap-4 overflow-hidden ">
          <motion.div style={{ x }} className="flex">
            <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-r from-gray-500 to-yellow-300 " />
            {projects.map((item) => (
              <div
                className={`w-screen h-screen flex flex-col items-center  justify-center ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-4 text-black   ">
                  {/* title of project */}
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl text-white">
                    {item.title}
                  </h1>
                  {/* mage of project */}
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.image} alt="" fill />
                  </div>
                  <p className=" w-80  md:w-96 lg:w-[500px] xl:w-[600px] lg:text-lg">
                    {item.description}
                  </p>
                  <Link href={item.url}>
                    <button className="text-sm font-bold rounded-full bg-blue-500 hover:bg-black-200  p-2 text-white">
                      See Demo
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="h-screen w-screen gap-16 flex flex-col justify-center items-center bg-gradient-to-b from-white to-blue-200">
        <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
          Do you have project
        </h1>
       
          {/* button */}
          <Link
            href="/Contact"
            className="  flex items-center justify-center w-16 h-16 md:w-28 md:h-28  text-white rounded-full bg-black text-sm md:text-lg"
          >
            Hear Me
          </Link>
      </div>
    </motion.div>
  );
}

export default page;
