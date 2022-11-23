import React from "react";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { PokeContext } from "../utils/pokeContext";
import { Link } from "react-router-dom";

function PokemonCard() {
  const { pokemon } = useContext(PokeContext);

  const location = useLocation();
  return (
    <>
      {pokemon && (
        <div className="bg-gradient-to-r from-gray-superlight to-white">
          <div className="w-full h-full flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center mt-48">
              <div className="bg-gradient-to-r from-gray-superlight to-light-yellow border border-black rounded-xl shadow-md h-96 flex flex-col relative w-72 flex-shrink-0">
                <img
                  className="absolute w-[250px] justify-center pl-10 items-center top-0 transform -translate-y-1/2"
                  src={pokemon.img}
                  alt=""
                />
                <div className="flex justify-center items center">
                  <h1 className="text-3xl font-bold mt-48">{pokemon.name}</h1>
                </div>
                <div className="flex flex-row">
                  <div className="flex flex-col justify-between p-5 text-sm">
                    <p className="border rounded-lg p-1 bg-gray-light mb-2">
                      <span className="font-bold">Type: </span> {pokemon.type}
                    </p>
                    <p className="border rounded-lg p-1 bg-gray-light">
                      <span className="font-bold">Attack: </span>
                      {pokemon.attack}
                    </p>
                  </div>
                  <div className="flex flex-col justify-between p-5 text-sm">
                    <p className="border rounded-lg p-1 bg-gray-light">
                      <span className="font-bold">HP: </span>
                      {pokemon.hp}
                    </p>
                    <p className="border rounded-lg p-1 bg-gray-light">
                      <span className="font-bold">Defense: </span>
                      {pokemon.defense}
                    </p>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  {!location.pathname.includes("details") && (
                    <Link
                      className="text-lg font-bold"
                      to={`/details/${pokemon.id}`}
                    >
                      Go to Details
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PokemonCard;
