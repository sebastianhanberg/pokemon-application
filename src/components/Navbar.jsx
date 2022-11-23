import React from "react";
import pokeball from "../assets/pokeball.png";
import PokemonLogo from "../assets/pokemonlogo.png";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";
function Navbar() {
  const location = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="flex flex-col lg:flex-row pt-10 sm:justify-center items-center lg:justify-between bg-gradient-to-r from-gray-superlight to-white lg:pl-20">
      <div>
        <a className="pt-10" href="/">
          <img className="w-[180px] mb-4" src={PokemonLogo} alt="" />
        </a>
      </div>
      <div className="flex flex-col lg:flex-col justify-center items-center lg:items-start lg:justify-between lg:mr-20">
        <p className="text-sm mb-4 text-gray-dark">
          Search for a Pokémon by name
        </p>
        {!location.pathname.includes("details") && <SearchBar />}
      </div>
    </div>
  );
}

export default Navbar;
