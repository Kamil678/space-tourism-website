<template>
  <q-tabs v-model="tab" class="tabs">
    <q-route-tab to="/" name="home" label="00 Home" />
    <q-route-tab to="/destination" name="destination" label="01 Destination" />
    <q-route-tab to="/crew" name="crew" label="02 Crew" />
    <q-route-tab to="/technology" name="technology" label="03 Technology" />
  </q-tabs>
</template>

<script setup>
import { ref } from 'vue'
const tab = ref('home');
</script>

<style lang="scss">
.tabs.q-tabs {
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(40.7742px);
  padding: 0 165px 0 123px;

  .q-tab {
    padding: 39px 24px 38px 24px;
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