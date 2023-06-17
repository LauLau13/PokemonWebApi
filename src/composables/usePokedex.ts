import { computed } from 'vue';
import { storeToRefs } from 'pinia';

import getPokemonById from '../helpers/getPokemonById';
import { Pokemon } from '@/interfaces/pokemon';
import { usePokedexStore } from '@/store/pokedexStore';

export const usePokedex = () => {

    const pokemonStore = usePokedexStore();
    const { pokemonArr, pokemon } = storeToRefs( pokemonStore );


    const loadPokemons = async (num: number) => {
        var i :number;
        for(i=num; i<=(num+20); i++){
            const poke = await getPokemonById.getPokemonById(i);
            pokemonStore.setPokemonInArray(poke);
        }
    }

    const setPokemonInArray = (pokemon : Pokemon) => {
        pokemonArr.value.push(pokemon);
    }

    const newGame = () => {
        pokemonStore.clearState();
    }

    return {
        //! Properties
        pokemonArr,
        pokemon,

        //! Computed
        //! Metodos
        loadPokemons,
        setPokemonInArray,
        newGame,
    }
}