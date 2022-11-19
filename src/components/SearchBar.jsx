import React from 'react'
import { PokeContext } from "../utils/pokeContext";
import { useContext, useState, useEffect } from 'react'

import {FiSearch} from 'react-icons/fi'

import {getPokemonApi} from './pokeApi.js';

function SearchBar() {

    const { pokemon, setPokemon } = useContext(PokeContext); 
    
    const randomId = Math.floor(Math.random() * 800) + 1;
    const [pokemonName, setPokemonName] = useState(randomId);

    
    
    
    
    const getPokemon = (pokeNameOrId) => {
        
        console.log('searchPokemon: ', pokeNameOrId);
        getPokemonApi(pokeNameOrId)
        .then((res) => {
            setPokemon({ 
                name: res.data.forms[0].name,
                id: res.data.id,
                img: res.data.sprites.other.dream_world.front_default, 
                hp: res.data.stats[0].base_stat,
                attack: res.data.stats[1].base_stat,
                defense: res.data.stats[2].base_stat,
                type: res.data.types[0].type.name,
            });
        })
    }
    useEffect(() => {
        getPokemon(randomId);
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        getPokemon(pokemonName); 
        e.target.reset(); 
    }

    const handleChange = (e) => {
        setPokemonName(e.target.value);
    }
   
  return (
    <div>
    {/* SEARCHBAR */}
    <div className='w-[240px] flex flex-col border bg-light-yellow border-black border-opacity-40 rounded-lg p-2 ml-5'>
        <form className="" onSubmit={handleSubmit}>
        
        <div className="flex flex-row justify-start items-center">
                
        <span><FiSearch className='opacity-90 w-5 h-5 mr-2'/></span>
        <input
            className="text-base border-none outline-none bg-light-yellow opacity-90 placeholder-black"
            type="search"
            id='search-field'
            placeholder='Search for a pokemon..'
            onChange={handleChange}
            />
            </div>
        </form>
    </div>
</div>
  )
}

export default SearchBar