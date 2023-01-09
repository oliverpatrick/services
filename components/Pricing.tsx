import React from 'react';

function Pricing() {
  return (
    <div className="min-h-screen bg-gray-200 p-5 md:grid">
      <div className="lg:flex items-center justify-center">
        <div className="bg-[#a1a1a1] rounded-md overflow-hidden text-center shadow max-w-xs mx-auto lg:mx-0 flex-grow">
          <div className="bg-white py-12 px-5">
            <h1
              className="capitalize font-bold text-4xl text-blue-400"
              id="textRight"
            >
              £299.88
            </h1>
            <p className="text-gray-500 text-md mt-1">($365)</p>
            <p className="text-gray-500 mt-1">per year</p>
          </div>
          <div className="bg-blue-400 text-white pt-6 pb-9 px-8" id="bgRight">
            <h2 className="text-2xl font-semibold mb-5">GoDaddy</h2>

            <button
              className="text-blue-400 bg-white py-2.5 px-12 shadow-md rounded-full inline mt-8 font-bold tracking-wider uppercase text-xs"
              id="btnRight"
            >
              choose
            </button>
          </div>
        </div>

        <div className="my-5 bg-[#a1a1a1] rounded-md overflow-hidden text-center shadow max-w-xs mx-auto lg:mx-0 flex-grow lg:scale-110">
          <div className="bg-white h-1/4 py-12 px-5">
            <h1
              className="capitalize font-bold text-5xl text-blue-500"
              id="textLeft"
            >
              £348
            </h1>
            <p className="text-gray-500 text-md mt-1">($424)</p>
            <p className="text-gray-500 mt-1">per year</p>
          </div>
          <div className="bg-blue-500 text-white pt-6 pb-9 px-8" id="bgLeft">
            <h2 className="uppercase text-2xl font-semibold mb-5">WIX</h2>
            {/* <ul className="flex flex-col gap-2.5">
                <li className="flex items-center capitalize text-sm md:text-base">
                  <svg
                    className="w-5 h-5 mr-1.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  lorem ipsum dolor sit amet
                </li>
                <li className="flex items-center capitalize text-sm md:text-base">
                  <svg
                    className="w-5 h-5 mr-1.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  lorem ipsum dolor sit amet
                </li>
                <li className="flex items-center capitalize text-sm md:text-base">
                  <svg
                    className="w-5 h-5 mr-1.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                  lorem ipsum dolor sit amet
                </li>
                <li className="flex items-center capitalize text-sm md:text-base">
                  <svg
                    className="w-5 h-5 mr-1.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                  lorem ipsum dolor sit amet
                </li>
              </ul> */}
            <button
              className="text-blue-500 bg-white py-2.5 px-12 shadow-md rounded-full inline mt-8 font-bold tracking-wider uppercase text-xs"
              id="btnLeft"
            >
              choose
            </button>
          </div>
        </div>

        <div className="lg:-mt-1 bg-[#a1a1a1] rounded-md overflow-hidden text-center shadow max-w-xs mx-auto my-5 lg:my-0 lg:mx-0 flex-grow transform lg:scale-125 z-20">
          <div className="bg-white py-14 px-5">
            <h1 className="capitalize font-bold text-6xl" id="textMiddle">
              £150
            </h1>
            <p className="text-gray-500 text-md mt-1">($182)</p>
            <p className="text-gray-500 mt-1">Upfront</p>
          </div>
          <div className="bg-indigo-500 text-white pt-6 pb-9 px-8">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow to-orange uppercase text-2xl font-semibold mb-5">
              CIO Development
            </h2>
            <button
              className="text-indigo-500 bg-white py-2.5 px-12 shadow-md rounded-full inline mt-8 font-bold tracking-wider uppercase text-xs"
              id="btnMiddle"
            >
              choose
            </button>
          </div>
        </div>

        <div className="my-5 bg-[#a1a1a1] rounded-md overflow-hidden text-center shadow max-w-xs mx-auto lg:mx-0 flex-grow lg:scale-110 ">
          <div className="bg-white py-12 px-5">
            <h1
              className="capitalize font-bold text-5xl text-blue-400"
              id="textRight"
            >
              £480
            </h1>
            <p className="text-gray-500 text-md mt-1">($585)</p>
            <p className="text-gray-500 mt-1">per year</p>
          </div>
          <div className="bg-blue-400 text-white pt-6 pb-9 px-8" id="bgRight">
            <h2 className="text-2xl font-semibold mb-5">SQUARESPACE</h2>

            <button
              className="text-blue-400 bg-white py-2.5 px-12 shadow-md rounded-full inline mt-8 font-bold tracking-wider uppercase text-xs"
              id="btnRight"
            >
              choose
            </button>
          </div>
        </div>

        <div className="bg-[#a1a1a1] rounded-md overflow-hidden text-center shadow max-w-xs mx-auto lg:mx-0 flex-grow">
          <div className="bg-white py-12 px-5">
            <h1
              className="capitalize font-bold text-4xl text-blue-400"
              id="textRight"
            >
              £600
            </h1>
            <p className="text-gray-500 text-md mt-1">($731)</p>
            <p className="text-gray-500 mt-1">upfront</p>
          </div>
          <div className="bg-blue-400 text-white pt-6 pb-9 px-8" id="bgRight">
            <h2 className="text-2xl font-semibold mb-5">Agency</h2>

            <button
              className="text-blue-400 bg-white py-2.5 px-12 shadow-md rounded-full inline mt-8 font-bold tracking-wider uppercase text-xs"
              id="btnRight"
            >
              choose
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
