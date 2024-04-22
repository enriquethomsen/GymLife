import React, { useState } from "react";

//Data
import { TimeTab } from "../Data/AccordionData";

// icons
import { HiChevronRight } from "react-icons/hi";
const FAQ = () => {
  const [currentTab, setCurrentTab] = useState(1);

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };
  return (
    <section id="zeitplan" className="min-h-max py-10 md:flex items-center flex-col  bg-gradient-to-br from-purple-200 to-indigo-400 hidden ">
      <span className="text-3xl font-bold pb-10">Zeitplan</span>
      <div className=" flex w-max  mx-auto h-max  rounded-full bg-gray-900/20 overflow-hidden shadow-2xl shadow-900/20 transiition ">
        {TimeTab.map((item, i) => {
          return (
            <div className="flex flex-col">
              <button
                className=" focus:bg-violet-600 p-4 rounded-xl text-2xl cursor-pointer "
                key={i}
                id={item.id}
                onClick={(handleTabClick)}
              >
                {item.day}
              </button>
            </div>
          );
        })}
      </div>
      <div>
        {TimeTab.map((item, i) => {
          return (
            <div key={i} className="text-3xl  mt-4 ">
              {currentTab === `${item.id}` && (
                <table className="w-auto table-row border-4 border-black">
                  <thead className="bg-gray-700 border-4 border-black">
                    <tr>
                      <th className="p-3 text-md font-semibold tracking-wide text-left  ">
                        Uhrzeit
                      </th>
                      <th className="p-3 text-md font-semibold tracking-wide text-left ">
                        Trainer
                      </th>
                      <th className="p-3 text-md font-semibold tracking-wide text-left ">
                        Kurs
                      </th>
                      <th className="p-3 text-md font-semibold tracking-wide text-left ">
                        Location
                      </th>
                      <th className="p-3 text-md font-semibold tracking-wide text-left ">                        
                      </th>
                    </tr>
                  </thead>
                  <tbody className="border-4 border-black divide-y divide-black bg-white">
                    <tr className="">
                      <td className="p-3 text-md font-semibold text-left w-[300px]">
                      {item.day} 6:30 - 11:30
                      </td>
                      <td className="p-3 text-[1.4rem] font-semibold text-left w-[300px]">
                      {item.trainer}
                      </td>
                      <td className="p-3 text-[1.4rem] font-semibold text-left w-[300px]">
                       Yoga
                      </td>
                      <td className="p-3 text-[1.4rem] font-semibold text-left w-[300px]">
                        Hamburg
                      </td>
                      <td className="p-3 text-[24px] font-bold text-right w-[300px] pr-10 text-blue-500">
                        <a href="#">details</a>
                      </td>
                    </tr>
                    <tr className="">
                      <td className="p-3 text-md font-semibold text-left w-[300px]">
                      {item.day} 13:00 - 15:00
                      </td>
                      <td className="p-3 text-[1.4rem] font-semibold text-left w-[300px]">
                      {item.trainer}
                      </td>
                      <td className="p-3 text-[1.4rem] font-semibold text-left w-[300px]">
                        Freies Training
                      </td>
                      <td className="p-3 text-[1.4rem] font-semibold text-left w-[300px]">
                        Hamburg
                      </td>
                      <td className="p-3 text-[24px] font-bold text-right w-[300px] pr-10 text-blue-500">
                        <a href="#">details</a>
                      </td>
                    </tr>
                    <tr className="">
                      <td className="p-3 text-md font-semibold text-left w-[400px]">
                      {item.day} 15:00 - 18:00
                      </td>
                      <td className="p-3 text-[1.4rem] font-semibold text-left w-[300px]">
                        {item.trainer}
                      </td>
                      <td className="p-3 text-[1.4rem] font-semibold text-left w-[300px]">
                        Boxen
                      </td>
                      <td className="p-3 text-[1.4rem] font-semibold text-left w-[300px]">
                      Hamburg
                      </td>
                      <td className="p-3 text-[24px] font-bold text-right w-[300px] pr-10 text-blue-500">
                        <a href="#" className="">details</a>                                               
                      </td>
                    </tr>
                    <tr className="">
                      <td className="p-3 text-md font-semibold text-left w-[300px]">
                      {item.day} 18:00 - 21:00
                      </td>
                      <td className="p-3 text-[1.4rem] font-semibold text-left w-[300px]">
                        {item.trainer}
                      </td>
                      <td className="p-3 text-[1.4rem] font-semibold text-left w-[300px]">
                        Meditation
                      </td>
                      <td className="p-3 text-[1.4rem] font-semibold text-left w-[300px]">
                       Hamburg
                      </td>
                      <td className="p-3 text-[24px] font-bold text-right w-[300px] pr-10 text-blue-500">
                        <a href="#">details</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
