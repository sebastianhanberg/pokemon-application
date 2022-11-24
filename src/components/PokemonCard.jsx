import React from "react";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { PokeContext } from "../utils/pokeContext";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

function PokemonCard() {
  const { pokemon } = useContext(PokeContext);

  const location = useLocation();
  return (
    <>
      {pokemon && (
        <div className="">
          <div className="w-full h-full flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center mt-36">
              <div className="bg-gray-light border border-black rounded-t-xl rounded-b-sm shadow-md h-96 flex flex-col relative w-72 flex-shrink-0">
                <img
                  className="absolute w-[250px] justify-center pl-10 items-center top-0 transform -translate-y-1/2"
                  src={pokemon.img}
                  alt=""
                />

                <h1 className="text-3xl font-bold mt-36 ml-5">
                  {pokemon.name}
                </h1>
                <p className="text-sm ml-5">Pokémon id #{pokemon.id}</p>

                <div className=" flex flex-col">
                  <div className="flex flex-col justify-between p-5 text-sm">
                    <p className="mb-2">
                      <span className="font-bold">Type: </span> {pokemon.type}
                    </p>
                    <p className="mb-2">
                      <span className="font-bold">Attack: </span>
                      {pokemon.attack}
                    </p>

                    <p className="mb-2">
                      <span className="font-bold">HP: </span>
                      {pokemon.hp}
                    </p>
                    <p className="mb-2">
                      <span className="font-bold">Defense: </span>
                      {pokemon.defense}
                    </p>
                    <div className="flex flex-row justify-center items-center">
                      {!location.pathname.includes("details") && (
                        <Link
                          className="text-lg text-gray-dark font-bold flex flex-row"
                          to={`/details/${pokemon.id}`}
                        >
                          <p className="">Go to Details</p>

                          <GoArrowRight className="mt-1 pt-1 ml-2" />
                        </Link>
                      )}
                    </div>
                  </div>
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
