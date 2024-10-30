<template>
  <div class="title">
    <span class="title__element title__element--span">{{ number }}</span>
    <h5 class="title__element title__element--h5">{{ titleText }}</h5>
  </div>
</template>

<script setup>
const props = defineProps(["number", "titleText"]);
</script>

<style lang="scss">
.title {
  display: flex;
  align-items: center;

  &__element {
    font-family: $fontFamilyBrlow;
    font-size: $fontSizeH5;
    line-height: 34px;
    letter-spacing: 4.725px;
    color: #ffffff;

    &--span {
      font-weight: 700;
      font-size: 28px;
      mix-blend-mode: normal;
      opacity: 0.25;
      margin-right: 28px;
    }

    &--h5 {
      font-weight: 400;
      text-transform: uppercase;
    }
  }
}
</style>
