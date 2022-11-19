import React from 'react'
import pokeball from '../assets/pokeball.png'
import PokemonLogo from '../assets/pokemonlogo.png'
import { useState } from "react"; 
import { useLocation } from 'react-router-dom'
import SearchBar from './SearchBar';
function Navbar() {
    const location = useLocation(); 
    const [isNavOpen, setIsNavOpen] = useState(false); 
  return (
    
        <div className="flex items-center bg-pokemon-yellow justify-between py-8">
      <a href="/">
        <img className='w-[120px] ml-5' src={PokemonLogo} alt="" />
      </a>
      {!location.pathname.includes('details') && <SearchBar /> }
      
    </div>
    
  )
}

export default Navbar