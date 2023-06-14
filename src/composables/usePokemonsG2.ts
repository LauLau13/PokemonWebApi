import { computed } from 'vue';
import { storeToRefs } from 'pinia';

import { usePokemonStoreG2 } from '../store/pokemonStoreG2';
import getPokemonNamesImg from '@/helpers/getPokemonsArrayG2';
import { Pokemon } from "@/interfaces/pokemon";


export const usePokemonsG2 = () => {

    const pokemonStore = usePokemonStoreG2();
    const { head, body, hindLegs, frontLegs, tail, eyes, mouth, ears, details, color } = storeToRefs(pokemonStore);

    async function buildRandomPokemonsG2(){
        const head = await getPokemonNamesImg.getRandomPokemon();
        const body = await getPokemonNamesImg.getRandomPokemon();
        const hindLegs = await getPokemonNamesImg.getRandomPokemon();
        const frontLegs = await getPokemonNamesImg.getRandomPokemon();
        const tail = await getPokemonNamesImg.getRandomPokemon();
        const eyes = await getPokemonNamesImg.getRandomPokemon();
        const mouth = await getPokemonNamesImg.getRandomPokemon();
        const ears = await getPokemonNamesImg.getRandomPokemon();
        const details = await getPokemonNamesImg.getRandomPokemon();
        const color = await getPokemonNamesImg.getRandomPokemon();
        
        const randomPokemon = [head, body, hindLegs, frontLegs, tail, eyes, mouth, ears, details, color];
        for (const item of randomPokemon) {
            const index = randomPokemon.indexOf(item);
            if (item == randomPokemon[index + 1]) {
                randomPokemon[index +1] = await getPokemonNamesImg.getRandomPokemon();
            }
        }
        pokemonStore.loadPokemons(randomPokemon as Pokemon[]);  
    }

    return {
        //! Properties
        head,
        body,
        hindLegs,
        frontLegs,
        tail,
        eyes,
        mouth,
        ears,
        details,
        color,
        //! Computed
        //! Metodos
        buildRandomPokemonsG2
      }
}