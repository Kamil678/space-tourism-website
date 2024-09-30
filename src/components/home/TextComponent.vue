<template>
  <div class="basic-info">
    <h5 class="heading-5 basic-info__first-text">So, you want to travel to</h5>
    <h1 class="heading-1 basic-info__title">Space</h1>
    <p class="text basic-info__second-text">
      Let’s face it; if you want to go to space, you might as well genuinely go to
      outer space and not hover kind of on the edge of it. Well sit back, and relax
      because we’ll give you a truly out of this world experience!
    </p>
  </div>
</template>

<script setup>
</script>

<style lang="scss">
.basic-info {
  max-width: 400px;
  text-align: center;

  &__first-text,
  &__second-text {
    color: $secondary;
  }

  &__first-text,
  &__title {
    margin-bottom: 16px;
  }

  &__title {
    color: $white;
    line-height: 100px;
  }

  &__second-text{
    font-family: $fontFamilyBrlow;
  }

  @media only screen and (min-width: $brekpointMedium) {
    max-width: 600px;

    &__title {
      line-height: 172px;
    }
  }

  @media (min-width: $brekpointXL) {
    text-align: left;
  }
}
</style>