import React from "react";
import pokeball from "../assets/pokeball.png";

function Footer() {
  return (
    <div className="flex flex-col w-full justify-center items-center p-10">
      <a href="/">
        <img className="w-24" src={pokeball} alt="" />
      </a>
      <p className="text-xl font-bold text-gray-light">
        Get a new random Pokémon
      </p>
    </div>
  );
}

export default Footer;
