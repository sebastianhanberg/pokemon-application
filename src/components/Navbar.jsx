import React from "react";
import PokemonLogo from "../assets/pokemonlogo.png";
import { useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";
function Navbar() {
  const location = useLocation();

  return (
    <div className="flex flex-col lg:flex-row pt-10 sm:justify-center items-center lg:justify-between lg:pl-20">
      <div>
        <a className="pt-10" href="/">
          <img className="w-[180px] mb-4" src={PokemonLogo} alt="" />
        </a>
      </div>
      <div className="flex flex-col lg:flex-col justify-center items-center lg:items-start lg:justify-between lg:mr-20">
        {!location.pathname.includes("details") && <SearchBar />}
      </div>
    </div>
  );
}

export default Navbar;
