// Home.jsx

import React from "react";
import { FaStar } from "react-icons/fa";

export default function Home() {
  return (
    <header className="bg-teal-600 text-white h-screen flex flex-col items-center justify-center text-center">
      <img
        src="1.svg"
        alt="avatar"
        className="w-48 h-48 rounded-full mb-4"
      />
      <h1 className="text-4xl font-bold mb-2">START FRAMEWORK</h1>

      {/* الخطين والنجمة */}
      <div className="flex items-center gap-4 my-4">
        <div className="w-20 h-1 bg-white"></div>
        <FaStar className="text-2xl" />
        <div className="w-20 h-1 bg-white"></div>
      </div>

      <p className="text-lg">Graphic Artist - Web Designer - Illustrator</p>
    </header>
  );
}
