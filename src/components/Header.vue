<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function goToHome() {
  router.push('/');
}

function goToPokedex(){
    router.push('/Pokedex');
}

function goTPokemonGame1() {
  router.push('/PokemonGame1');
}

function goTPokemonGame2() {
  router.push('/PokemonGame2');
}

</script>

<template>
    <v-app-bar rounded color="darkred">
        <v-toolbar-items class="d-flex align-center">
            <v-toolbar-nav-icon class="ml-1">
                <v-btn icon @click="goToHome()">
                    <v-icon>
                        <v-img src="../assets/pokeball-white.png"></v-img>
                    </v-icon>
                </v-btn>
            </v-toolbar-nav-icon>
            <v-btn color="white" @click="goToPokedex()">
                <v-icon size="large">
                    <v-img class="ml-1" src="../assets/pokedex-white.png" size="xl"></v-img>
                </v-icon>
                  Pokedex
            </v-btn>
        </v-toolbar-items>
        
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn class="ml-1" color="white" @click="goTPokemonGame1()">Who's that pokemon?</v-btn>
            <v-btn class="ml-1" color="white" @click="goTPokemonGame2()">Create your pokemon</v-btn>
        </v-toolbar-items>
    </v-app-bar>
</template>

<style scoped>
</style>