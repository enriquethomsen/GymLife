import React from "react";

//assets
import Pool from "../assets/Pool-min.png";
import Boxing from "../assets/boxing.jpg";
import Yoga from "../assets/Yoga.jpg";
const Training = () => {
  return (
    <section
      id="kurse"
      className="min-h-full w-full p-10 bg-gradient-to-br  text-white from-[#212121] to-gray-900"
    >
      <div className="grid md:grid-cols-2 grid-rows-1">
        {/* Image 1 */}
        <div>
          <img src={Pool} alt="" />
        </div>
        {/* Text 1 */}
        <div className="justify-center items-center flex flex-col">
          <h1 className="text-4xl font-bold">Pools</h1>
          <span className=" text-2xl w-[400px] md:w-[500px] text-center">
            Mit einem der besten Innenpools und einem der einzigen
            Salzwasserpools im Stadtzentrum von Hamburg können Sie sich
            hier entspannen oder neue Energie tanken. Das Fitnesscenter und die
            Pools, die mit einem sonnigen Atrium, einer Außenterrasse sowie
            einer Sauna und einem Dampfbad ausgestattet sind, stehen allen
            Mitgliedern zu Verfügung.
          </span>
        </div>
      </div>
      {/* 2 start */}
      <div className="md:grid md:grid-cols-2 grid-rows-1 hidden">
        {/* Text 2 */}
        <div className="justify-center items-center flex  flex-col">
          <h1 className="text-4xl font-bold">Boxing</h1>
          <span className="text-2xl  text-center w-[400px] md:w-[500px] ">
            Lust auf etwas Neues? - dann sind sie Hier richtig, Unser Boxing
            Center bietet eine ausgewogene Trainings-austattung die sie auf ein
            neues Level bringt.
          </span>
        </div>
        {/* Image 2 */}
        <div>
          <img src={Boxing} alt="" />
        </div>
      </div>

      {/* 3 start */}
      <div className="grid md:grid-cols-2 grid-rows-1 mt-5 md:mt-0">
        {/* Image 3 */}
        <div>
          <img src={Yoga} alt="" />
        </div>
        {/* Text 3 */}
        <div className="justify-center items-center flex flex-col">
          <h1 className="text-4xl font-bold">Fitness</h1>
          <span className="text-2xl w-[400px] md:w-[500px]  text-center ">
            Ausdauer, Kraft und Koordination - sind ein starkes Team!
            Fitnesstraining ist ein effizienter Weg, sich für Alltag, Beruf,
            Sport und Freizeit gesund und leistungsfähig zu halten. Neben der
            geistigen ist die körperliche Fitness ein wichtiger Faktor um in
            unserer schnelllebigen Zeit den Belastungen,
            Zivilisationskrankheiten und Stress, sowie dem täglichen Druck
            besser Stand zu halten.
          </span>
        </div>
      </div>
      {/* mobile 2 start */}
      <div className="grid md:grid-cols-2 grid-rows-1 md:hidden mt-5 md:mt-0">
        {/* Image 2 */}
        <div>
          <img src={Boxing} alt="" />
        </div>
        {/* Text 2 */}
        <div className="justify-center items-center flex">
          <span className="text-2xl w-[400px] md:w-[500px]  text-center mt-5 md:mt-0">
          Lust auf etwas Neues? - dann sind sie Hier richtig, Unser Boxing
            Center bietet eine ausgewogene Trainings-austattung die sie auf ein
            neues Level bringt.
          </span>
        </div>
      </div>
      {/* mobile end */}
    </section>
  );
};

export default Training;
