import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGlobe } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      {/* الجزء العلوي */}
      <div className="bg-[#2c3e50] text-white">
        <div className="container mx-auto px-6 py-15 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          
          {/* LOCATION */}
          <div>
            <h2 className="text-xl font-bold mb-4">LOCATION</h2>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>

          {/* AROUND THE WEB */}
          <div>
            <h2 className="text-xl font-bold mb-4">AROUND THE WEB</h2>
            <div className="flex justify-center gap-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center border rounded-full hover:bg-white hover:text-[#2c3e50] transition">
                <FaFacebookF />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center border rounded-full hover:bg-white hover:text-[#2c3e50] transition">
                <FaTwitter />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center border rounded-full hover:bg-white hover:text-[#2c3e50] transition">
                <FaLinkedinIn />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center border rounded-full hover:bg-white hover:text-[#2c3e50] transition">
                <FaGlobe />
              </a>
            </div>
          </div>

          {/* ABOUT */}
          <div>
            <h2 className="text-xl font-bold mb-4">ABOUT FREELANCER</h2>
            <p>
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
      </div>

      {/* الجزء السفلي */}
      <div className="bg-[#1a252f] text-white text-center  py-6">
        <p>Copyright © Your Website 2021</p>
      </div>
    </footer>
  );
}
