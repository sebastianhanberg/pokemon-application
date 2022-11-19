import './App.css';
import PokemonCard from './components/PokemonCard';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import { useState } from 'react'
import { PokeContext } from "./utils/pokeContext";
import Details from './components/Details';



function App() {
  
  const [pokemon, setPokemon] = useState(null);
  

  return (
    <PokeContext.Provider value={{pokemon, setPokemon}}>
    <div className="App">      
      <Navbar />
        <Routes>
          <Route path="/" element={<PokemonCard/>}/>
          <Route path="/details/:id" element={<Details/>}/> 
        </Routes>      
    </div>
    </PokeContext.Provider>
  );
}

export default App;
