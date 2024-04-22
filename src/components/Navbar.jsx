import React, {useState} from "react";
import {FaBars, FaTimes} from 'react-icons/fa'
import logo from "../assets/GymLifeLogo.png";
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
        x: 1,
        link: 'home'
    },
    {
        x: 2,
        link: 'preis'
    },
    {
        x: 3,
        link: 'kurse'
    },
    {
        x: 4,
        link: 'zeitplan'
    },
    {
        x: 5,
        link: 'kontakt'
    },
   
]
  const mlinks = [
    {
        x: 1,
        link: 'home'
    },
    {
        x: 2,
        link: 'preis'
    },
    {
        x: 3,
        link: 'kurse'
    },
    
    {
        x: 5,
        link: 'kontakt'
    },
   
]
  
  return (
    <div className="fixed z-[9999]">
      <div className="h-24 w-full hidden  fixed z-[9999]  text-white justify-center  space-x-[100px]  items-center mx-auto px-4 bg-black/70 lg:flex">
      <img src={logo} alt="" className="cursor-pointer" />
      <div>
      <ul  className="hidden md:flex  ">
          {links.map(({ x, link }) => (
            <li 
              key={x}
              className="px-4 cursor-pointer  uppercase font-medium hover:text-blue-600   text-white hover:scale-105 duration-200 "
              
            >
              <Link to={link} offset={-76} spy={true}  smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <button className=" border-4 border-solid  border-red-700 p-2 rounded-full w-auto px-5 uppercase hover:border-violet-800  hover:scale-105 transition ">
        Mitglied werden
      </button>
      </div>

      {/* mobile */}
      <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer bg-black/70 text-white w-screen h-24 justify-center items-center flex lg:hidden "
        >
          {nav ? <FaTimes size={30} />  : <FaBars size={30} />}
          </div>
            <hr />
        {nav && (
          <ul className="text-black h-full bg-white/70 lg:hidden p-[20px] flex flex-col justify-center items-center space-y-5 cursor-pointer ">
            {mlinks.map(({ id, link }) => (
              <li
                  
                key={id}
                className=" capitalize text-2xl  "
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
        
    </div>
  );
};

export default Navbar;

