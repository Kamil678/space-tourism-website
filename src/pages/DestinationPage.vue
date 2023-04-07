<template>
  <q-page class="destination-page">
    <TitleComponent number="01" title-text="Pick your destination"></TitleComponent>
    <DestinationTabs></DestinationTabs>
  </q-page>
</template>

<script setup>
import DestinationTabs from 'src/components/destination/DestinationTabs.vue';
import TitleComponent from 'src/components/TitleComponent.vue'
</script>
<style lang="scss">
body:has(main.destination-page) {
  background-image: url('../assets/destination/background-destination-desktop.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}

.destination-page {
  margin: 76px 163px 118px 166px;
}
</style>