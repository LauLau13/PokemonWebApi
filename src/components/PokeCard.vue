<script setup lang="ts">
import { usePokedex } from '../composables/usePokedex';

const { pokemonArr, pokemon } = usePokedex();

</script>

<template>
    <!-- <div class="options-container">
      <v-list class="px-8">
        <v-list-item 
            class="my-2 text-center"
            v-for="pokemon in pokemonArr" 
            :key="pokemon.id"
            variant="tonal"
            rounded="xl"
            
            @click="checkAnswer( pokemon.id )">
            {{ pokemon.name }}
        </v-list-item >
    </v-list>
    </div> -->
    <div class="d-flex w-90 justify-center my-4 mx-6">
      <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
      cover
    ></v-img>

    <v-card-title>
      Top western road trips
    </v-card-title>

    <v-card-subtitle>
      1,000 miles of wonder
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange-lighten-2"
        variant="text"
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <!-- <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
      ></v-btn> -->
    </v-card-actions>

    <v-expand-transition>
      <!-- <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div> -->
    </v-expand-transition>
    </v-card>
    </div>
  </template>

<style scoped>
</style>