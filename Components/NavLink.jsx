'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";



function NavLink({link}) {

const pathName = usePathname();
  return (
    <Link key={link.title} href={link.url} className={`rounded p-1 ${pathName==link.url&& 'bg-black text-white'}`}>
      {link.title}
    </Link>
  );
}

export default NavLink;
