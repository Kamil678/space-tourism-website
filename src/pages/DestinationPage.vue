<template>
  <q-page class="destination-page">
    <DestinationTitle></DestinationTitle>
    <DestinationTabs></DestinationTabs>
  </q-page>
</template>

<script setup>
import DestinationTabs from 'src/components/destination/DestinationTabs.vue';
import DestinationTitle from 'src/components/destination/DestinationTitle.vue'
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