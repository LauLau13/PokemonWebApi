<script setup lang="ts">
import PokeCard from "@/components/PokeCard.vue";
import {usePokedex} from "@/composables/usePokedex";
import {onBeforeMount, ref} from "vue";
import {useRoute} from "vue-router";

const route = useRoute();

const { pokemonArr, loadPokemons } = usePokedex();

const loading = ref(false);
const firstPokemon = 1;

onBeforeMount(async () => {
  loading.value = true;
  await loadPokemons(firstPokemon);
  loading.value = false;
});

async function loadPokemonsNext(){
  const p = firstPokemon + 19;
  await loadPokemons(p);
  console.log(p);
}

</script>

<template>
  <div class="d-flex flex-column w-90 justify-center ma-4">
    <div>
      <v-text-field
        variant="underlined"
        label="Search pokemon"
        prepend-icon="mdi-magnify"
      ></v-text-field>
    </div>
    <!-- <span v-if="loading" class="justify-center">Please wait...</span> -->
    <div
      
      class="d-flex flex-wrap justify-center w-90"
      id="card-content"
    >
      <v-row class="pa-2">
        <v-col
          v-for="(p, index) in pokemonArr"
          :key="index"
          cols="12"
          md="3"
          sm="6"
        >
          <v-skeleton-loader
            :loading="loading"
            class="mx-auto"
            max-width="300"
            transition="scale-transition"
            type="card"
          >
            <PokeCard
              :pokemon="p"
            />
          </v-skeleton-loader>
        </v-col>
      </v-row>
    </div>
    <div class="d-flex flex-row w-90 justify-center ma-4">
      <v-btn variant="tonal" class="w-25 mx-2" size="small" color="white">Previous page</v-btn>
      <v-btn variant="tonal" class="w-25 mx-2" size="small" color="white" @onClick="loadPokemonsNext()">Next page</v-btn>
    </div>
  </div>
</template>

<style scoped></style>
