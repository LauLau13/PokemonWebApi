<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function goToPokemonGame1(){
  router.push('/PokemonGame1');
}

function goToPokemonGame2(){
  router.push('/PokemonGame2');
}

</script>

<template>
  <v-container class="fill-height bg-darkblue">
    <v-carousel class="mt-10 mb-10 rounded-xl" hide-delimiter-background show-arrows="hover">
      <v-carousel-item cover>
        <v-img
        class="bg-white"
        cover
        :aspect-ratio="1"
        src="../assets/PokemonGame1.jpg"
        @click="goToPokemonGame1()"
        ></v-img>
      </v-carousel-item>
      <v-carousel-item cover>
        <v-img
        class="bg-white"
        cover
        :aspect-ratio="1"
        src="../assets/PokemonGame2.jpg"
        @click="goToPokemonGame2()"
        ></v-img>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<style scoped>
</style>

