export default function VirtualTour(){
    return (
        <div className="flex w-full h-full py-28">
            <div className="flex flex-col justify-center items-center h-[350px] w-1/2">  
                <h1 className="text-3xl">Ready to get started?</h1>
            </div>
            <div className="h-[350px] w-1/2">
                <img src="/VRTour.jpg" className="cover h-full"/>
            </div>
        </div>
    )
}