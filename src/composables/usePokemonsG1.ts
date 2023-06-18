import {computed} from 'vue';
import {storeToRefs} from 'pinia';
import getPokemonOptions from '../helpers/getPokemonOptionsG1';
import {usePokemonStoreG1} from '@/store/pokemonStoreG1';


export const usePokemonsG1 = () => {

  const pokemonStore = usePokemonStoreG1();
  const {pokemonArr, pokemon, showPokemon, showAnswer, message} = storeToRefs(pokemonStore);


  const mixPokemonArray = async () => {
    pokemonStore.loadPokemons(await getPokemonOptions());

    const randomInt = Math.floor(Math.random() * 4)
    pokemonStore.setHiddenPokemon(pokemonArr.value[randomInt]);
  };

  const checkAnswer = (selectedId: number) => {
    if (!pokemon.value) return;

    if (selectedId === pokemon.value.id) {
      pokemonStore.showPokemonAndAnswer(`Correct! It's ${pokemon.value.name}`);
    } else {
      pokemonStore.showPokemonAndAnswer(`Incorrect, It's ${pokemon.value.name}`);
    }
  };

  const newGame = async () => {
    pokemonStore.clearState();
    await mixPokemonArray();
  }


  return {
    //! Properties
    message,
    pokemon,
    pokemonArr,
    showAnswer,
    showPokemon,

    //! Computed
    imgSrc: computed(() => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.value?.id}.svg`),

    //! Metodos
    checkAnswer,
    mixPokemonArray,
    newGame,
  }
}