import { useLocation } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import {
  getPokemonApi,
  getPokemonSpecies,
  getPokemonEvolutions,
} from "../api/pokeApi.js";
import PokemonCard from "./PokemonCard.jsx";
import { PokeContext } from "../utils/pokeContext.js";
import EvolutionCard from "./EvolutionCard.jsx";

function Details() {
  function getSpecies(chain, ary) {
    if (chain.evolves_to.length === 0) {
      ary = [...ary, chain.species.name];
      return ary;
    } else {
      ary = [...ary, chain.species.name];
      return getSpecies(chain.evolves_to[0], ary);
    }
  }

  const location = useLocation();
  const { pokemon, setPokemon } = useContext(PokeContext);
  const [pokemonNames, setPokemonNames] = useState([]);

  useEffect(() => {
    const id = location.pathname.split("/")[2];

    getPokemonApi(id)
      .then((res) => {
        const speciesUrl = res.data.species.url;

        setPokemon({
          name:
            res.data.forms[0].name.charAt(0).toUpperCase() +
            res.data.forms[0].name.slice(1),
          id: res.data.id,
          img: res.data.sprites.other.dream_world.front_default,
          hp: res.data.stats[0].base_stat,
          attack: res.data.stats[1].base_stat,
          defense: res.data.stats[2].base_stat,
          type:
            res.data.types[0].type.name.charAt(0).toUpperCase() +
            res.data.types[0].type.name.slice(1),
        });
        return getPokemonSpecies(speciesUrl);
      })
      .then((res) => {
        const evolutionChainUrl = res.data.evolution_chain.url;

        return getPokemonEvolutions(evolutionChainUrl);
      })
      .then((evolutions) => {
        const pokemonNames = getSpecies(evolutions.data.chain, []);

        setPokemonNames(pokemonNames);
      });
  }, []);

  return (
    <div className="">
      <div className="w-full">
        <PokemonCard />
      </div>
      <div>
        <h1 className="flex justify-center items-center text-3xl text-gray-dark drop-shadow-md font-bold mt-10">
          {pokemon && pokemon.name}s Evolution chain
        </h1>
      </div>
      <div className="flex lg:flex-row flex-row">
        {pokemonNames.map((name, index) =>
          pokemon.name.toUpperCase() !== name.toUpperCase() ? (
            <EvolutionCard
              className="flex w-full"
              key={index}
              pokemonName={name}
            ></EvolutionCard>
          ) : null
        )}
      </div>
    </div>
  );
}

export default Details;
