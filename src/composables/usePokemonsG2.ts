import { computed } from 'vue';
import { storeToRefs } from 'pinia';

import { usePokemonStoreG2 } from '../store/pokemonStoreG2';
import getPokemonNamesG2 from '@/helpers/getPokemonsArrayG2';


export const usePokemonsG2 = () => {

    const pokemonStore = usePokemonStoreG2();
    const { pokemonArr } = storeToRefs( pokemonStore );

    const loadPokemonsArr = async() => {
        const pokemons = pokemonStore.loadPokemons(await getPokemonNamesG2());
    };

    /* const setPokemonName = async(n : number) => {
        const pokemonName = pokemonArr.value[n].name;
        return pokemonName;
    } */

    const setPokemonBodyShape = async() => {
        pokemonStore.setPokemon1( pokemonArr.value[ 1 ].id, pokemonArr.value[1].name  );
    };

    const setPokemonHindLegs = async() => {
        pokemonStore.setPokemon2( pokemonArr.value[ 2 ] );
    };

    const setPokemonFrontLegs = async() => {
        pokemonStore.setPokemon3( pokemonArr.value[ 3 ] );
    };

    const setPokemonTail = async() => {
        pokemonStore.setPokemon4( pokemonArr.value[ 4 ] );
    };

    const setPokemonEyes = async() => {
        pokemonStore.setPokemon5( pokemonArr.value[ 5 ] );
    };

    const setPokemonMouth = async() => {
        pokemonStore.setPokemon6( pokemonArr.value[ 6 ] );
    };

    const setPokemonEars = async() => {
        pokemonStore.setPokemon7( pokemonArr.value[ 7 ] );
    };

    const setPokemonDetails = async() => {
        pokemonStore.setPokemon8( pokemonArr.value[ 8 ] );
    };

    const setPokemonColors = async() => {
        pokemonStore.setPokemon9( pokemonArr.value[ 9 ] );
    };

    const newGame = () => {
        pokemonStore.clearState();
        loadPokemonsArr();
        setPokemonHeadShape();
        setPokemonBodyShape();
        setPokemonHindLegs();
        setPokemonFrontLegs();
        setPokemonTail();
        setPokemonEyes();
        setPokemonMouth();
        setPokemonEars();
        setPokemonDetails();
        setPokemonColors();
    }


    return {
        //! Properties
        pokemonArr,

        //! Computed
        imgSrcHeadShape: computed(() => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ pokemonArr.value[0] }.svg` ),
        imgSrcBodyShape: computed(() => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ pokemonArr.value[1] }.svg` ),
        imgSrcHindLegs: computed(() => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ pokemonArr.value[2] }.svg` ),
        imgSrcFrontLegs: computed(() => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ pokemonArr.value[3] }.svg` ),
        imgSrcTail: computed(() => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ pokemonArr.value[4] }.svg` ),
        imgSrcEyes: computed(() => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ pokemonArr.value[5] }.svg` ),
        imgSrcMouth: computed(() => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ pokemonArr.value[6] }.svg` ),
        imgSrcEars: computed(() => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ pokemonArr.value[7] }.svg` ),
        imgSrcDetails: computed(() => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ pokemonArr.value[8] }.svg` ),
        imgSrcColors: computed(() => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ pokemonArr.value[9] }.svg` ),

        //! Metodos
        setPokemonHeadShape,
        setPokemonBodyShape,
        setPokemonHindLegs,
        setPokemonFrontLegs,
        setPokemonTail,
        setPokemonEyes,
        setPokemonMouth,
        setPokemonEars,
        setPokemonDetails,
        setPokemonColors,
        newGame,
    }
}