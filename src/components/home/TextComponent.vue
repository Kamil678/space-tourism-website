<template>
  <div class="home-page-description">
    <h5>So, you want to travel to</h5>
    <h1>Space</h1>
    <p>
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

  h5,
  p {
    color: $secondary;
  }

  h5,
  h1 {
    margin-bottom: 24px;
  }

  h5 {
    font-weight: 400;
    line-height: 34px;
    letter-spacing: 4.725px;
    font-size: $fontSizeH5;
  }

  h1 {
    color: $white;
    font-size: $fontSizeH1;
    line-height: 172px;
  }

  p {
    font-family: $fontFamilyBrlow;
    font-size: 18px;
    line-height: 32px;
    font-weight: 400;
  }
}
</style>