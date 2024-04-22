import React from "react";

export const Gym = () => {
  return (
    <section className="py-7 md:pt-0  flex h-full w-full  justify-center bg-black border-y-4  ">
      <div class="w-16 overflow-hidden   right-0 flex absolute left-0 mx-auto    ">
        <div class=" h-11 w-11 bg-white -rotate-45 transform border-4 border-white  origin-top-left"></div>
      </div>
      {/* Content */}
      <div className="text-white text-center relative  flex md:flex-row flex-col space-y-10 md:space-y-0 pt-10  px-10  space-x-5   ">
        <div className="flex flex-col ">
          <h1 className="text-4xl mb-10">Personal Trainer</h1>
          <p >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
            voluptates beatae debitis. Nisi itaque corrupti enim, veniam, quae
            inventore repellat consequuntur distinctio ut sunt modi ducimus.
            Natus ipsa aspernatur deserunt explicabo perferendis, minima
            voluptatibus vel quaerat! Fuga esse enim doloribus alias iusto
            aliquid, unde cum excepturi temporibus nemo voluptas laborum?
          </p>
          <button className="text-white text-2xl p-3 rounded-full border-2 border-violet-600 hover:border-violet-700 w-[250px] mt-10 mx-auto left-0 right-0 ">
            Lern mehr
          </button>
        </div>
        <div className="flex flex-col  ">
          <h1 className="text-4xl mb-10 ">Probe Training</h1>
          <p>
            Vereibare jetzt ein probe training bei GymLife und erkunden sie unsere Programme.
          </p>
          <button className="text-white text-2xl p-3 rounded-full border-2 border-violet-600 hover:border-violet-700 w-[250px] mt-10 mx-auto left-0 right-0 ">
            Lern mehr
          </button>
        </div>

        <div className="flex flex-col  ">
        <h1 className="text-4xl mb-10">Outdoor</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
            voluptates beatae debitis. Nisi itaque corrupti enim, veniam, quae
            inventore repellat consequuntur distinctio ut sunt modi ducimus.
            Natus ipsa aspernatur deserunt explicabo perferendis, minima
            voluptatibus vel quaerat! Fuga esse enim doloribus alias iusto
            aliquid, unde cum excepturi temporibus nemo voluptas laborum?
          </p>
          <button className="text-white text-2xl p-3 rounded-full border-2 border-violet-600 hover:border-violet-700 w-[250px] mt-10 mx-auto left-0 right-0 ">
            Lern mehr
          </button>
        </div>
      </div>
    </section>
  );
};
