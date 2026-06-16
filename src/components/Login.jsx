import { Home, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-93.75 h-180 bg-white rounded-[28px] shadow-2xl overflow-hidden">
     
      <div className="h-full flex flex-col justify-between px-6 py-8 bg-gray-100">

        <div className="mt-10">
          <h1 className="text-[22px] font-semibold font-sans text-gray-900">
            Signin to your <br /> PopX account
          </h1>
          <p className="text-sm text-gray-500 mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>

          <div className="mt-8 space-y-5">
            <div className="relative">
              <label className="text-sm text-violet-500 block mb-1 absolute -top-2 left-3  bg-gray-100 px-1 ">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter email address"
                className="w-full px-4 py-3 border rounded-lg text-sm focus:outline-none"
              />
            </div>
            <div className="relative">
              <label className="text-sm text-violet-500 block mb-1 absolute -top-2 left-3  bg-gray-100 px-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full px-4 py-3 border rounded-lg text-sm focus:outline-none"
              />
            </div>
            <Link

            to="/account">
            <button
           
              className="w-full py-3 bg-gray-300 text-white rounded-lg font-medium cursor-not-allowed"
            >
                 Login
            </button>
              
             
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-between text-gray-400">
          <ChevronLeft size={22} />
          <Home size={22} />
          <ChevronRight size={22} />
        </div>

      </div>
    </div></div>
  );
};

export default Login;