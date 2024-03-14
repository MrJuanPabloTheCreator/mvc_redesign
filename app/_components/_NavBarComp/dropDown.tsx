import { useEffect, useState } from "react"

interface DropDownBoxProps {
    activeTab: number;
}

export const DropDownBox:React.FC<DropDownBoxProps> = ({activeTab}) => {
    const [active, setActive] = useState(activeTab)

    useEffect(() => {
        setActive(activeTab)
    }, [activeTab])
    

    return (
        <div className="flex relative">
            {active === 1 &&  <div className="absolute p-20 w-full bg-white z-50">
                1
            </div>}
            {active === 2 &&  <div className="absolute p-20 w-full bg-white z-50">
                2
            </div>}
            {active === 3 &&  <div className="absolute p-20 w-full bg-white z-50">
                3
            </div>}
            {active === 4 &&  <div className="absolute p-20 w-full bg-white z-50">
                4
            </div>}
        </div>
    )
}