<script setup lang="ts"></script>

<template>
  <v-footer :elevation="2" class="index text-center d-flex flex-column align-items-center" color="darkred">
    <div class="link-text-footer w-100 d-flex align-center">
      <a class="text-white w-100 px-8" href="">Cookies</a>
      <a class="text-white w-100 px-8" href="">Aviso legal</a>
      <a class="text-white w-100 px-8" href="">Privacidad</a>
    </div>
    <div class="text-white text-center d-flex align-items-center my-4">
      <p class="mx-10 text-white">©2023 PokeApiGames</p>
    </div>
  </v-footer>
</template>

<style scoped>
.index {
  max-height: 140px;
}

@media (max-width: 600px) {
  .link-text-footer a {
    margin-left: 10px;
    margin-right: 10px;
  }

  .link-text-footer {
    display: flex;
    flex-direction: column;
  }
}
</style>