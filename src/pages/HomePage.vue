<template>
  <q-page class="home-page">
    <TextComponent></TextComponent>
    <ExploreComponent></ExploreComponent>
  </q-page>
</template>

<script setup>
import TextComponent from 'src/components/home/TextComponent.vue';
import ExploreComponent from 'src/components/home/ExploreComponent.vue';
</script>
<style lang="scss">
body:has(main.home-page) {
  background-image: url('../assets/home/background-home-desktop.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}

.home-page {
  margin: 251px 165px 131px 165px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
</style>