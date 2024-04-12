"use client"

import { FaSearch } from "react-icons/fa";

export default function TopNavbar(){

  return (
    <div className="flex justify-center bg-mvcP2 w-full">
      <div className="flex justify-between w-full mx-32">
        <div className="flex items-center">
          {/* <h1 className='ml-28 text-white text-xl font-semibold'>Missouri Valley College</h1> */}
          <img src="Asset 1.svg" alt="mvc_logo" className="h-16 absolute z-50 "/>
        </div>
        <div className="flex items-center space-x-1">
          <button className="py-6 px-2 text-white hover:bg-mvcP hover:cursor-pointer">
            <a className="font-semibold hover:cursor-pointer">My Moval</a>
          </button>
          <button className="py-6 px-2 text-white hover:bg-mvcP hover:cursor-pointer">
            <a className="font-semibold hover:cursor-pointer">Faculty & Staff Directoy</a>    
          </button>
          <button className="py-6 px-2 text-white hover:bg-mvcP hover:cursor-pointer">
            <p className="font-semibold hover:cursor-pointer">Pay Enrollment Fee</p>
          </button>
          <button className="py-6 px-2 text-white hover:bg-mvcP hover:cursor-pointer">
            <p className="font-semibold hover:cursor-pointer">Give to MVC</p>
          </button>
          <button className="flex items-center space-x-2 py-6 px-2 text-white hover:bg-mvcP hover:cursor-pointer">
            <p className="font-semibold hover:cursor-pointer">Search</p>
            <FaSearch/>
          </button>
        </div>
      </div>
    </div>
  );
}