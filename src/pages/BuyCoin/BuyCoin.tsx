import { FaArrowRightLong } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";

const BuyCoin = () => {
  return (
    <div className="font-sans bg-gray-100 mt-8">
      <div className="min-h-screen flex justify-center items-center">
        <div className="">
          <div className="text-center font-semibold">
            <h1 className="text-5xl">
              <span className="text-blue-700 tracking-wide">Flexible </span>
              <span>Plans</span>
            </h1>
            <p className="pt-6 text-xl text-gray-400 font-normal w-full px-8 md:w-full">
              Choose a plan that works best for you and
              <br /> your team.
            </p>
          </div>
          <div className="pt-24 flex flex-row">
            {/* <!-- Basic Card --> */}
            <div className="w-96 p-8 bg-white text-center rounded-3xl pr-16 shadow-xl">
              <h1 className="text-black font-semibold text-2xl">Basic</h1>
              <p className="pt-2 tracking-wide">
                <span className="text-gray-400 align-top">$ </span>
                <span className="text-3xl font-semibold">1</span>
                <span className="text-gray-400 font-medium">/ 100 coins</span>
              </p>
              <hr className="mt-4 border-1" />
              <div className="pt-8">
                <p className="font-semibold text-gray-400 text-left pt-5 flex items-center">
                  <span className="material-icons align-middle">
                    <TiTick className="text-green-500" />
                  </span>
                  <span className="pl-2">
                    10 <span className="text-black">Recipe View</span>
                  </span>
                </p>

                <a href="#" className="">
                  <p className="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white flex justify-center items-center">
                    <span className="font-medium">Choose Plan</span>
                    <span className="pl-2 material-icons align-middle text-sm">
                      <FaArrowRightLong />
                    </span>
                  </p>
                </a>
              </div>
            </div>
            {/* <!-- StartUp Card --> */}
            <div className="w-80 p-8 bg-gray-900 text-center rounded-3xl text-white border-4 shadow-xl border-white transform scale-125">
              <h1 className="text-white font-semibold text-2xl">Startup</h1>
              <p className="pt-2 tracking-wide">
                <span className="text-gray-400 align-top">$ </span>
                <span className="text-3xl font-semibold">5</span>
                <span className="text-gray-400 font-medium">/ 500 coins</span>
              </p>
              <hr className="mt-4 border-1 border-gray-600" />
              <div className="pt-8">
                <p className="font-semibold text-gray-400 text-left pt-5 flex items-center">
                  <span className="material-icons align-middle">
                    <TiTick className="text-green-500" />
                  </span>
                  <span className="pl-2">
                    50 <span className="text-gray-100">Recipe View</span>
                  </span>
                </p>

                <a href="#" className="">
                  <p className="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white flex justify-center items-center">
                    <span className="font-medium">Choose Plan</span>
                    <span className="pl-2 material-icons align-middle text-sm">
                      <FaArrowRightLong />
                    </span>
                  </p>
                </a>
              </div>
              <div className="absolute top-4 right-4">
                <p className="bg-blue-700 font-semibold px-4 py-1 rounded-full uppercase text-xs">
                  Popular
                </p>
              </div>
            </div>
            {/* <!-- Enterprise Card --> */}
            <div className="w-96 p-8 bg-white text-center rounded-3xl pl-16 shadow-xl">
              <h1 className="text-black font-semibold text-2xl">Enterprise</h1>
              <p className="pt-2 tracking-wide">
                <span className="text-gray-400 align-top">$ </span>
                <span className="text-3xl font-semibold">10</span>
                <span className="text-gray-400 font-medium">/ 1000 coins</span>
              </p>
              <hr className="mt-4 border-1" />
              <div className="pt-8">
                <p className="font-semibold text-gray-400 text-left pt-5 flex items-center">
                  <span className="material-icons align-middle">
                    <TiTick className="text-green-500" />
                  </span>
                  <span className="pl-2">
                    100 <span className="text-black">Recipe View</span>
                  </span>
                </p>

                <a href="#" className="">
                  <p className="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white flex justify-center items-center">
                    <span className="font-medium">Choose Plan</span>
                    <span className="pl-2 material-icons align-middle text-sm">
                      <FaArrowRightLong />
                    </span>
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyCoin;
