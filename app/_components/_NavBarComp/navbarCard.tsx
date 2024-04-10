import navBarData from "./navBarData"

interface NavbarCardProps {
    active_nav: number;
    continue_active: (index: number) => void;
}
  
export const NavbarCard: React.FC<NavbarCardProps> = ({ active_nav, continue_active }) => {

    return (
        <div className="flex absolute w-[1300px] py-2 z-50 top-[52px]" onMouseEnter={() => (continue_active(active_nav))} onMouseLeave={() => (continue_active(-1))}>
            <div className="flex flex-col w-full bg-white p-10 text-black">
                <h2 className="flex items-start">
                    <button className="text-2xl hover:cursor-pointer hover:text-mvcO">
                        {navBarData[active_nav]['title']}
                    </button>
                </h2>
                <div className="grid grid-cols-3 w-3/4">
                    {navBarData[active_nav]['buttons'].map((item, index) => (
                        <div key={index} className="text-lg font-normal">
                            <button className="flex items-start w-full hover:cursor-pointer hover:text-mvcO hover:font-semibold">
                                {item}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}