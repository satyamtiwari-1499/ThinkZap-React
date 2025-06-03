    import React, { useContext, useState } from "react";
    import { FaBars, FaTimes } from "react-icons/fa";
    import { NavLink } from "react-router-dom";
    import { contextinfo } from "../Context/ContextPage";

    const Navbar = () => {

      const{navOpen,setnavOpen} = useContext(contextinfo)

      return (
        <>
          <div className="container  bg-emerald-700  h-28 min-w-screen text-2xl font-black flex items-center justify-between px-5  md:justify-start  md:gap-[45vw]">
            <NavLink to="/" className="text-white text-3xl">ThinkZap</NavLink>
            <div className="navlinkContainer hidden  md:flex items-center justify-center gap-8">
              <NavLink
                to="/"
                className={(e) => (e.isActive ? "text-red-600" : "text-white")}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={(e) => (e.isActive ? "text-red-600" : "text-white")}
              >
                About
              </NavLink>
              <NavLink
                to="/a"
                className={(e) => (e.isActive ? "text-red-600" : "text-white")}
              >
                LeaderBord
              </NavLink>
              
              <NavLink
                to="/contact"
                className={(e) => (e.isActive ? "text-red-600" : "text-white")}
              >
                Contact
              </NavLink>
            </div>
            <button onClick={()=>setnavOpen(!navOpen)} className="md:hidden z-50">{navOpen?<FaTimes size={40} color="white"/>:<FaBars size={40} color="white"/>}</button>


            <div className={`navlinkContainer bg-red-400 absolute h-full top-0 w-full left-0 transform transition-transform duration-500 ease-in-out z-40 flex gap-8 text-3xl flex-col items-center justify-center  ${navOpen?"translate-x-0":"-translate-x-full"} `}>
              <NavLink
                onClick={()=>setnavOpen(!navOpen)}
                to="/"
                className={(e) => (e.isActive ? "text-red-600" : "text-white")}
              >
                Home
              </NavLink>
              <NavLink
              onClick={()=>setnavOpen(!navOpen)}
                to="/about"
                className={(e) => (e.isActive ? "text-red-600" : "text-white")}
              >
                About
              </NavLink>
              <NavLink
              onClick={()=>setnavOpen(!navOpen)}
                to="/services"
                className={(e) => (e.isActive ? "text-red-600" : "text-white")}
              >
                Services
              </NavLink>
              <NavLink
              onClick={()=>setnavOpen(!navOpen)}
                to="/contact"
                className={(e) => (e.isActive ? "text-red-600" : "text-white")}
              >
                Contact
              </NavLink>
            </div>
          </div>
        </>
      );
    };

    export default Navbar;
