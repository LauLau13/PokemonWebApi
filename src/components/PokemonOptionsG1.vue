<script setup lang="ts">
import {usePokemonsG1} from '@/composables/usePokemonsG1';

const { pokemonArr: pokemons, checkAnswer } = usePokemonsG1();

</script>

<template>
    <div class="options-container">
      <v-list class="px-8">
        <v-list-item 
            class="my-2 text-center"
            v-for="pokemon in pokemons" 
            :key="pokemon.id"
            variant="tonal"
            rounded="xl"
            
            @click="checkAnswer( pokemon.id )">
            {{ pokemon.name }}
        </v-list-item >
    </v-list>
    </div>
  </template>

<style scoped>
</style>