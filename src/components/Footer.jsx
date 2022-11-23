import React from "react";
import pokeball from "../assets/pokeball.png";

function Footer() {
  return (
    <div className="flex flex-col bg-gradient-to-r from-gray-superlight to-white w-full justify-center items-center mt-50 p-10">
      <p className="text-lg mb-4 text-gray-dark">Get a new random Pokémon</p>
      <a href="/">
        <img className="w-24" src={pokeball} alt="" />
      </a>
    </div>
  );
}

export default Footer;
