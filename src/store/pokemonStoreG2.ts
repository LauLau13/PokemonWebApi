import { defineStore } from 'pinia';
import { Pokemon } from '../interfaces/pokemon';

interface PokemonState {
    head: Pokemon | undefined,
    body: Pokemon | undefined,
    hindLegs: Pokemon | undefined,
    frontLegs: Pokemon | undefined,
    tail: Pokemon | undefined,
    eyes: Pokemon | undefined,
    mouth: Pokemon | undefined,
    ears: Pokemon | undefined,
    details: Pokemon | undefined,
    color: Pokemon | undefined,
}

export const usePokemonStoreG2 = defineStore('pokemon', {

    state: (): PokemonState => ({
        head: undefined,
        body: undefined,
        hindLegs: undefined,
        frontLegs: undefined,
        tail: undefined,
        eyes: undefined,
        mouth: undefined,
        ears: undefined,
        details: undefined,
        color: undefined,
    }),
    actions: {
        loadPokemons( pokemons: Pokemon[] ) {
            this.head = pokemons[0];
            this.body = pokemons[1];
            this.hindLegs = pokemons[2];
            this.frontLegs = pokemons[3];
            this.tail = pokemons[4];
            this.eyes = pokemons[5];
            this.mouth = pokemons[6];
            this.ears = pokemons[7];
            this.details = pokemons[8];
            this.color = pokemons[9];
        },
        clearState() {
            head: undefined;
            body: undefined;
            hindLegs: undefined;
            frontLegs: undefined;
            tail: undefined;
            eyes: undefined;
            mouth: undefined;
            ears: undefined;
            details: undefined;
            color: undefined;
        }
    }
})