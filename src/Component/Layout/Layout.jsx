import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Layout() {
  return (
    <>
      {/* <nav className="bg-gray-800 text-white p-4 flex gap-6 justify-center">
        <NavLink to="/" className={({ isActive }) => isActive ? "font-bold underline" : ""}>Start Framework</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "font-bold underline" : ""}>About</NavLink>
        <NavLink to="/portfolio" className={({ isActive }) => isActive ? "font-bold underline" : ""}>Portfolio</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "font-bold underline" : ""}>Contact</NavLink>
      </nav> */}
    <Navbar/>
      <div className="">
      <Outlet ></Outlet>
      </div>
      <Footer/>    </>
  );
}
