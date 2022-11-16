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
                    img: res.data.sprites.other.dream_world.front_default, 
                    hp: res.data.stats[0].base_stat,
                    attack: res.data.stats[1].base_stat,
                    defense: res.data.stats[2].base_stat,
                    type: res.data.types[0].type.name,
                });
                setPokemonChosen(true);
            })
    }


    const handleChange = (e) => {
        setPokemonName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        searchPokemon(); 
    }
   

    return (

    <div className=''>

        {/* SEARCHBAR */}
        <div className='w-full h-80 bg-pokemon-yellow flex flex-col justify-center items-center'>
            <h1 className="text-4xl m-5">Pokemon Stats</h1>
            <form onSubmit={handleSubmit}>
            <input
                className="text-sm border-none outline-none bg-white rounded-md p-2 m-2"
                type="search"
                placeholder='Search for a pokemon..'
                onChange={handleChange}
                />
            </form>
        </div>

       

        {/* POKEMON CARD */}
        <div className='w-full h-full bg-pokemon-yellow flex flex-col justify-center items-center'>
                {!pokemonChosen ? 
                (<h1>Please choose a Pokémon</h1>) : 
                (
                <>
                <h1 className='text-3xl font-bold'>{pokemon.name}</h1>
                <img className='w-[150px] m-10' src={pokemon.img} alt=""/>
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