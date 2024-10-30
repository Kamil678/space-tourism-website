<template>
  <q-page class="page page--technology">
    <TitleComponent
      number="03"
      title-text="Space launch 101"
      class="technology-page-title"
    ></TitleComponent>
    <div class="page--technology__tabs">
      <TechnologyTabs></TechnologyTabs>
    </div>
  </q-page>
</template>

<script setup>
import TitleComponent from "src/components/TitleComponent.vue";
import TechnologyTabs from "src/components/technology/TechnologyTabs.vue";
</script>

<style lang="scss">
body:has(main.page--technology) {
  background-image: url("../assets/technology/background-technology-desktop.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

.technology-page-title {
  margin-left: 32px;

  @media (min-width: $brekpointMedium) {
    margin-left: 55px;
  }
  @media (min-width: $brekpointXL) {
    margin-left: 0;
  }
}
</style>
