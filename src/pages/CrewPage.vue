<template>
  <q-page class="page page--crew">
    <TitleComponent number="02" title-text="Meet your crew"></TitleComponent>
    <CarouselComponent></CarouselComponent>
  </q-page>
</template>

<script setup>
import TitleComponent from 'src/components/TitleComponent.vue';
import CarouselComponent from 'src/components/crew/CarouselComponent.vue';
</script>

<style>
body:has(main.page--crew) {
  background-image: url('../assets/crew/background-crew-desktop.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>