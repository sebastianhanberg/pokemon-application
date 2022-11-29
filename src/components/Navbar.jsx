import React from "react";
import PokemonLogo from "../assets/pokemonlogo.png";
import { useLocation } from "react-router-dom";
import pokeball from "../assets/pokeball1.png";
import SearchBar from "./SearchBar";
function Navbar() {
  const location = useLocation();

  return (
    <div className="flex flex-col lg:flex-row sm:justify-between items-center lg:justify-between lg:pl-20">
      <div className="w-full flex flex-row lg:justify-start justify-center items-center">
        <a className="pt-4" href="/">
          <img className="w-[120px] lg:w-[180px]" src={PokemonLogo} alt="" />
        </a>
      </div>
      <div className="flex flex-col lg:flex-col justify-center items-center lg:items-start lg:justify-between lg:mr-20 mt-5 lg:mt-10">
        {!location.pathname.includes("details") && <SearchBar />}
        <a className="mt-4 mb-10" href="/">
          <img className="w-24 lg:w-28" src={pokeball} alt="" />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
