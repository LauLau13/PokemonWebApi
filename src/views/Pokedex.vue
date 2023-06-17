<script setup lang="ts">
import  PokeCard  from '@/components/PokeCard.vue';
import { onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();

/* export default {
    data: () => ({
      show: false,
    }),
  } */

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
    
    <!-- <PokeCard></PokeCard> -->
    <div>
      <v-pagination :length="6"></v-pagination>
    </div>
  </div>
  
</template>

<style scoped>
</style>