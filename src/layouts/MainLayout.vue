<template>
  <q-layout>
    <MainNavigation></MainNavigation>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import MainNavigation from 'src/components/nav/MainNavigation.vue';
</script>
