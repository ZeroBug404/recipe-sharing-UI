import { SVGProps } from "react";
import { JSX } from "react/jsx-runtime";
import CountUp from "react-countup";

const SuccessStories = () => {
  return (
    <section className="bg-gray-100 py-12 md:py-20">
      <div className="px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-700">
            Our Users' Success Stories
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Join the thousands of users who have transformed their cooking with
            our platform. See the incredible growth we've experienced together.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 w-[80%] m-auto">
          <div className="rounded-lg bg-white py-6 px-10 shadow-md hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-between">
              <div>
                {/* <h3 className="text-2xl font-bold">
                  +{"\n                            "}
                </h3> */}
                <div className="bg-gray-200 flex px-3 py-5 rounded-lg justify-center items-center">
                  <CountUp
                    end={140}
                    enableScrollSpy={true}
                    className="text-xl"
                    style={{
                      fontSize: "3rem",
                      fontWeight: "bold",
                      color: "#21286a",
                    }}
                  />
                  <h1 className="text-4xl font-bold text-[#21286a]">+</h1>
                </div>

                <p className="text-lg text-gray-500">Recipes Shared</p>
              </div>
              <CookingPotIcon className="h-12 w-12 text-gray-500  animate-bounce" />
            </div>
          </div>
          <div className="rounded-lg bg-white py-6 px-10 shadow-md hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-between">
              <div>
                {/* <h3 className="text-2xl font-bold">
                  +{"\n                            "}
                </h3> */}
                <div className="bg-gray-200 flex px-3 py-5 rounded-lg justify-center items-center">
                  <CountUp
                    end={179}
                    enableScrollSpy={true}
                    className="text-xl"
                    style={{
                      fontSize: "3rem",
                      fontWeight: "bold",
                      color: "#21286a",
                    }}
                  />
                  <h1 className="text-4xl font-bold text-[#21286a]">+</h1>
                </div>
                <p className="text-lg text-gray-500">Users Joined</p>
              </div>
              <UsersIcon className="h-12 w-12 text-gray-500  animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;

function CookingPotIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12h20" />
      <path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" />
      <path d="m4 8 16-4" />
      <path d="m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8" />
    </svg>
  );
}

function UsersIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
