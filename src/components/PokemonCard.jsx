import React from 'react'
import { useState } from 'react'
import axios from 'axios';

function PokemonCard() {

    const [pokemon, setPokemon] = useState('');

    const searchPokemon = () => {

        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            .then((res) => {
                console.log(res);
            })
    }
    return (
        <div className="w-full h-80 bg-pokemon-yellow flex flex-col justify-center items-center">
            <h1 className="text-4xl m-5">Pokemon Stats</h1>
            <input className="border-none outline-none rounded-md p-2 m-2" type="text" onChange={(e) => { setPokemon(e.target.value) }} />
            <button onClick={searchPokemon} className="text-md bg-pokemon-blue text-black rounded-lg p-3 m-5">Search Pokemon</button>
        </div>
    )
}

export default PokemonCard