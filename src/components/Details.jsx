
import { useLocation } from "react-router-dom"
import { useEffect, useContext} from 'react'
import {getPokemonApi, getPokemonSpecies , getPokemonEvolutions} from './pokeApi.js';
import PokemonCard from "./PokemonCard.jsx";
import { PokeContext } from "../utils/pokeContext.js";



function Details() {

    
    
    const location = useLocation(); 
    const { pokemon, setPokemon } = useContext(PokeContext); 
    useEffect(() => {
      console.log('pokemon: ', pokemon);
    const id = location.pathname.split('/')[2]; // /details/1337
    console.log('id: ', id);
    getPokemonApi(id).then(res => {
      console.log('getPokemonApi res: ', res);
      const speciesUrl = res.data.species.url;
      console.log('speciesUrl: ', speciesUrl);
      setPokemon({ 
        name: res.data.forms[0].name,
        id: res.data.id,
        img: res.data.sprites.other.dream_world.front_default, 
        hp: res.data.stats[0].base_stat,
        attack: res.data.stats[1].base_stat,
        defense: res.data.stats[2].base_stat,
        type: res.data.types[0].type.name,
    });
    return getPokemonSpecies(speciesUrl);
    }).then(res => {
      console.log('getPokemonSpecies res: ', res);
      const evolutionChainUrl = res.data.evolution_chain.url;
      console.log('evolutionChainUrl: ', evolutionChainUrl);
      return getPokemonEvolutions(evolutionChainUrl);
    }).then(evolutions => {
      console.log('getPokemonEvolutions evolutions', evolutions);
    });
  }, [])
  return (
    <PokemonCard 
    
    ></PokemonCard>
  )
}

export default Details