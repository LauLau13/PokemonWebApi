<script setup lang='ts'>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <v-layout>
    <Header />
    <v-main id='page-container' class='d-flex fill-height flex-column bg-darkblue'>
      <div id='main-content'>
        <RouterView />
      </div>
      <div class="footer">
        <Footer />
      </div>
    </v-main>
  </v-layout>
</template>


<style scoped>
#page-container {
  min-height: 100vh;
  position: relative;
}
</style>