<template>
  <q-tabs v-model="tab" class="tabs">
    <button-with-icon icon-path="img:../src/assets/shared/icon-close.svg" class="close-icon" @click="$emit('closeMenu')" />
    <q-route-tab to="/" name="home">
      <p><span>00</span> Home</p>
    </q-route-tab>
    <q-route-tab to="/destination" name="destination">
      <p><span>01</span> Destination</p>
    </q-route-tab>
    <q-route-tab to="/crew" name="crew">
      <p><span>02</span> Crew</p>
    </q-route-tab>
    <q-route-tab to="/technology" name="technology">
      <p><span>03</span> Technology</p>
    </q-route-tab>
  </q-tabs>
</template>

<script setup>
import { ref, defineEmits } from 'vue'
import ButtonWithIcon from '../shared/ButtonWithIcon.vue';
const tab = ref('home');

defineEmits(['closeMenu'])
</script>

<style lang="scss">
.tabs.q-tabs {
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(40.7742px);
  position: fixed;
  top: 0;
  right: -250px;
  height: 100vh;
  width: 250px;
  padding: 32px;
  z-index: 2;
  justify-content: flex-start;
  align-items: flex-start;

  .q-tabs__content {
    position: static;
    margin-top: 65px;

    @media only screen and (min-width: $brekpointMedium) {
      margin-top: 0;
    }
  }

  &.show {
    right: 0;
  }

  .row {
    display: flex;
    flex-direction: column;
  }

  .close-icon {
    position: absolute;
    top: 25px;
    right: 25px;
    z-index: 100;

    .q-icon {
      width: 19px;
      height: 19px;
    }
  }

  .q-tab {
    padding: 16px 0;
    flex: none;
    justify-content: start;

    .q-tab__indicator {
      display: none;
    }

    .q-tab__content {
      font-size: 16px;
      letter-spacing: 2.7px;
      font-weight: 400;

      span {
        font-weight: 700;
        display: inline;

        @media only screen and (min-width: $brekpointMedium) {
          display: none;
        }

        @media only screen and (min-width: $brekpointXL) {
          display: inline;
        }
      }

    }

    @media only screen and (min-width: $brekpointMedium) {
      padding: 0 24px 0 24px;
      min-height: 32px;

      .q-tab__indicator {
        display: block;
      }
    }

    @media only screen and (min-width: $brekpointXL) {
      padding: 39px 24px 38px 24px;
      min-height: 48px;
    }
  }

  .q-tab__label {
    font-weight: 400;
    font-size: $fontNavText;
    line-height: 19px;
    letter-spacing: 2.7px;
  }

  .q-tab__indicator {
    right: 24px;
    left: 24px;
  }

  .q-ripple {
    display: none;
  }

  @media only screen and (min-width: $brekpointMedium) {
    position: relative;
    height: auto;
    width: auto;
    right: 0;

    .row {
      flex-direction: row;
    }

    .close-icon {
      display: none;
    }
  }

  @media only screen and (min-width: $brekpointXL) {
    padding: 0 165px 0 123px;
    position: relative;
    height: auto;
    width: auto;
    right: 0;

    .row {
      flex-direction: row;
    }

    .close-icon {
      display: none;
    }
  }
}

.tabs.q-tabs .q-tab:hover {
  div.q-focus-helper {
    background: transparent;
    opacity: 0;
  }

  .q-tab__indicator {
    background: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.5;
  }
}
</style>