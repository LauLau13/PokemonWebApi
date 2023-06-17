import { defineStore } from "pinia";
import pokemonApi from "../api/pokemonApi";
import { Pokemon } from "../interfaces/pokemon";

interface PokemonState {
  pokemonArr: Pokemon[];
  pokemon: Pokemon | undefined;
}

export const usePokedexStore = defineStore("pokemon", {
  state: (): PokemonState => ({
    pokemonArr: [],
    pokemon: undefined,
  }),
  actions: {
    loadPokemons(pokemons: Pokemon[]) {
      this.pokemonArr = pokemons;
    },
    setPokemonInArray(pokemon: Pokemon) {
      this.pokemon = pokemon;
    },
    clearState() {
      this.pokemonArr = [];
      this.pokemon = undefined;
    },
  },
});
