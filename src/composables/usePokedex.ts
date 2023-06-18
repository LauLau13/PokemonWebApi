import { computed } from 'vue';
import { storeToRefs } from 'pinia';

import getPokemonById from '../helpers/getPokemonById';
import { Pokemon } from '@/interfaces/pokemon';
import { usePokedexStore } from '@/store/pokedexStore';

export const usePokedex = () => {

    const pokemonStore = usePokedexStore();
    const { pokemonArr } = storeToRefs( pokemonStore );


    const loadPokemons = async (initialNumber: number) => {
        var i :number;
        for(i=initialNumber; i<=(initialNumber+20); i++){
            const poke = await getPokemonById.getPokemonById(i);
            await setPokemonInArray(poke);
            console.log(poke);
            console.log(pokemonArr);
        }
    }

    async function setPokemonInArray(pokemon : Pokemon) {
        pokemonArr.value.push(pokemon);
    }

    const newGame = () => {
        pokemonStore.clearState();
    }

    return {
        //! Properties
        pokemonArr,

        //! Computed
        
        //! Metodos
        loadPokemons,
        setPokemonInArray,
        newGame,
    }
}