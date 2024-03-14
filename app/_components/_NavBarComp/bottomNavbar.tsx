"use client"

import { FaSearch } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

export const BottomNavbar = () => { 

  const tabs = [
    { label: "About" },
    { label: "Admissions & Financial Aid" },
    { label: "Academics" },
    { label: "Certificate Programs" },
    { label: "Student Life" },
    { label: "News & Events" },
    { label: "Alumni" },
    { label: "Athletics" }
  ];
  

  return (
    <div className="flex flex-col w-full">
      <div className="flex w-full bg-white py-5">
        <div className="flex justify-center w-full space-x-4 font-semibold text-lg text-mvcP2">
          {tabs.map((tab, index) => (
            <div className="dropdown">
              <button key={index} className="flex items-center navbar">
                <div className="flex">
                  <a>{tab.label}</a>
                  <span className="absolute bottom-0 p-[2px] rounded-lg navbar-border"/>
                </div>
                <RiArrowDropDownLine size={24}/>
              </button>
              <div className="p-10 bg-white dropdown-menu z-50">
                here
                is 
                Mine
              </div>
            </div>
          ))}
          <button className="hover:cursor-pointer hover:text-mvcO">
            <FaSearch size={24}/>
          </button>
        </div>
      </div>
    </div>
  );
}