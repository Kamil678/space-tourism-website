<template>
  <q-page class="page page--destination">
    <TitleComponent number="01" title-text="Pick your destination"></TitleComponent>
    <DestinationTabs></DestinationTabs>
  </q-page>
</template>

<script setup>
import DestinationTabs from 'src/components/destination/DestinationTabs.vue';
import TitleComponent from 'src/components/TitleComponent.vue'
</script>
<style lang="scss">
body:has(main.page--destination) {
  background-image: url('../assets/destination/background-destination-desktop.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>