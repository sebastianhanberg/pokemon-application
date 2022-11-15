import React from 'react'
import { useState } from 'react'
import axios from 'axios';

function PokemonCard() {

    const [pokemonName, setPokemonName] = useState('');
    const [pokemonChosen, setPokemonChosen] = useState(false);
    const [pokemon, setPokemon] = useState({
        name: "", 
        img: "", 
        hp: "",
        attack: "",
        defense: "",
        type: "",
        species: "",       
    });

    const searchPokemon = () => {

        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then((res) => {
                setPokemon({ 
                    name: pokemonName, 
                    img: res.data.sprites.front_default, 
                    hp: res.data.stats[0].base_stat,
                    attack: res.data.stats[1].base_stat,
                    defense: res.data.stats[2].base_stat,
                    type: res.data.types[0].type.name,
                });
                setPokemonChosen(true);
            })
    }
    return (
        <div className=''>
            <div className='w-full h-80 bg-pokemon-yellow flex flex-col justify-center items-center'>
            <h1 className="text-4xl m-5">Pokemon Stats</h1>
            <input
                className="border-none outline-none bg-white rounded-md p-2 m-2"
                type="text"
                onChange={(e) => { setPokemonName(e.target.value) }}
            />
            <button
                onClick={searchPokemon}
                className="text-md bg-pokemon-blue text-black rounded-lg p-3 m-5 cursor-pointer">Search Pokemon
            </button>
            </div>
            <div className='w-full h-full bg-pokemon-yellow flex flex-col justify-center items-center'>
                {!pokemonChosen ? 
                (<h1>Please choose a Pokémon</h1>) : 
                (
                <>
                <h1>{pokemon.name}</h1>
                <img className='w-[250px]' src={pokemon.img}/>
                <h3>Type: {pokemon.type}</h3>
                <h4>HP: {pokemon.hp}</h4>
                <h4>Attack: {pokemon.attack}</h4>
                <h4>Defense: {pokemon.defense}</h4>
                </>
                )}
            </div>

        </div>
    )
}

export default PokemonCard