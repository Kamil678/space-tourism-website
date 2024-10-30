<template>
  <q-btn
    v-bind="$attrs" class="btn-with-icon">
    <q-icon :name="iconPath" />
    {{ buttonText }}
  </q-btn>
</template>


<script setup>
const props = defineProps(['buttonText', 'iconPath']);
</script>
<style lang="scss">
.btn-with-icon {
  padding: 0;
}
</style>
