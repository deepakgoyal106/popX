import { Home as HomeIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-93.75 h-180 bg-white rounded-[28px] shadow-2xl overflow-hidden">
     
      <div className="h-full flex flex-col justify-between px-6 py-8 bg-gray-100">

        <div className="mt-2">
          <h1 className="text-[22px] font-semibold text-gray-900">
            Create your <br /> PopX account
          </h1>

          <div className="mt-6 space-y-4">
            <div className="relative">
              <label className="absolute -top-2 left-3 bg-gray-100 px-1 text-[11px] text-violet-600">
                Full Name<span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                placeholder="Marry Doe"
                className="w-full px-3 py-3 border border-gray-300 rounded-md text-[13px] focus:outline-none"
              />
            </div>

            <div className="relative">
              <label className="absolute -top-2 left-3 bg-gray-100 px-1 text-[11px] text-violet-600">
                Phone number<span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                placeholder="Marry Doe"
                className="w-full px-3 py-3 border border-gray-300 rounded-md text-[13px] focus:outline-none"
              />
            </div>

            <div className="relative">
              <label className="absolute -top-2 left-3 bg-gray-100 px-1 text-[11px] text-violet-600">
                Email address<span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                placeholder="Marry Doe"
                className="w-full px-3 py-3 border border-gray-300 rounded-md text-[13px] focus:outline-none"
              />
            </div>

            <div className="relative">
              <label className="absolute -top-2 left-3 bg-gray-100 px-1 text-[11px] text-violet-600">
                Password<span className="text-red-400">*</span>
              </label>
              <input
                type="password"
                placeholder="Marry Doe"
                className="w-full px-3 py-3 border border-gray-300 rounded-md text-[13px] focus:outline-none"
              />
            </div>

            <div className="relative">
              <label className="absolute -top-2 left-3 bg-gray-100 px-1 text-[11px] text-violet-600">
                Company name
              </label>
              <input
                type="text"
                placeholder="Marry Doe"
                className="w-full px-3 py-3 border border-gray-300 rounded-md text-[13px] focus:outline-none"
              />
            </div>

            <div className="mt-2">
              <p className="text-sm text-gray-900 mb-2">
                Are you an Agency?<span className="text-red-400">*</span>
              </p>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="agency"
                    defaultChecked
                    className="accent-violet-600"
                  />
                  Yes
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="agency"
                    className="accent-violet-600"
                  />
                  No
                </label>
              </div>
            </div>
          </div>
        </div>

        <Link

        to="/account"
        
        >
        <button className="w-full py-3 bg-violet-600 text-white rounded-lg font-medium mt-14">
          Create Account
        </button>
        
        </Link>
        

        <div className="flex items-center justify-between text-gray-400 mt-4">
          <ChevronLeft size={22} />
          <HomeIcon size={22} />
          <ChevronRight size={22} />
        </div>

      </div>
    </div>
    </div>
  );
};

export default Signup;