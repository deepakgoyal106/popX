import { Link } from "react-router-dom";
import { Home as HomeIcon, ChevronLeft, ChevronRight } from "lucide-react";

const Home=()=> {
  return (
   <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-93.75 h-180 bg-white rounded-[28px] shadow-2xl overflow-hidden">
     
      <div className="h-full flex flex-col justify-between px-6 py-8 bg-gray-100">

         <div className="flex-1"></div> 

        <div className="mb-6">
          <h1 className="text-xl font-sans font-semibold text-neutral-800">
            Welcome to PopX
          </h1>

          <p className="text-sm text-gray-500 mt-2">
            Lorem ipsum dolor sit amet,<br />
            consectetur adipiscing elit.
          </p>

          <div className="mt-8 space-y-4">
            <Link
              to="/signup"
              className="block w-full text-center bg-violet-600 text-white py-3 rounded-lg font-medium"
            >
              Create Account
            </Link>

            <Link
              to="/login"
              className="block w-full text-center bg-violet-300 text-black py-3 rounded-lg font-medium"
            >
              Already Registered? Login
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-between text-gray-400 mt-6">
          <ChevronLeft size={22} />
          <HomeIcon size={22} />
          <ChevronRight size={22} />
        </div>

      </div>
    </div>
    </div>
  );
}
export default Home