// import { FaArrowRight } from "react-icons/fa";
import { TbExternalLink } from "react-icons/tb";

export default function Hero(){
    return (
        <div className="flex flex-col relative">
            {/* <img src="Asset 1.svg" alt="mvc_logo" className="h-20 z-40 absolute ml-3 mt-[50px]"/> */}
            <div className="flex-shrink-0 w-full 3xl:h-[750px] 2xl:h-[600px] overflow-hidden">
                {/* <img src="/MVC_1.jpg" alt="Hero" className="object-cover w-full mt-[-220px]"/> */}
                <div className="absolute top-0 pt-44 text-white w-full bg-gradient-to-b from-black to-tansparent"/>
            </div>
            <div className="flex justify-center w-full bottom-0 text-white absolute">
                {/* <h1 className="text-white 3xl:text-8xl 2xl:text-7xl mb-5 z-50 font-faustina">Missouri Valley College</h1> */}
                <div className="absolute bottom-0 left-0 z-50 mb-12 ml-32 flex flex-col space-y-2">
                    <div className="flex text-mvcO bg-mvcP2 items-center p-3 rounded-md space-x-2 hover:cursor-pointer">
                        <h2 className="text-white text-3xl font-semibold">Register for the Valley Experience Day</h2>
                        <TbExternalLink size={24}/>
                    </div>
                    <button className="border-2 border-mvcO text-mvcO hover:underline hover:cursor-pointer text-xl font-semibold p-2 w-fit rounded-md">MVC Online</button>
                </div>
                <div className="absolute bottom-0 pt-44 text-white w-full bg-gradient-to-t from-black to-tansparent"/>
            </div>
        </div>
    )
}