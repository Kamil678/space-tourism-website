<template>
  <div class="main-navigation">
    <q-icon name="img:icons/logo.svg" class="logo" />
    <div class="navigation-tabs">
      <div class="line"></div>
      <NavigationTabs :open-menu="openMenu" @close-menu="openMenu = false"></NavigationTabs>
    </div>
    <q-icon name="img:../src/assets/shared/icon-hamburger.svg" class="menu-icon" @click="openMenu = true" />
  </div>
</template>

<script setup>
import NavigationTabs from 'src/components/nav/NavigationTabs.vue'
import { ref } from 'vue';

// const openMenu = () => {
//   document.querySelector('.tabs').classList.add('show')
// }

// const closeMenu = () => {
//   document.querySelector('.tabs').classList.remove('show')
// }
const openMenu = ref(false);
</script>

<style lang="scss">
.main-navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 25px 32px;


  .logo {
    width: 48px;
    height: 48px;
    margin-right: 64px;
  }

  .navigation-tabs {
    width: 100%;
    align-items: center;
    justify-content: flex-end;
    color: $white;
    font-family: $fontFamilyBrlow;

    @media only screen and (min-width: $brekpointMedium) {
      display: flex;
    }

    .line {
      display: none;
      height: 1px;
      background-color: $white;
      width: 100%;
      mix-blend-mode: normal;
      opacity: 0.25;
      margin-right: -30px;
      z-index: 2;

      @media only screen and (min-width: $brekpointXL) {
        display: inline-block;
      }
    }
  }

  .menu-icon {
    width: 24px;
    height: 21px;
    display: block;

    @media only screen and (min-width: $brekpointMedium) {
      display: none;
    }
  }

  @media only screen and (min-width: $brekpointMedium) {
    display: flex;
    justify-content: flex-start;
    margin: 0 0 0 55px;
  }

  @media only screen and (min-width: $brekpointXL) {
    margin: 0 0 0 55px;
    padding-top: 40px;
  }
}
</style>