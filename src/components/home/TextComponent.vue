<template>
  <div class="home-page-description">
    <h5 class="heading-5">So, you want to travel to</h5>
    <h1 class="heading-1">Space</h1>
    <p class="text">
      Let’s face it; if you want to go to space, you might as well genuinely go to
      outer space and not hover kind of on the edge of it. Well sit back, and relax
      because we’ll give you a truly out of this world experience!
    </p>
  </div>
</template>

<script setup>
</script>

<style lang="scss">
.home-page-description {
  max-width: 400px;
  text-align: center;

  h5,
  p {
    color: $secondary;
  }

  h5,
  h1 {
    margin-bottom: 16px;
  }

  h1 {
    color: $white;
    line-height: 100px;
  }

  p {
    font-family: $fontFamilyBrlow;
  }

  @media only screen and (min-width: $brekpointMedium) {
    max-width: 600px;

    h1 {
      line-height: 172px;
    }
  }

  @media only screen and (min-width: $brekpointXL) {
    text-align: left;
  }
}
</style>