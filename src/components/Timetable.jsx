import React, { useState } from "react";

const Timetable = () => {
    const [toggle, setToggle] = useState(1)

    const handleCLick = (index) => {
        setToggle(index);
        console.log(index);
    }

   


    return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-purple-200 to-indigo-400 ">
      <div className=" max-w-3xl mx-auto px-8 sm:px-0  ">
        <div className="">
          <div
            role="tablelist"
            aria-label="tabs"
            className="relative flex w-max  mx-auto h-12 justify-start items-start px-[3xl] rounded-full bg-gray-900/20 overflow-hidden shadow-2xl shadow-900/20 transiition"
          >
            <div className="absolute top-0 left-0 rounded-full bg-white shadow-md"></div>
            <button
              role="tab"
              aria-selected="true"
              aria-controls="panel-1"
              id="tab-1"
              tabIndex="0"
              onClick={() => handleCLick(1)}
              className="relative block h-10 px-6 tab rounded-full focus:bg-white"
            >
              <span className="text-gray-800">Monday</span>
            </button>

            <button
              role="tab"
              aria-selected="false"
              aria-controls="panel-2"
              id="tab-2"
              tabIndex="-1"
              onClick={() => handleCLick(2)}
              className="relative block h-10 px-6 tab rounded-full focus:bg-white"
            >
              <span className="text-gray-800">TuesDay</span>
            </button>
            <button
              role="tab"
              aria-selected="false"
              aria-controls="panel-3"             
              onClick={() => handleCLick(3)}
              className="relative block h-10 px-6 tab rounded-full focus:bg-white"
            >
              <span className="text-gray-800">Wendesday</span>
            </button>
            <button
              role="tab"
              aria-selected="false"
              aria-controls="panel-4"
              id="tab-4"
              tabIndex="-1"
              onClick={() => handleCLick(4)}
              className="relative block h-10 px-6 tab rounded-full focus:bg-white"
            >
              <span className="text-gray-800">Thursday</span>
            </button>
            <button
              role="tab"
              aria-selected="false"
              aria-controls="panel-4"
              id="tab-4"
              tabIndex="-1"
              onClick={() => handleCLick(5)}
              className="relative block h-10 px-6 tab rounded-full focus:bg-white"
            >
              <span className="text-gray-800">Friday</span>
            </button>
            <button
              role="tab"
              aria-selected="false"
              aria-controls="panel-4"
              id="tab-4"
              tabIndex="-1"
              onClick={() => handleCLick(6)}
              className="relative block h-10 px-6 tab rounded-full focus:bg-white"
            >
              <span className="text-gray-800">Saturday</span>
            </button>
            <button
              role="tab"
              aria-selected="false"
              aria-controls="panel-4"
              id="tab-4"
              tabIndex="-1"
              onClick={() => handleCLick(7)}
              className="relative block h-10 px-6 tab rounded-full focus:bg-white"
            >
              <span className="text-gray-800">Sunday</span>
            </button>
          </div>
          <div className="mt-6 relative rounded-3xl bg-purple-50">
            <div
              role="tabpanel"
              id="panel-1"
              className="tab-panel p-6 transition duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-800">
                First tab panel
              </h2>
              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
                dolor error deleniti perspiciatis iste adipisci quas harum,
                commodi ratione inventore laborum aspernatur maiores amet
                incidunt consequatur tenetur, eos eum quidem.
              </p>
            </div>
            <div
             
              className={handleCLick === 2 ? "absolute top-0  opacity-1 tab-panel p-6 transition duration-300" : "absolute top-0 invisible opacity-0 tab-panel p-6 transition duration-300"}
            >
              <h2 className="text-xl font-semibold text-gray-800">
                Second tab panel
              </h2>
              <p className="mt-4 text-gray-600">
               This is a really good test
              </p>
            </div>
            <div
              role="tabpanel"
              id="panel-3"
              className="absolute top-0 invisible opacity-0 tab-panel p-6 transition duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-800">
                Third tab panel
              </h2>
              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
                dolor error deleniti perspiciatis iste adipisci quas harum,
                commodi ratione inventore laborum aspernatur maiores amet
                incidunt consequatur tenetur, eos eum quidem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timetable;
