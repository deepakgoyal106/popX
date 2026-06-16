import { Camera, Home as HomeIcon, ChevronLeft, ChevronRight  } from "lucide-react";

const Account = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-93.75 h-180 bg-white rounded-[28px] shadow-2xl overflow-hidden">
     
      <div className="h-full flex flex-col bg-gray-100">

        <div className="px-6 py-5 border-b border-gray-200">
          <h1 className="text-[18px] font-medium text-gray-900">
            Account Settings
          </h1>
        </div>

        <div className="px-6 py-6 flex items-start gap-4">
          <div className="relative">
            <img
              src="/max-verstappen-red-bull-racing.webp"
              alt="profile"
              className="w-[72px] h-[72px] rounded-full object-cover"
            />
            <div className="absolute -bottom-1 -right-1 w-[22px] h-[22px] bg-purple-600 rounded-full flex items-center justify-center shadow-sm">
              <Camera size={12} className="text-white" />
            </div>
          </div>

          <div>
            <h2 className="text-[15px] font-medium text-gray-900">Maax Verstappen</h2>
            <p className="text-[13px] text-gray-500 mt-0.5">Max@Redbull.Com</p>
          </div>
        </div>

        <div className="px-6 text-[13px] text-gray-600 leading-5 mt-2">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
          Erat, Sed Diam
        </div>

        <div className="px-6 my-6">
          <div className="border-t border-dashed border-gray-300"></div>
        </div>

        <div className="flex-1"></div>

        <div className="px-6 mb-8">
          <div className="border-t border-dashed border-gray-300"></div>
        </div>

        <div className="mt-2"></div>

         <div className="px-6 pb-7">
          <div className="flex items-center justify-between text-gray-500">
            <ChevronLeft size={18} strokeWidth={1.5} />
            <HomeIcon size={18} strokeWidth={1.5} />
            <ChevronRight size={18} strokeWidth={1.5} />
          </div>
        </div>

      </div>
    </div></div>
  );
};

export default Account;