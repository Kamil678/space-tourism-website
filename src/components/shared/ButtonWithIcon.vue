<template>
  <q-btn
    v-bind="$attrs">
    <q-icon :name="iconPath" />
    {{ buttonText }}
  </q-btn>
</template>


<script setup>
defineOptions({
  inheritAttrs: true
});

withDefaults(defineProps < {
  buttonText?: string
  iconPath: string
} > (), {
  buttonText: ''
});
</script>
<style lang="scss">
.q-tooltip {
  background-color: #000;
  padding: 5px 10px;
}

.tooltip-base {
  padding: 0;
  cursor: initial;
  min-height: auto;
  background-color: transparent;

  &::before {
    box-shadow: none !important;
  }

  .q-focus-helper {
    background-color: transparent !important;
  }

  .q-icon {
    width: 11.5px;
    height: 11.5px;
  }
}

.icon-tooltip {
  &.q-btn {
    text-transform: none;

    .q-btn__content {
      color: var(--q-primary);
    }
  }
}
</style>
