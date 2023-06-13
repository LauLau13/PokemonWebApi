<script setup lang="ts">
import { usePokemonsG2 } from '../composables/usePokemonsG2';

import { defineComponent, ref } from 'vue';

import { useRoute } from 'vue-router';

const route = useRoute();

import { storeToRefs } from 'pinia';

import { usePokemonStoreG2 } from './../store/pokemonStoreG2';

import { Pokemon } from '../interfaces/pokemon';
import { text } from 'stream/consumers';

const { 
    pokemonArr: pokemons, 
    imgSrcHeadShape, 
    imgSrcBodyShape, 
    imgSrcHindLegs, 
    imgSrcFrontLegs, 
    imgSrcTail, 
    imgSrcEyes, 
    imgSrcMouth, 
    imgSrcEars, 
    imgSrcDetails, 
    imgSrcColors, 
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
    newGame 
} = usePokemonsG2();
    
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

</script>


<template>
    <h1 class="ma-2 text-center" v-if="!pokemons">Please wait...</h1>
    <div class="d-flex justify-center my-6">
        <v-card id="pokemonCard" class="justify-center" 
        variant="outlined"
        color="darkred"
        rounded="xl"
        >
            <div id="cardTitle">
                <v-card-title class="text-h4 px-8 py-8 mb-6" >
                    CREATE YOUR OWN POKEMON
                </v-card-title>
            </div>
            <div class="d-flex justify-center flex-column mb-6 " id="pokemonProperty">
                <v-btn class="d-flex justify-center mb-6 mx-4" @click="setPokemonHeadShape()">Head shape</v-btn>
                <div class="d-flex justify-center mx-4" id="pokemon-container" >
                    <img 
                    :src="imgSrcHeadShape" 
                    alt="pokemon">
                </div>
                <p class="d-flex justify-center mb-6 mx-4" >{pokemon.name}</p>
            </div>
            <div class="mx-5 my-5 ">
                <PokemonImage></PokemonImage>
            </div>
            <div class="my-5">
                <PokemonOptions></PokemonOptions>
            </div>
            <v-card-actions class="d-flex flex-no-wrap justify-center align-center flex-column my-4 mx-auto">
                <div class="d-flex align-center flex-column mx-auto">
                    <v-btn class="my-6" @click="newGame"
                    variant="outlined"
                    color="blue"
                    >
                        New Pokemon
                    </v-btn>
                </div>
            </v-card-actions>
        </v-card>
    </div>
    
</template>

<style scoped>
#cardTitle {
    background-color: #CC0000;
    color: white;
    font-weight: bold;
}
#cardTitle .v-card-title{
    color: white;
    font-weight: bold;
}
#pokemon-container {
    height: 100px;
}
img {
    height: 100px;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
}
</style>