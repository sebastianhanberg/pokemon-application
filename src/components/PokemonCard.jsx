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


    
        {/* POKEMON CARD */}
        <div className='w-full h-full flex flex-col justify-center items-center'>
                {!pokemonChosen ? 
                (<>
                    <img className='w-[150px] m-10' src={randomPokemon.img} alt=""/>
                    <h1 className='text-2xl font-bold m-5'>{randomPokemon.name}</h1>
                    <p>Type: {randomPokemon.type}</p>
                    <p>HP: {randomPokemon.hp}</p>
                    <p>Attack: {randomPokemon.attack}</p>
                    <p>Defense: {randomPokemon.defense}</p>
                    </>) : 
                (
                <>
                <div className='flex flex-col justify-center items-center mt-48'>     
                    <div className='bg-gradient-to-r from-white to-light-yellow rounded-xl shadow-md h-96 flex flex-col relative w-72 flex-shrink-0'>            
                            <img className='absolute w-[250px] justify-center pl-10 items-center top-0 transform -translate-y-1/2' src={pokemon.img} alt=""/>
                        <div className='flex justify-center items center'>
                            <h1 className='text-3xl font-bold mt-40'>{pokemon.name}</h1>
                        </div>
                <div className='flex flex-row'>
                        <div className="flex flex-col justify-between p-5 text-sm">
                            <p className='border rounded-lg p-1 bg-gray-light mb-2'><span className='font-bold'>Type: </span> {pokemon.type}</p>
                            <p className='border rounded-lg p-1 bg-gray-light'><span className='font-bold'>Attack: </span>{pokemon.attack}</p>
                        </div>
                        <div className="flex flex-col justify-between p-5 text-sm">
                            <p className='border rounded-lg p-1 bg-gray-light'><span className='font-bold'>HP: </span>{pokemon.hp}</p>
                            <p className='border rounded-lg p-1 bg-gray-light'><span className='font-bold'>Defense: </span>{pokemon.defense}</p>
                        </div>
                    </div>
                </div>   
                </div>
                </>
                )}
        </div>

    </div>
    )
}

export default PokemonCard