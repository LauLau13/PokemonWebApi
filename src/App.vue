<!-- <template>
  <v-app>
    <v-main>
      <Home />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
  import Home from './views/Home.vue'
</script> -->

<!-- <script setup lang="ts">
import PokemonGame1 from './views/PokemonGame1.vue';
</script>

<template>
  <PokemonGame1 />
</template> -->

<script setup lang='ts'>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Header from './components/Header.vue';

const router = useRouter();
const dialog = ref(false);

/* function onOpenDialog() {
  if (user.value !== undefined) {
    router.push('/perfil');
    return;
  }
  console.log('onOpenDialog');
  dialog.value = true;
} */
</script>

<template>
  <v-layout>
    <Header />
    <v-main id='page-container' class='d-flex w-100 flex-column'>
      <div id='main-content'>
        <RouterView />
      </div>
      <!--  <div class="footer">
        <Footer />
      </div> -->
    </v-main>
  </v-layout>
</template>



<style scoped>
#page-container {
  min-height: 100vh;
  position: relative;
}

#main-content {
  padding-bottom: 101px;
}
</style>

<!-- <style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->