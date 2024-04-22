import React from "react";
// hero Image
import heroBg from "../assets/Gym3.jpg";
// icons
import {} from "react-icons/";
const Home = () => {
  return (
    <section id="home" className="lg:min-h-[90vh] h-full bg-contain w-full mx-auto overflow-hidden">
      <div className=" relative  ">
        <img src={heroBg} alt="" className=""/>

      </div>
      <hr />
    </section>
  );
};

export default Home;
