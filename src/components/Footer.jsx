import React from "react";

// icons
import {
  AiFillTwitterSquare,
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <section id="kontakt" className="bg-black min-h-[280px] w-full">
      <div className="text-gray-400 py-8 md:px-[300px] md:justify-between md:space-y-0 space-y-10 text-center md:text-left  md:items-start flex flex-col md:flex-row">
        <div className="">
          <h1 className="font-bold text-2xl text-violet-300">Unternehmen</h1>
          <div className="flex flex-col pt-5">
            <span>Über uns</span>
            <span>Presse</span>
            <span>Blog</span>
          </div>
        </div>

        <div className="">
          <h1 className="font-bold text-2xl text-violet-300">Karriere</h1>
          <div className="flex flex-col pt-5">
            <span>Personal Trainer werden</span>
            <span>Karriere bei GymLife</span>
            <span>GL als Arbeitgeber</span>
            <span>Bewerbung</span>
            <span>Jobs</span>
          </div>
        </div>
        <div className="">
          <h1 className="font-bold text-2xl text-violet-300">Studios</h1>
          <div className="flex flex-col pt-5">
            <span>Hamburg</span>
            <span>Berlin</span>
            <span>Frankfurt</span>
            <span>Lübeck</span>
          </div>
        </div>
        <div className="">
          <h1 className="font-bold text-2xl text-violet-300">Service</h1>
          <div className="flex flex-col pt-5">
            <span>Mitgliedschaft</span>
            <span>Probetraining</span>
            <span>Kontakt</span>
            <span>Impressum</span>
            <span>Datenschutz</span>
            <span>Kündigung & Pausierung</span>
          </div>
        </div>
      </div>
      {/* Socials */}
      <div className="bg-black w-full h-20 justify-center items-center text-white space-x-5 flex">
        <a href="https://twitter.com/">
          <AiFillTwitterSquare className="text-5xl" />
        </a>
        <a href="https://Instagram.com/">
          <AiFillInstagram className="text-5xl" />
        </a>
        <a href="https://Youtube.com/">
          <AiFillYoutube className="text-5xl" />
        </a>
        <a href="https://Facebook.com/">
          <AiFillFacebook className="text-5xl" />
        </a>
      </div>
      {/* Copyright div */}
      <hr />
      <div className="bg-gray-700 h-[70px] ">
        <div className="flex justify-center space-x-10 items-center">
          <span>&copy;2023 GymLife Alle Rechte vorbehalten</span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
