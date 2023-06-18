<script setup lang="ts">
import {Pokemon} from "@/interfaces/pokemon";

const props = defineProps<{
  pokemon: Pokemon;
}>();
</script>

<template>
  <div class="d-flex w-90 justify-center my-4 mx-6">
    <v-card
      id="pokemonCard"
      class="justify-center bg-white"
      variant="outlined"
      color="darkred"
      rounded="xl"
    >
      <v-img :src="pokemon.image" height="200px" :cover="true" />

      <v-card-title class="align-center">{{ pokemon?.name }}</v-card-title>

      <v-card-subtitle color="black" variant="text"> Descripción </v-card-subtitle>

      <v-card-actions>
        <v-btn color="darkred" variant="text"> Show more </v-btn>

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

<style scoped></style>
