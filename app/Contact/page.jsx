"use client";
import React, { useRef, useState  } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const text = "Say Hello";
function page() {
  const [succes, setSucces] = useState(false);
  const [error, seterror] = useState(false);

  const form = useRef();

  // send message in contact page
  const sendEmail = (e) => {
    e.preventDefault();
    setSucces(false);
    seterror(false);

    emailjs
      .sendForm(
        "process.env.Next_Public_Service_Id",
        "process.env.Next_Public_Template_Id",
        form.current,
        {
          publicKey: "process.env.Next_Public_Id",
        }
      )
      .then(
        () => {
          setSucces(true);
          form.current.reset()
         
        },
        (error) => {
          seterror(true);
        }
      );
  };

  return (
    <motion.div
      className="h-full "
      initial={{ y: "-200vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="h-full  flex flex-col lg:flex-row p-4 sm:px-8 md:px-12 lg:px-20 xl:px-24 ">
        {/* text */}
        <div className="flex items-center justify-center h-1/2 lg:h-full lg:w-1/2 w-full text-6xl  ">
          {text.split("").map((item, index) => (
            <motion.span
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ delay: index * 0.2, repeat: Infinity, duration: 3 }}
              key={index}
              className="text-white"
            >
              {item}
            </motion.span>
          ))}
          😊
        </div>

        {/* form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex   p-24 flex-col gap-6 h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-lg"
        >
          <span>My Name is :</span>

          <input
            type="text"
            name="user_name"
            className=" bg-transparent border-b outline-none resize-none border-black"
          />
          <span>My Email Address is :</span>

          <input
            name="user_email"
            type="email"
            className=" bg-transparent border-b outline-none resize-none border-black"
          />
          <span>Dear Mohammed Abbaz :</span>
          <textarea
            name="user_message"
            rows={6}
            className="bg-transparent border-b outline-none resize-none border-black"
          />
          <button className="w-full py-3 text-white bg-gradient-to-r from-white to-blue-500 rounded font-semibold ">
            Send
          </button>
          {succes && (
            <span className="text-green-600">
              Your message has been sent successfully
            </span>
          )}
          {error && <span className="text-red-700">somthing wont wrong!</span>}
        </form>
      </div>
    </motion.div>
  );
}

export default page;
