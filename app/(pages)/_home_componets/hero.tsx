export default function Hero(){
    return (
        <div className="flex flex-col relative">
            <div className="flex-shrink-0 w-full 3xl:h-[750px] 2xl:h-[600px] overflow-hidden">
                {/* <img src="/MVC_1.jpg" alt="Hero" className="object-cover w-full mt-[-220px]"/> */}
                <div className="absolute top-0 pt-44 text-white w-full bg-gradient-to-b from-black to-tansparent"/>
            </div>
            <div className="flex justify-center w-full bottom-0 text-white absolute">
                <h1 className="text-white 3xl:text-8xl 2xl:text-7xl mb-5 z-50 font-faustina">Missouri Valley College</h1>
                <div className="absolute bottom-0 pt-44 text-white w-full bg-gradient-to-t from-black to-tansparent"/>
            </div>
        </div>
    )
}