import { FaRightToBracket } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";

export const TopNavbar = () => {

  return (
    <div className="flex justify-center bg-mvcP2 w-full">
      <div className="flex justify-between py-2 w-full mr-20 ml-10">
        <div className="flex items-center">
          <h1 className='ml-28 text-white text-2xl font-faustina'>Missouri Valley College</h1>
          <img src="mvc_logo.png" alt="mvc_logo" className="h-28 absolute mt-16"/>
        </div>
        <div className="flex space-x-3 items-center">
          <div className="flex items-center space-x-2">
            <FaRightToBracket className="text-mvcO" size={20}/>
            <a className="text-white hover:underline hover:text-mvcO hover:cursor-pointer">My Moval</a>
          </div>
          <div className="flex items-center space-x-2">
            <IoIosPeople className="text-mvcO" size={28}/>
            <a className="text-white hover:underline hover:text-mvcO hover:cursor-pointer">Faculty & Staff Directoy</a>    
          </div>
          <button className="bg-mvcP py-1 px-2 rounded-lg hover:bg-mvcO">
            <p className="text-white font-semibold">Pay Enrollment Fee</p>
          </button>
          <button className="bg-mvcP py-1 px-2 rounded-lg hover:bg-mvcO">
            <p className="text-white font-semibold">Give to MVC</p>
          </button>
        </div>
      </div>
    </div>
  );
}