import React from "react";
import { getPokemonApi } from "../utils/pokeApi.js";
import { useEffect, useState } from "react";

function EvolutionCard({ pokemonName, id }) {
  const [pokemon, setPokemon] = useState({});
  useEffect(() => {
    console.log("hi from evocard name: ", pokemonName);
    getPokemonApi(pokemonName).then((pokemon) => {
      console.log("evopokemon: ", pokemon);
      setPokemon({
        name:
          pokemon.data.forms[0].name.charAt(0).toUpperCase() +
          pokemon.data.forms[0].name.slice(1),
        id: pokemon.data.id,
        img: pokemon.data.sprites.other.dream_world.front_default,
        hp: pokemon.data.stats[0].base_stat,
        attack: pokemon.data.stats[1].base_stat,
        defense: pokemon.data.stats[2].base_stat,
        type:
          pokemon.data.types[0].type.name.charAt(0).toUpperCase() +
          pokemon.data.types[0].type.name.slice(1),
      });
    });
  }, []);
  return (
    <>
      {pokemon && (
        <div className="w-full h-full flex justify-center items-center">
          <div className="">
            <div className="flex mt-20">
              <div className="bg-gray-light border border-black rounded-t-xl rounded-b-sm shadow-md h-60 flex flex-col relative w-36 flex-shrink-0">
                <img
                  className="absolute w-[125px] justify-center pl-5 items-center top-0 transform -translate-y-1/2"
                  src={pokemon.img}
                  alt=""
                />

                <h1 className="text-md font-bold mt-20 ml-5">{pokemon.name}</h1>
                <p className="text-xs ml-5">Pokémon id #{pokemon.id}</p>

                <div className="flex flex-col">
                  <div className="flex flex-col justify-between ml-5 mt-2 text-sm">
                    <p className="mb-2">
                      <span className="font-bold">Type: </span>
                      <span className="">{pokemon.type}</span>
                    </p>
                    <p className="mb-2">
                      <span className="font-bold">HP: </span>
                      {pokemon.hp}
                    </p>
                    <p className="mb-2">
                      <span className="font-bold">Attack: </span>
                      {pokemon.attack}
                    </p>

                    <p className="mb-2">
                      <span className="font-bold">Defense: </span>
                      {pokemon.defense}
                    </p>
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

export default EvolutionCard;
