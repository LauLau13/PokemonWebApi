<script setup lang="ts">
import {Pokemon} from "@/interfaces/pokemon";

const props = defineProps<{
  pokemon: Pokemon;
}>();
</script>

<template>
  <div class="d-flex w-90 justify-center my-2 mx-2">
    <v-card
      id="pokemonCard"
      class="justify-center bg-white"
      variant="outlined"
      color="darkred"
      rounded="xl"
    >
      <v-img :src="pokemon.image" height="200px" :cover="true" class="px-6 pt-4" />
      <v-card-title class="text-align-center pl-8">{{ pokemon?.id }}. {{ pokemon?.name }}</v-card-title>
      <v-expand-transition>
      <div v-if="expand">
        <div class="py-2">
          <v-card-text class="px-6">Descripción</v-card-text>
        </div>
      </div>
    </v-expand-transition>
      <v-card-actions class="bg-darkred pl-6 pt-2">
        <v-btn color="white" variant="text">Show more</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<style scoped></style>
