<template>
  <div class="circle">
    <h4 class="heading-4">Explore</h4>
  </div>
</template>

<script setup>
</script>

<style lang="scss">
.circle {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $white;
  border-radius: 50%;
  width: 150px;
  height: 150px;

  h4 {
    color: $primary;
    letter-spacing: 2px;
  }

  @media only screen and (min-width: $brekpointMedium) {
    width: 274px;
    height: 274px;

    h4 {
      letter-spacing: 1.25px;
    }
  }
}
</style>