
export const Navbar = () => {

  return (
    <div className="flex justify-center bg-mvcP border-mvcO border-b-4">
      <div className="flex justify-between py-5 w-5/6">
        <div className="flex items-center">
          {/* <h1 className="text-white text-xl">Missouri Valley College</h1> */}
          <img src="mvc_logo.png" alt="mvc_logo" className="h-40 absolute mt-20"/>
        </div>
        <div className="flex space-x-2 items-center">
          <div className="flex space-x-5">
            <a className="text-white font-semibold hover:underline">My Moval</a>
            <a className="text-white font-semibold hover:underline">Faculty & Staff Directoy</a>    
          </div>
          <button className="bg-mvcO p-2 rounded-lg">
            <p className="text-white font-semibold">Pay Enrollment Fee</p>
          </button>
          <button className="bg-mvcO p-2 rounded-lg">
            <p className="text-white font-semibold">Give to MVC</p>
          </button>
        </div>
      </div>
    </div>
  );
}