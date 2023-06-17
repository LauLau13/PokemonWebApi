import pokemonApi from '../api/pokemonApi'
import { Pokemon } from '../interfaces/pokemon';

async function getPokemonById( id : number): Promise<Pokemon> {
    const res = await pokemonApi.get(`/${id}`);
    return {
        name: res.data.name, 
        id: res.data.id, 
        image: res.data.sprites.front_default, } as Pokemon;
  }

export default {
    getPokemonById,
};