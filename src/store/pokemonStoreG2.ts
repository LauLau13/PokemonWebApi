import { defineStore } from 'pinia';
import { Pokemon } from '../interfaces/pokemon';

interface PokemonState {
    pokemonArr:  Pokemon[];
}

export const usePokemonStoreG2 = defineStore('pokemon', {

    state: (): PokemonState => ({
        pokemonArr: [],
    }),
    actions: {
        loadPokemons( pokemons: Pokemon[] ) {
            this.pokemonArr = pokemons;
        },
        clearState() {
            this.pokemonArr = [];
        }
    }
})