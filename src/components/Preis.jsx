import React from "react";
// icons
import DoneIcon from "@mui/icons-material/Done";

import EastIcon from "@mui/icons-material/East";

const Preis = () => {
  return (
    <section id="preis" className="min-h-screen  w-full  bg-gray-900 flex justify-center items-center">
      <div>
        <div className="text-center font-semibold">
          <h1 className="text-5xl">
            <span className=" text-indigo-600 tracking-wide">Flexible</span>
            <span>Pläne</span>
          </h1>
          <p className="pt-8 text-white font-normal text-2xl w-full px-8 md:w-full">
            Dein individueller Trainings Plan
          </p>
        </div>
        <div className="md:pt-24 pt-10 pb-10  flex lg:flex-row flex-col justify-center items-center space-y-8 md:space-y-0">
          {/* Bronze card */}
          <div className="w-96 p-8 bg-[#CD7F32] text-center rounded-3xl lg:mr-7 shadow-xl">
            <h1 className="text-black font-semibold text-2xl">Basic</h1>
            <p className="pt-2 tracking-wide">
              <span className="text-black align-bottom">€</span>
              <span className="text-3xl font-semibold">15</span>
              <span className="text-black font-medium">/ monat</span>
            </p>
            <hr className="mt-4 border-1" />
            <div className="pt-8 ">
              <p className="font-semibold text-black text-left pt-2">
                <span className=" align-bottom   ">
                  <DoneIcon />
                </span>
                <span className="pl-2">
                  Get Started with <span>messaging</span>
                </span>
              </p>
              <p className="font-semibold text-black text-left pt-2">
                <span className=" align-bottom   ">
                  <DoneIcon />
                </span>
                <span className="pl-2">
                  Get Started with <span>messaging</span>
                </span>
              </p>
              <p className="font-semibold text-black text-left pt-2">
                <span className=" align-bottom   ">
                  <DoneIcon />
                </span>
                <span className="pl-2">
                  Get Started with <span>messaging</span>
                </span>
              </p>

              <a href="#" className="">
                <p className="w-full py-4 bg-blue-600 mt-8 rounded-full text-white">
                  <span className="font-medium">Plan Auswählen</span>
                  <span className="pl-2 align-bottom text-sm">
                    <EastIcon />
                  </span>
                </p>
              </a>
            </div>
          </div>
          {/* gold */}
          <div className="w-96 md:w-80 p-8 bg-[#d4af37] text-center rounded-3xl transform md:scale-125  border-4 border-gray-800 shadow-xl">
            <h1 className="text-black font-semibold text-2xl">Gold</h1>
            <p className="pt-2 tracking-wide">
              <span className="text-black align-bottom">€</span>
              <span className="text-3xl font-semibold">75</span>
              <span className="text-black font-medium">/ monat</span>
            </p>
            <hr className="mt-4 border-1" />
            <div className="pt-8 ">
              <p className="font-semibold text-black text-left pt-2">
                <span className=" align-bottom   ">
                  <DoneIcon />
                </span>
                <span className="pl-2">
                  Get Started with <span>messaging</span>
                </span>
              </p>
              <p className="font-semibold text-black text-left pt-2">
                <span className=" align-bottom   ">
                  <DoneIcon />
                </span>
                <span className="pl-2">
                  Get Started with <span>messaging</span>
                </span>
              </p>
              <p className="font-semibold text-black text-left pt-2">
                <span className=" align-bottom   ">
                  <DoneIcon />
                </span>
                <span className="pl-2">
                  Get Started with <span>messaging</span>
                </span>
              </p>

              <a href="#" className="">
                <p className="w-full py-4 bg-blue-600 mt-8 rounded-full text-white">
                  <span className="font-medium">Plan Auswählen</span>
                  <span className="pl-2 align-bottom text-sm">
                    <EastIcon />
                  </span>
                </p>
              </a>
            </div>
            <div className="absolute text-white top-4 right-4 ">
              <p className="bg-blue-700 text-xs font-semibold px-4 py-1 rounded-full uppercase">
                Empholen
              </p>
            </div>
          </div>
          {/* Silver */}
          <div className="w-96 p-8 bg-[#c0c0c0] text-center rounded-3xl md:ml-7  shadow-xl">
            <h1 className="text-black font-semibold text-2xl">Silber</h1>
            <p className="pt-2 tracking-wide">
              <span className="text-black align-bottom">€</span>
              <span className="text-3xl font-semibold">35</span>
              <span className="text-black font-medium">/ monat</span>
            </p>
            <hr className="mt-4 border-1" />
            <div className="pt-8 ">
              <p className="font-semibold text-black text-left">
                <span className=" align-bottom   ">
                  <DoneIcon />
                </span>
                <span className="pl-2">
                  Get Started with <span>messaging</span>
                </span>
              </p>
              <p className="font-semibold text-black text-left pt-2">
                <span className=" align-bottom   ">
                  <DoneIcon />
                </span>
                <span className="pl-2">
                  Get Started with <span>messaging</span>
                </span>
              </p>
              <p className="font-semibold text-black text-left pt-2">
                <span className=" align-bottom   ">
                  <DoneIcon />
                </span>
                <span className="pl-2">
                  Get Started with <span>messaging</span>
                </span>
              </p>

              <a href="#" className="">
                <p className="w-full py-4 bg-blue-600 mt-8 rounded-full text-white">
                  <span className="font-medium">Plan Auswählen</span>
                  <span className="pl-2 align-bottom text-sm">
                    <EastIcon />
                  </span>
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Preis;
