import BottomNavbar from "./_NavBarComp/bottomNavbar";
import TopNavbar from "./_NavBarComp/topNavbar";

export default function NavBar(){
    return (
        <div className="relative flex flex-col items-center">
            <TopNavbar/>
            <BottomNavbar/>
        </div>
    )
}