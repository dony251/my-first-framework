// About.jsx
import React from "react";

export default function About() {
  return (
    <div className="text-center bg-teal-400 flex justify-center items-center  h-screen  pt-[80px] text-white">
      <div className=" ">
        <h1 className="text-3xl font-bold mb-6">About Component</h1>

        {/* النجمة بين خطين */}
        <div className="flex items-center justify-center my-6">
          <div className="w-24 h-1 bg-white mr-3" />
          <span className="text-3xl">★</span>
          <div className="w-24 h-1 bg-white ml-3" />
        </div>

        <div className="flex flex-col  container m-auto md:flex-row justify-center items-center gap-8">
          <div className="text-white-700 p-6 rounded shadow-md md:w-1/2">
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>

          <div className=" text-white-700 p-6 rounded shadow-md md:w-1/2">
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
