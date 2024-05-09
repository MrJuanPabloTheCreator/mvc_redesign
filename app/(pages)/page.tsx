import Hero from "./_home_componets/hero";
import Images from "./_home_componets/images";
import News from "./_home_componets/new";
import VirtualTour from "./_home_componets/virtualTour";

export default function Home() {

  return (
    <main className="flex flex-col">
      <img src="/MVC_1.jpg" alt="Hero" className="fixed object-cover w-full mt-[-220px] z-[-1]"/>
      <Hero/>
      <div className="bg-bgGray">
        <Images/>
        <News/>
        {/* <VirtualTour/> */}
      </div>
    </main>
  );
}



  