<template>
  <q-page class="technology-page">
    <TitleComponent number="03" title-text="Space launch 101"></TitleComponent>
    <div class="tabs">
      <TechnologyTabs></TechnologyTabs>
    </div>
  </q-page>
</template>

<script setup>
import TitleComponent from 'src/components/TitleComponent.vue';
import TechnologyTabs from 'src/components/technology/TechnologyTabs.vue';
</script>

<style lang="scss">
body:has(main.technology-page) {
  background-image: url('../assets/technology/background-technology-desktop.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}

.technology-page {
  margin: 76px 0 101px 166px;

  .tabs {
    display: flex;
    align-items: center;
    margin-top: 26px;
    width: 100%;
  }
}
</style>