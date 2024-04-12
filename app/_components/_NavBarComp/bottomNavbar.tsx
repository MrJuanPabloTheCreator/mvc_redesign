"use client"

import { useState } from "react";
import { NavbarCard } from "./navbarCard";

export default function BottomNavbar(){ 
  const navItems = [
    "About",
    "Admissions & Financial Aid",
    "Academics",
    "Certificate Programs",
    "Student Life",
    "News & Events",
    "Alumni",
    "Athletics"
  ];

  const [activeNav, setActiveNav] = useState<number>(-1)

  function continueActive(index: number){
    setActiveNav(index);
  }

  return (
    <div className="flex flex-col w-full absolute bottom-[-50px]">
      <div className="flex w-full">
        <div className="flex justify-center w-full space-x-7 font-semibold text-xl text-white z-50 relative">
          {navItems.map((item, index) => (
            <button 
              key={index} 
              onMouseEnter={() => setActiveNav(index)} // Activates on hover
              onMouseLeave={() => setActiveNav(-1)} 
              className="flex relative items-center navbar pt-4 pb-2"
            >
              <a>{item}</a>
              <span className="absolute bottom-0 p-[2px] rounded-lg navbar-border"/>
            </button>
          ))}
          {activeNav !== -1 && activeNav != 3 && activeNav != 7 &&(        
            <NavbarCard active_nav={activeNav} continue_active={continueActive}/>
          )}
        </div>
      </div>
    </div>
  );
}