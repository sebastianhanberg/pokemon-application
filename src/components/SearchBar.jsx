import React from "react";
import { PokeContext } from "../utils/pokeContext";
import { useContext, useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { getPokemonApi } from "../api/pokeApi.js";

function SearchBar() {
  const { setPokemon } = useContext(PokeContext);

  const randomId = Math.floor(Math.random() * 800) + 1;
  const [pokemonName, setPokemonName] = useState(randomId);
  const [error, setError] = useState(null);

  const getPokemon = (pokeNameOrId) => {
    getPokemonApi(pokeNameOrId)
      .then((res) => {
        if (res.ok) {
          throw Error("Can't find any Pokémon by that name.. Try again.");
        }
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
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  useEffect(() => {
    getPokemon(randomId);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon(pokemonName);
    e.target.reset();
  };

  const handleChange = (e) => {
    setPokemonName(e.target.value.toLowerCase());
  };

  return (
    <div>
      <div className="w-[300px] flex flex-col borderborder-none bg-gray-light outline-none rounded-md p-2 mb-4">
        <form className="" onSubmit={handleSubmit}>
          <div className="flex flex-row justify-start items-center">
            <span>
              <FiSearch className="opacity-90 w-5 h-5 mr-2 text-gray-medium" />
            </span>
            <input
              className="w-full text-base border-none outline-none placeholder-gray-medium bg-gray-light"
              type="search"
              id="search-field"
              placeholder="Search for a Pokémon by name.."
              onChange={handleChange}
            />
          </div>
        </form>
      </div>

      {error && (
        <div
          className="text-sm text-left text-gray-dark bg-red-400 bg-opacity-20 border border-red-400 h-12 flex items-center p-4 rounded-md mb-30"
          role="alert"
        >
          Can't find any Pokémon by that name.. Try again.
        </div>
      )}
    </div>
  );
}

export default SearchBar;
