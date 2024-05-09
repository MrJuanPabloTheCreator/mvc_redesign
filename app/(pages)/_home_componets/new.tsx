export default function News(){
    return (
        <div className="flex flex-col items-center py-24">
            <h1 className="font-semibold text-6xl">Happening At Valley</h1>
            <div className="flex w-full overflow-hidden space-x-8 px-11 py-16">
                <div className="relative w-1/2 h-[360px] shadow-lg hover:shadow-2xl hover:scale-105 hover:cursor-pointer transition-transform ease-in-out duration-500">
                    <img src="/ValleyExperience.png" className="cover w-full h-full"/>
                    <h2 className="absolute bottom-10 left-10 text-2xl text-white z-50">Submit Student Research Symposium Proposal</h2>
                    <div className="absolute bottom-0 pt-40 text-white w-full bg-gradient-to-t from-black to-tansparent"/>
                </div>
                <div className="flex w-1/2 h-[360px] space-x-8">
                    <div className="w-1/2 h-full bg-white shadow-lg hover:shadow-2xl hover:scale-105 hover:cursor-pointer transition-transform ease-in-out duration-500">
                        <div className="h-3/5 w-full overflow-hidden">
                            <img src="/news1.jpeg" className="cover"/>
                        </div>
                        <div className="h-2/5 w-full p-7">
                            <p className="text-lg font-bold">Million Dollar Character Scholarship Program Introduced</p>
                        </div>
                    </div>
                    <div className="w-1/2 h-full bg-white shadow-lg hover:shadow-2xl hover:scale-105 hover:cursor-pointer transition-transform ease-in-out duration-500">
                        <div className="h-3/5 w-full overflow-hidden">
                            <img src="/new2.jpg" className="cover"/>
                        </div>
                        <div className="h-2/5 w-full p-7">
                            <p className="text-lg font-bold">Parisi Installed as Missouri Valley's 14th President</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}