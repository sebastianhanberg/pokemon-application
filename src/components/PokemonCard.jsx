import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import {FiSearch} from 'react-icons/fi'


function PokemonCard() {
    
    const random = Math.floor(Math.random() * 151 + 1);

    const [loading, setLoading] = useState(true);
    const [randomPokemon, setRandomPokemon] = useState(`https://pokeapi.co/api/v2/pokemon/${random}`)

    const getRandomPokemon = async () => {
        await axios.get(randomPokemon)
        .then((res) => {
            setPokemon({ 
                name: res.data.name, 
                img: res.data.sprites.other.dream_world.front_default, 
                hp: res.data.stats[0].base_stat,
                attack: res.data.stats[1].base_stat,
                defense: res.data.stats[2].base_stat,
                type: res.data.types[0].type.name,
            });
            setLoading(true)
            setPokemonChosen(true);
           
        })
    }

    useEffect(() => {
        getRandomPokemon();
    }, [randomPokemon])

    const [pokemonName, setPokemonName] = useState()
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
        setPokemonName(e.target.value);

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        searchPokemon(); 
        e.target.reset(); 
    }
   

    return (

    <div className='bg-pokemon-yellow'>
        {/* SEARCHBAR */}
        <div className='w-[240px] flex flex-col border border-black border-opacity-40 rounded-lg p-2 ml-5'>
            <form className="" onSubmit={handleSubmit}>
            
            <div className="flex flex-row justify-start items-center">
                    
            <span><FiSearch className='opacity-80 w-5 h-5 mr-2'/></span>
            <input
                className="text-base border-none outline-none bg-pokemon-yellow opacity-90 placeholder-black"
                type="search"
                id='search-field'
                placeholder='Search for a pokemon..'
                onChange={handleChange}
                />
                </div>
            </form>
        </div>


       

        {/* POKEMON CARD */}
        <div className='w-full h-full flex flex-col justify-center items-center'>
                {!pokemonChosen ? 
                (<>
                    <img className='w-[150px] m-10' src={randomPokemon.img} alt=""/>
                    <h1 className='text-2xl font-bold m-5'>{randomPokemon.name}</h1>
                    <h3>Type: {randomPokemon.type}</h3>
                    <h4>HP: {randomPokemon.hp}</h4>
                    <h4>Attack: {randomPokemon.attack}</h4>
                    <h4>Defense: {randomPokemon.defense}</h4>
                    </>) : 
                (
                <>
                <img className='w-[150px] m-10' src={pokemon.img} alt=""/>
                <h1 className='text-3xl font-bold m-5'>{pokemon.name}</h1>
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