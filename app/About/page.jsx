"use client";
import React from "react";
import { motion } from "framer-motion";
function page() {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* container */}
      <div className="h-full overflow-scroll lg:flex">
        {/* text container biographique , skills , experiences */}
        <div className=" flex flex-col p-4 sm:p-8 md:p-12 lg:p-20 xl:p-24 text-xl gap-24 md:gap-32 lg:gap-48 xl:gap-64 w-2/3 xl:w-1/2 ">
          {/* biographie */}
          <div className=" flex flex-col gap-12 justify-center">
            {/* biography title */}
            <h1 className="text-2xl font-bold"> Biography</h1>
            {/* biography description */}
            <p className=" text-2xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
              saepe pariatur in cupiditate odit nostrum, qui earum voluptatibus
              sequi at corporis ex! Est esse soluta tempore veniam dolor atque
              expedita.
            </p>
         
            {/* scrol svg  */}
            <svg
              width="100px"
              height="100px"
              viewBox="0 0 72 72"
              id="emoji"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="color">
                <path
                  fill="#D0CFCE"
                  stroke="none"
                  d="M37.2971,16.7728h-2.472c-5.8763,0-10.6842,4.8079-10.6842,10.6842v16.9332 c0,5.8763,4.8079,10.6842,10.6842,10.6842h2.472c5.8763,0,10.6842-4.8079,10.6842-10.6842V27.457 C47.9813,21.5807,43.1734,16.7728,37.2971,16.7728z"
                />
                <path
                  fill="#3F3F3F"
                  stroke="none"
                  d="M36.0611,22.1118L36.0611,22.1118c-1.1405,0-2.0737,0.9332-2.0737,2.0737v5.8343 c0,1.1405,0.9332,2.0737,2.0737,2.0737h0c1.1405,0,2.0737-0.9332,2.0737-2.0737v-5.8343 C38.1348,23.045,37.2016,22.1118,36.0611,22.1118z"
                />
                <path
                  fill="#9B9B9A"
                  stroke="none"
                  d="M35.1358,18.1769c3.0267,1.2986,5.904,3.1629,6.2392,7.8732c0.3881,5.455-1.6305,15.6686-2.2795,20.8566 c-0.4538,3.6277-2.248,5.3071-4.6299,7.2111c-1.2013,0.9603,5.2663,0.8427,7.9297-0.7139 c2.2852-1.3355,4.4994-3.6288,4.5264-2.9039l0.3229-25.8045c0,0-0.9367-6.9377-8.5654-6.9401 C38.6792,17.7555,31.0272,17.3615,35.1358,18.1769z"
                />
              </g>
              <g id="hair" />
              <g id="skin" />
              <g id="skin-shadow" />
              <g id="line">
                <path
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                  d="M38.8294,54.5013h-5.5367c-4.9688,0-9.0342-4.0654-9.0342-9.0342V26.38c0-4.9688,4.0654-9.0342,9.0342-9.0342h5.5367 c4.9688,0,9.0342,4.0654,9.0342,9.0342v19.0871C47.8636,50.4359,43.7982,54.5013,38.8294,54.5013z"
                />
                <path
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                  d="M36.1449,32.1553h-0.1677c-1.1161,0-2.0294-0.9132-2.0294-2.0294v-6.0465c0-1.1161,0.9132-2.0294,2.0294-2.0294h0.1677 c1.1161,0,2.0294,0.9132,2.0294,2.0294v6.0465C38.1743,31.2421,37.2611,32.1553,36.1449,32.1553z"
                />
                <line
                  x1="41.3312"
                  x2="36.1155"
                  y1="60.0161"
                  y2="65.2318"
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <line
                  x1="30.8574"
                  x2="36.073"
                  y1="60.0161"
                  y2="65.2318"
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <line
                  x1="30.8574"
                  x2="36.073"
                  y1="11.892"
                  y2="6.6763"
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <line
                  x1="41.3312"
                  x2="36.1155"
                  y1="11.892"
                  y2="6.6763"
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
              </g>
            </svg>
          </div>
          {/* skills */}
          <div className=" flex flex-col gap-12 justify-center">
            {/* skills title */}
            <h1 className="text-2xl font-bold"> Skills</h1>
            {/* list of skills */}
            <div className="flex gap-4 flex-wrap">
              {/* skill item */}
              <div className="rounded-lg flex justify-center items-center  text-white p-2 cursor-pointer bg-blue-500 hover:bg-yellow-200 hover:text-black text-sm">
                React
              </div>
              <div className="rounded-lg flex justify-center items-center  text-white p-2 cursor-pointer bg-blue-500 hover:bg-yellow-200 hover:text-black text-sm">
                flutter
              </div>
              <div className="rounded-lg flex justify-center items-center  text-white p-2 cursor-pointer bg-blue-500 hover:bg-yellow-200 hover:text-black text-sm">
                Laravel
              </div>
              <div className="rounded-lg flex justify-center items-center  text-white p-2 cursor-pointer bg-blue-500 hover:bg-yellow-200 hover:text-black text-sm">
                javascripte
              </div>
              <div className="rounded-lg flex justify-center items-center  text-white p-2 cursor-pointer bg-blue-500 hover:bg-yellow-200 hover:text-black text-sm">
                Php
              </div>
              <div className="rounded-lg flex justify-center items-center  text-white p-2 cursor-pointer bg-blue-500 hover:bg-yellow-200 hover:text-black text-sm">
                Java
              </div>
              <div className="rounded-lg flex justify-center items-center  text-white p-2 cursor-pointer bg-blue-500 hover:bg-yellow-200 hover:text-black text-sm">
                Dot Net
              </div>
              <div className="rounded-lg flex justify-center items-center  text-white p-2 cursor-pointer bg-blue-500 hover:bg-yellow-200 hover:text-black text-sm">
                node js
              </div>
              <div className="rounded-lg flex justify-center items-center  text-white p-2 cursor-pointer bg-blue-500 hover:bg-yellow-200 hover:text-black text-sm">
                Next js
              </div>
              <div className="rounded-lg flex justify-center items-center  text-white p-2 cursor-pointer bg-blue-500 hover:bg-yellow-200 hover:text-black text-sm">
                typescript
              </div>
            </div>
            {/* skill scroll */}
            <svg
              width="100px"
              height="100px"
              viewBox="0 0 72 72"
              id="emoji"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="color">
                <path
                  fill="#D0CFCE"
                  stroke="none"
                  d="M37.2971,16.7728h-2.472c-5.8763,0-10.6842,4.8079-10.6842,10.6842v16.9332 c0,5.8763,4.8079,10.6842,10.6842,10.6842h2.472c5.8763,0,10.6842-4.8079,10.6842-10.6842V27.457 C47.9813,21.5807,43.1734,16.7728,37.2971,16.7728z"
                />
                <path
                  fill="#3F3F3F"
                  stroke="none"
                  d="M36.0611,22.1118L36.0611,22.1118c-1.1405,0-2.0737,0.9332-2.0737,2.0737v5.8343 c0,1.1405,0.9332,2.0737,2.0737,2.0737h0c1.1405,0,2.0737-0.9332,2.0737-2.0737v-5.8343 C38.1348,23.045,37.2016,22.1118,36.0611,22.1118z"
                />
                <path
                  fill="#9B9B9A"
                  stroke="none"
                  d="M35.1358,18.1769c3.0267,1.2986,5.904,3.1629,6.2392,7.8732c0.3881,5.455-1.6305,15.6686-2.2795,20.8566 c-0.4538,3.6277-2.248,5.3071-4.6299,7.2111c-1.2013,0.9603,5.2663,0.8427,7.9297-0.7139 c2.2852-1.3355,4.4994-3.6288,4.5264-2.9039l0.3229-25.8045c0,0-0.9367-6.9377-8.5654-6.9401 C38.6792,17.7555,31.0272,17.3615,35.1358,18.1769z"
                />
              </g>
              <g id="hair" />
              <g id="skin" />
              <g id="skin-shadow" />
              <g id="line">
                <path
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                  d="M38.8294,54.5013h-5.5367c-4.9688,0-9.0342-4.0654-9.0342-9.0342V26.38c0-4.9688,4.0654-9.0342,9.0342-9.0342h5.5367 c4.9688,0,9.0342,4.0654,9.0342,9.0342v19.0871C47.8636,50.4359,43.7982,54.5013,38.8294,54.5013z"
                />
                <path
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                  d="M36.1449,32.1553h-0.1677c-1.1161,0-2.0294-0.9132-2.0294-2.0294v-6.0465c0-1.1161,0.9132-2.0294,2.0294-2.0294h0.1677 c1.1161,0,2.0294,0.9132,2.0294,2.0294v6.0465C38.1743,31.2421,37.2611,32.1553,36.1449,32.1553z"
                />
                <line
                  x1="41.3312"
                  x2="36.1155"
                  y1="60.0161"
                  y2="65.2318"
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <line
                  x1="30.8574"
                  x2="36.073"
                  y1="60.0161"
                  y2="65.2318"
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <line
                  x1="30.8574"
                  x2="36.073"
                  y1="11.892"
                  y2="6.6763"
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <line
                  x1="41.3312"
                  x2="36.1155"
                  y1="11.892"
                  y2="6.6763"
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
              </g>
            </svg>
          </div>
          {/* experiences */}
          <div className=" flex flex-col gap-12 justify-center pb-48">
            {/* Experiences title */}
            <h1 className="text-2xl font-bold"> Experiences</h1>
            {/* list of Experiences */}
            <div className=" flex flex-col gap-4">
              {/* Experience item  */}
              <div className="flex justify-between h-50">
                {/* left */}
                <div className="w-1/3">
                  {/* job title  */}
                  <div className="bg-white p-2 rounded-b-lg rounded-tl-lg font-semibold">
                    Flutter Developer
                  </div>
                  {/* job description  */}
                  <div className="p-2 italic text-sm">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nihil, id!
                  </div>
                  {/* job Date  */}
                  <div className="p-2 text-yellow-500 text-sm">2010 - 2020</div>
                  {/* job place company */}
                  <div className="font-semibold p-1 rounded-lg bg-white text-sm w-fit">
                    minnova consulting
                  </div>
                </div>
                {/* center */}
                <div className="w-1/6 ">
                  {/* line  */}
                  <div className="w-1 h-full bg-gray-500 rounded relative">
                    {/* circle */}
                    <div className="absolute w-5 h-5 -left-2 aspect-square bg-white ring-4 ring-yellow-200"></div>
                  </div>
                </div>
                {/* right */}
                <div className="w-1/3 ">
                  <div className=""></div>
                </div>
              </div>
              {/* Experience item  */}
              <div className="flex justify-between h-50">
                {/* left */}
                <div className="w-1/3">
                  <div className=""></div>
                </div>
                {/* center */}
                <div className="w-1/6 ">
                  {/* line  */}
                  <div className="w-1 h-full bg-gray-500 rounded relative">
                    {/* circle */}
                    <div className="absolute w-5 h-5 -left-2 aspect-square bg-white ring-4 ring-yellow-200"></div>
                  </div>
                </div>
                {/* right */}
                <div className="w-1/3 ">
                  {/* job title  */}
                  <div className="bg-white p-2 rounded-b-lg rounded-tl-lg font-semibold">
                    Laravel Developer
                  </div>
                  {/* job description  */}
                  <div className="p-2 italic text-sm">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nihil, id!
                  </div>
                  {/* job Date  */}
                  <div className="p-2 text-yellow-500 text-sm">2010 - 2020</div>
                  {/* job place company */}
                  <div className="font-semibold p-1 rounded-lg bg-white text-sm w-fit">
                    minnova consulting
                  </div>
                </div>
              </div>
              {/* Experience item  */}
              <div className="flex justify-between h-50">
                {/* left */}
                <div className="w-1/3">
                  {/* job title  */}
                  <div className="bg-white p-2 rounded-b-lg rounded-tl-lg font-semibold">
                    Flutter Developer
                  </div>
                  {/* job description  */}
                  <div className="p-2 italic text-sm">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nihil, id!
                  </div>
                  {/* job Date  */}
                  <div className="p-2 text-yellow-500 text-sm">2010 - 2020</div>
                  {/* job place company */}
                  <div className="font-semibold p-1 rounded-lg bg-white text-sm w-fit">
                    minnova consulting
                  </div>
                </div>
                {/* center */}
                <div className="w-1/6 ">
                  {/* line  */}
                  <div className="w-1 h-full bg-gray-500 rounded relative">
                    {/* circle */}
                    <div className="absolute w-5 h-5 -left-2 aspect-square bg-white ring-4 ring-yellow-200"></div>
                  </div>
                </div>
                {/* right */}
                <div className="w-1/3 ">
                  <div className=""></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* svg container */}
        <div className="hidden lg:block w-1/3 xl:w-1/2 ">

        </div>
      </div>
    </motion.div>
  );
}

export default page;
