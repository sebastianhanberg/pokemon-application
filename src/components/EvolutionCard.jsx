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
  return <div>{pokemon.name}</div>;
}

export default EvolutionCard;
