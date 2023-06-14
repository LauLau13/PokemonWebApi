<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import { usePokemonsG2 } from '../composables/usePokemonsG2';
import { useRoute } from 'vue-router';
const route = useRoute();

const loading = ref(false);

onBeforeMount (async () => {
    loading.value = true;
    await buildRandomPokemonsG2();
    loading.value = false;
})
const {
  head,
  body,
  hindLegs,
  frontLegs,
  tail,
  eyes,
  mouth,
  ears,
  details,
  color,
  buildRandomPokemonsG2
} = usePokemonsG2(); 
</script>

<template>
    <div class="d-flex w-90 justify-center my-4 mx-6">
      <v-card id="pokemonCard" class="justify-center bg-white"
              variant="outlined"
              color="darkred"
              rounded="xl"
      >
        <div class="d-flex frex-row align-center mb-4" id="cardTitle">
          <v-card-title class="text-h5 justify-center my-4 ml-6">
            CREATE YOUR OWN POKEMON
          </v-card-title>
          <v-spacer></v-spacer>
          <v-btn class="my-4 mr-6" @click="buildRandomPokemonsG2"
                   color="blue"
            >
              New Pokemons
            </v-btn>
        </div>
        <span v-if="loading" class="justify-center">Please wait...</span>
        <div v-if="!loading" class="d-flex flex-wrap justify-center w-90 mx-6" id="card-content">
          <div class="d-flex justify-center flex-column mb-4 " id="pokemonProperty">
            <h2 class="feature">Head shape</h2>
            <div class="d-flex justify-center mx-4" id="pokemon-container">
              <img
                :src="head?.image"
                alt="pokemon">
            </div>
            <p class="d-flex justify-center mb-6 mx-4">{{ head?.name }}</p>
          </div>
          <div class="d-flex justify-center flex-column mb-4 " id="pokemonProperty">
            <h2 class="feature">Body shape</h2>
            <div class="d-flex justify-center mx-4" id="pokemon-container">
              <img
                :src="body?.image"
                alt="pokemon">
            </div>
            <p class="d-flex justify-center mb-6 mx-4">{{ body?.name }}</p>
          </div>
          <div class="d-flex justify-center flex-column mb-4 " id="pokemonProperty">
            <h2 class="feature">Hind legs</h2>
            <div class="d-flex justify-center mx-4" id="pokemon-container">
              <img
                :src="hindLegs?.image"
                alt="pokemon">
            </div>
            <p class="d-flex justify-center mb-6 mx-4">{{ hindLegs?.name }}</p>
          </div>
          <div class="d-flex justify-center flex-column mb-4 " id="pokemonProperty">
            <h2 class="feature">Front legs</h2>
            <div class="d-flex justify-center mx-4" id="pokemon-container">
              <img
                :src="frontLegs?.image"
                alt="pokemon">
            </div>
            <p class="d-flex justify-center mb-6 mx-4">{{ frontLegs?.name }}</p>
          </div>
          <div class="d-flex justify-center flex-column mb-4" id="pokemonProperty">
            <h2 class="feature">Tail</h2>
            <div class="d-flex justify-center mx-4" id="pokemon-container">
              <img
                :src="tail?.image"
                alt="pokemon">
            </div>
            <p class="d-flex justify-center mb-6 mx-4">{{ tail?.name }}</p>
          </div>
          <div class="d-flex justify-center flex-column mb-4" id="pokemonProperty">
            <h2 class="feature">Eyes</h2>
            <div class="d-flex justify-center mx-4" id="pokemon-container">
              <img
                :src="eyes?.image"
                alt="pokemon">
            </div>
            <p class="d-flex justify-center mb-6 mx-4">{{ eyes?.name }}</p>
          </div>
          <div class="d-flex justify-center flex-column mb-4" id="pokemonProperty">
            <h2 class="feature">Mouth</h2>
            <div class="d-flex justify-center mx-4" id="pokemon-container">
              <img
                :src="mouth?.image"
                alt="pokemon">
            </div>
            <p class="d-flex justify-center mb-6 mx-4">{{ mouth?.name }}</p>
          </div>
          <div class="d-flex justify-center flex-column mb-4" id="pokemonProperty">
            <h2 class="feature">Ears</h2>
            <div class="d-flex justify-center mx-4" id="pokemon-container">
              <img
                :src="ears?.image"
                alt="pokemon">
            </div>
            <p class="d-flex justify-center mb-6 mx-4">{{ ears?.name }}</p>
          </div>
          <div class="d-flex justify-center flex-column mb-4" id="pokemonProperty">
            <h2 class="feature">Details</h2>
            <div class="d-flex justify-center mx-4" id="pokemon-container">
              <img
                :src="details?.image"
                alt="pokemon">
            </div>
            <p class="d-flex justify-center mb-6 mx-4">{{ details?.name }}</p>
          </div>
          <div class="d-flex justify-center flex-column mb-4" id="pokemonProperty">
            <h2 class="feature">Colors</h2>
            <div class="d-flex justify-center mx-4" id="pokemon-container">
              <img
                :src="color?.image"
                alt="pokemon">
            </div>
            <p class="d-flex justify-center mb-6 mx-4">{{ color?.name }}</p>
          </div>
  
        </div>
        <v-card-actions class="">
            <div class="w-100 mx-6">
                <v-form>
                    <v-text-field class="ml-10 mr-6" label="Name your pokemon"></v-text-field>
                </v-form>
                <v-file-input :show-size="1000" label="Import your pokemon's picture" variant="outlined"></v-file-input>
                <v-btn type="submit" block class="mb-4">Submit</v-btn>
            </div>
        </v-card-actions>
      </v-card>
    </div>
  
  </template>

<style scoped>
#card-content{
    background-color: white;
}
.feature {
    color: #CC0000;
    margin: auto;
}
#cardTitle {
    background-color: #CC0000;
    color: white;
    font-weight: bold;
}
#pokemonProperty{
    background-color: white;
}
#pokemon-container {
    height: 160px;
    background-color: white;
}
p {
    color: black;
    text-emphasis-color: black;
}
img {
    height: 160px;
}
</style>