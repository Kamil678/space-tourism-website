<template>
  <div class="main-navigation">
    <q-icon name="img:icons/logo.svg" class="logo" />
    <div class="navigation-tabs">
      <div class="line"></div>
      <NavigationTabs></NavigationTabs>
    </div>
  </div>
</template>

<script setup>
import NavigationTabs from 'src/components/nav/NavigationTabs.vue'
</script>

<style lang="scss">
.main-navigation {
  display: flex;
  align-items: center;
  margin: 0 0 0 55px;
  padding-top: 40px;

  .logo {
    width: 48px;
    height: 48px;
    margin-right: 64px;
  }

  .navigation-tabs {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: $white;
    font-family: $fontFamilyBrlow;

    .line {
      height: 1px;
      background-color: $white;
      width: 100%;
      mix-blend-mode: normal;
      opacity: 0.25;
      margin-right: -30px;
      z-index: 2;
    }
  }
}
</style>