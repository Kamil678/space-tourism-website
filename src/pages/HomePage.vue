<template>
  <q-page class="page page--home">
    <TextComponent></TextComponent>
    <ExploreComponent></ExploreComponent>
  </q-page>
</template>

<script setup>
import TextComponent from 'src/components/home/TextComponent.vue';
import ExploreComponent from 'src/components/home/ExploreComponent.vue';
</script>
<style lang="scss">
body:has(main.page--home) {
  background-image: url('../assets/home/background-home-mobile.jpg');
  background-repeat: no-repeat;
  background-size: cover;

  @media only screen and (min-width: $brekpointMedium) {
    background-image: url('../assets/home/background-home-tablet.jpg');
  }

  @media only screen and (min-width: $brekpointXL) {
    background-image: url('../assets/home/background-home-desktop.jpg');
  }
}
</style>