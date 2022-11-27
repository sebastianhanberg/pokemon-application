import React from "react";
import PokemonLogo from "../assets/pokemonlogo.png";
import { useLocation } from "react-router-dom";
import pokeball from "../assets/pokeball1.png";
import SearchBar from "./SearchBar";
function Navbar() {
  const location = useLocation();

  return (
    <div className="flex flex-col lg:flex-row pt-10 sm:justify-between items-center lg:justify-between lg:pl-20">
      <div className="w-full flex flex-row lg:justify-start justify-center items-center">
        <a className="pt-5" href="/">
          <img className="w-[180px] mb-4" src={PokemonLogo} alt="" />
        </a>
      </div>
      <div className="flex flex-col lg:flex-col justify-center items-center lg:items-start lg:justify-between lg:mr-20">
        <a className="pb-5" href="/">
          <img className="w-24" src={pokeball} alt="" />
        </a>
        {!location.pathname.includes("details") && <SearchBar />}
      </div>
    </div>
  );
}

export default Navbar;
