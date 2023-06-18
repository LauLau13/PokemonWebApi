<script setup lang="ts">
import PokeCard from "@/components/PokeCard.vue";
import { usePokedex } from "@/composables/usePokedex";
import { onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

const { pokemonArr, loadPokemons } = usePokedex();

const loading = ref(false);

onBeforeMount(async () => {
  loading.value = true;
  await loadPokemons(1);
  loading.value = false;
});
</script>

<template>
  <div class="d-flex flex-column w-90 justify-center my-4 mx-6">
    <div>
      <v-text-field
        variant="underlined"
        label="Search pokemon"
        prepend-icon="mdi-magnify"
      ></v-text-field>
    </div>
    <!-- <span v-if="loading" class="justify-center">Please wait...</span> -->
    <div
      
      class="d-flex flex-wrap justify-center w-90 mx-6"
      id="card-content"
    >
      <v-row class="pa-6">
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
    <div>
      <v-pagination :length="6"></v-pagination>
    </div>
  </div>
</template>

<style scoped></style>
