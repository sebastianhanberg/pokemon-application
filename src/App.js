import './App.css';
import PokemonCard from './components/PokemonCard';
import { useState } from "react"; // import state
import pokeball from './assets/pokeball.png'
import PokemonLogo from './assets/pokemonlogo.png'

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
  return (
    <div className="App">
      <div className="flex items-center bg-pokemon-yellow justify-between py-8">
      <a href="/">
        <img className='w-[120px] ml-5' src={PokemonLogo} alt="" />
      </a>
      <nav>
        <section className="bg-pokemon-yellow flex lg:hidden">
          <div
            className="bg-pokemon-yellow"
            onClick={() => setIsNavOpen((prev) => !prev)} 
          >
            {/* <span className="block h-0.5 w-8 mr-5 animate-pulse bg-black"></span>
            <span className="block h-0.5 w-8 mr-5 animate-pulse bg-black"></span>
            <span className="block h-0.5 w-8 mr-5 animate-pulse bg-black"></span> */}
            <img className='w-[55px] mr-5' src={pokeball} alt=""/>
            <p className='text-sm ml-2'>Menu</p>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="bg-pokemon-yellow absolute top-0 right-0 px-5 py-12"
              onClick={() => setIsNavOpen(false)} 
            >
              <svg
                className="h-8 w-8 text-black"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>

            {/* MOBILE NAV MENU */}
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-black my-8 uppercase">
                <a href="/">Home</a>
              </li>
              <li className="border-b border-black my-8 uppercase">
                <a href="/portfolio">My favourite pokémons</a>
              </li>
            </ul>
          </div>
        </section>  

        {/* DESKTOP NAV MENU */}
        <ul className="hidden space-x-8 lg:flex mr-10">
          <li className="hover:text-gray-dark cursor-pointer">
                <a href="/">Home</a>
            </li>
            <li className="hover:text-gray-dark cursor-pointer">
                <a href="/portfolio">My favourite pokémons</a>
              </li>
          
        </ul>  
      </nav>
    </div>
    <PokemonCard />
    </div>
  );
}

export default App;
