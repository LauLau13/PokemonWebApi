<script setup lang="ts">
import {usePokemonsG1} from '@/composables/usePokemonsG1';
import PokemonOptionsG1 from '../components/PokemonOptionsG1.vue';
import PokemonImageG1 from '../components/PokemonImageG1.vue';
import {onBeforeMount} from "vue";


const {
  pokemon, showAnswer, message,
  mixPokemonArray, newGame
} = usePokemonsG1();

onBeforeMount(async () => {
  await mixPokemonArray();
})

</script>


<template>
  <h1 class="ma-2 text-center" v-if="!pokemon">Please wait...</h1>

  <div v-else class="d-flex justify-center my-6">
    <v-card id="pokemonCard" class="justify-center bg-white"
            variant="outlined"
            color="darkred"
            rounded="xl"
    >
      <div id="cardTitle">
        <v-card-title class="text-h4 px-8 py-8 mb-6">
          WHO'S THAT POKEMON?
        </v-card-title>
      </div>
      <div class="mx-5 my-5 bg-white">
        <PokemonImageG1></PokemonImageG1>
      </div>
      <div class="my-5">
        <PokemonOptionsG1></PokemonOptionsG1>
      </div>
      <v-card-actions class="d-flex flex-no-wrap justify-center align-center flex-column my-4 mx-auto">
        <div class="d-flex align-center flex-column mx-auto" v-if="showAnswer">
          <h2 class="fade-in">{{ message }}</h2>
          <v-btn class="my-6" @click="newGame"
                 variant="outlined"
                 color="blue"
          >
            Continue
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

#cardTitle .v-card-title {
  color: white;
  font-weight: bold;
}
</style>