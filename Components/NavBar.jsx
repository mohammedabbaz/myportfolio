"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "../Components/NavLink.jsx";
import { motion } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/Contact", title: "Contact" },
  { url: "/Portfolio", title: "Portfolio" },
  { url: "/About", title: "About" },
];

function NavBar() {
  // open menu list hoock
  const [open, setOpen] = useState(false);
  // variations for menu buttton

  // top variation
  const topVariation = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  // middle variation
  const middlevariation = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  // end variation
  const endVariation = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  // motion for menu link in small  screen (menu lists)
  const menuListVariation = {
    closed: {
      x: "100vh",
    },
    opened: {
      x: -0,
      transition: {
        when:"beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };
  // motion for  links in small  screen (menu lists)

  const listLinkMenuListVariantion = {
    closed: {
      x: -50,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-24 text-xl">
      {/* list of links in  web screens large  */}
      <div className=" gap-3 hidden md:flex w-1/3">
        {links.map((link) => (
          <NavLink link={link} />
        ))}
      </div>
      {/* logo */}
      <div className="md:hidden lg:flex  xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="bg-blue-500  p-2 text-sm rounded  font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">MED</span>
          <span className="w-12 h-8 bg-yellow-200 text-black rounded flex items-center justify-center">
            .TECH
          </span>
        </Link>
      </div>

      {/* SOCIAL MEDIA LINKS  */}
      <div className=" hidden md:flex gap-4 w-1/3 justify-center">
        <Link href="/">
          <Image src="/linkedin.png" height={24} width={24} alt="" />
        </Link>
        <Link href="/">
          <Image src="/github.png" height={24} width={24} alt="" />
        </Link>
        <Link href="/">
          <Image src="/instagram.png" height={24} width={24} alt="" />
        </Link>
      </div>

      {/* responsiv menu */}
      <div className="md:hidden">
        {/* menu button  */}
        <button
          className="w-10 h-10 flex justify-evenly flex-col z-50 relative"
          onClick={() => setOpen(!open)}
        >
          <motion.div
            variants={topVariation}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={middlevariation}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded "
          ></motion.div>
          <motion.div
            variants={endVariation}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {/* menu list  */}
        {open && (
          <motion.div
            variants={menuListVariation}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-full h-full bg-black flex flex-col items-center justify-center text-white gap-8 text-4xl z-40"
          >
            {links.map((link) => (
              <motion.div
                key={link.title}
                variants={listLinkMenuListVariantion}
              >
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
