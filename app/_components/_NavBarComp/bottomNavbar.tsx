"use client"

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

  return (
    <div className="flex flex-col w-full absolute bottom-[-50px] ">
      <div className="flex w-full">
        <div className="flex justify-center w-full space-x-7 font-semibold text-xl text-white z-50">
          {navItems.map((index) => (
            <button key={index} className="flex relative items-center navbar pt-4 pb-2">
              <a>{index}</a>
              <span className="absolute bottom-0 p-[2px] rounded-lg navbar-border"/> 
          </button>
          ))}
        </div>
      </div>
    </div>
  );
}