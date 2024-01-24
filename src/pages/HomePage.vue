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

.home-page {
  margin: 58px 32px 131px 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 81px 0;

  @media only screen and (min-width: $brekpointMedium) {
    margin: 106px 60px 131px 60px;
  }

  @media only screen and (min-width: $brekpointXL) {
    flex-direction: row;
    margin: 251px 165px 131px 165px;
    align-items: flex-end;
    gap: 0
  }
}
</style>