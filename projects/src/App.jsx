import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// React
import { motion } from "framer-motion";

import "./App.css";

function App() {
  return (
    <div className="bg-[#A2b5c1] h-screen relative w-screen flex justify-center items-center">
      <motion.section  
     initial={{ opacity: 1, scale: 1.2, rotateY: 45 }}
     animate={{ opacity: 1, scale: 1, rotateY: 0 }} 
     transition={{ duration: 0.5, ease: "easeInOut" }}
      className="w-[320px] h-[320px] absolute  -top-12 -left-20 rotate-45 rounded-[40px] bg-[#c1e3d1] opacity-35"></motion.section>
      <form className="m-4 bg-[#f6fbf9] w-[455px] h-[500px] flex flex-col items-center text-center p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Create An Account</h1>
        <p className="text-gray-600 mb-4">
          Create an account to enjoy all the services without any ads for free!
        </p>

        <input
          type="text"
          id="name"
          placeholder="enter email"
          className="w-[375px] h-[55px] py-2 mb-6  rounded-xl border-2 border-gray-400 "
        />
        <input
          placeholder="enter password"
          type="text"
          className="w-[375px] h-[55px] py-2 mb-6  rounded-xl border-2 border-gray-400 "
        />
        <button
          type="submit"
          className="w-[255px] h-[59px] bg-lime-600 border-3 rounded-xl  border-gray-400"
        >
          crate account
        </button>
        <p className="text-gray-600 mb-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing.
        </p>
      </form>
      <motion.section 
           initial={{ opacity: 0.5, scale: 1.1, rotateY: 60 }}
           animate={{ opacity: 1, scale: 1, rotateY: 0 }} 
           transition={{ duration: 0.5, ease: "easeInOut" }}
      className="w-[320px] h-[320px] absolute  -bottom-12 -right-20 rotate-45 rounded-[40px] bg-[#c1e3d1] opacity-35"></motion.section>
    </div>
  );
}

export default App;
