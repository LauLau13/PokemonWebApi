import { defineStore } from "pinia";
import pokemonApi from "../api/pokemonApi";
import { Pokemon } from "../interfaces/pokemon";

interface PokemonState {
  pokemonArr: Pokemon[];
}

export const usePokedexStore = defineStore("pokemon", {
  state: (): PokemonState => ({
    pokemonArr: [],
  }),
  actions: {
    loadPokemons(pokemons: Pokemon[]) {
      this.pokemonArr = pokemons;
    },
    clearState() {
      this.pokemonArr = [];
    },
  },
});
