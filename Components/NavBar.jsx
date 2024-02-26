import Link from "next/link";
import React from "react";

const links = [
  { url: "/", title: "Home" },
  { url: "/Contact", title: "Contact" },
  { url: "/Portfolio", title: "Portfolio" },
  { url: "/About", title: "About" },
];

function NavBar() {
  return (
    <div className="h-full flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-24">
      {/* logo */}
      <div className="">
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
      {/* responsiv menu */}
      <div className="">
        {/* menu button  */}
        <button className="w-10 h-10 flex justify-evenly flex-col z-50 relative">
          <div className="w-10 h-1 bg-black rounded"></div>
          <div className="w-10 h-1 bg-black rounded"></div>
          <div className="w-10 h-1 bg-black rounded"></div>
        </button>
        {/* menu list  */}
        <div className="absolute top-0 left-0 w-full h-full bg-black flex flex-col items-center justify-center text-white gap-8 text-4xl">
          {links.map((link) => (
            <Link key={link.title} href={link.url}>
              {" "}
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
