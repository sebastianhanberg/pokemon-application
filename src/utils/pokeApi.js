import axios from 'axios'

export function getPokemonApi(pokeNameOrId) {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeNameOrId}`);
}

export function getPokemonSpecies(url) {
    return axios.get(url);
}

export function getPokemonEvolutions(url) {
    return axios.get(url);
}
// export default function pokeApi() {
//     const getPokemon = (pokeNameOrId) => {
        
//         console.log('searchPokemon: ', pokeNameOrId);
//         axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeNameOrId}`)
        
//     }
//   return (
//     <div>pokeApi</div>
//   )
// }
