<template>
  <q-tabs v-model="tab" class="destination-tabs">
    <q-tab name="moon" label="Moon" />
    <q-tab name="mars" label="Mars" />
    <q-tab name="europa" label="Europa" />
    <q-tab name="titan" label="Titan" />
  </q-tabs>

  <q-tab-panels
    v-model="tab"
    animated
    swipeable
    vertical
    transition-prev="jump-up"
    transition-next="jump-up">
    <q-tab-panel name="moon">
      <div class="text-h4 q-mb-md">Moon</div>
    </q-tab-panel>

    <q-tab-panel name="mars">
      <div class="text-h4 q-mb-md">Mars</div>
    </q-tab-panel>

    <q-tab-panel name="europa">
      <div class="text-h4 q-mb-md">Europa</div>
    </q-tab-panel>

    <q-tab-panel name="titan">
      <div class="text-h4 q-mb-md">Titan</div>
    </q-tab-panel>
  </q-tab-panels>
</template>

<script setup>
import { ref } from 'vue'
const tab = ref('moon')
</script>