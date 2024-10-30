<template>
  <q-carousel
    v-model="slide"
    navigation
    padding
    class="carousel"
    infinite
    autoplay
  >
    <q-carousel-slide
      v-for="crewMember in allCrew"
      :key="crewMember.name"
      :name="crewMember.specialization"
      class="carousel__slide"
    >
      <div class="slide-info">
        <h4 class="slide-info__title heading heading--4">
          {{ crewMember.specialization }}
        </h4>
        <h3 class="slide-info__name heading heading--3">
          {{ crewMember.name }}
        </h3>
        <p class="slide-info__description">{{ crewMember.description }}</p>
      </div>
      <div class="carousel__slide__image">
        <img :src="crewMember.img" :alt="crewMember.name" />
      </div>
    </q-carousel-slide>
  </q-carousel>
</template>

<script setup>
import { ref } from "vue";
const slide = ref("commander");

const allCrew = [
  {
    specialization: "commander",
    name: "Douglas Hurley",
    description:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    img: "src/assets/crew/image-douglas-hurley.webp",
  },
  {
    specialization: "mission specialist",
    name: "Mark Shuttleworth",
    description:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    img: "src/assets/crew/image-mark-shuttleworth.webp",
  },
  {
    specialization: "pilot",
    name: "Victor Glover",
    description:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
    img: "src/assets/crew/image-victor-glover.webp",
  },
  {
    specialization: "flight engineer",
    name: "Anousheh Ansari",
    description:
      " Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
    img: "src/assets/crew/image-anousheh-ansari.webp",
  },
];
</script>

<style lang="scss">
.carousel {
  background: transparent;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: visible;

  .q-carousel__navigation-inner {
    display: flex;
    top: 0;
    left: 0;

    @media (min-width: $brekpointXL) {
      display: block;
    }
  }

  .q-carousel__navigation--bottom {
    position: static;
    margin-top: 30px;

    @media (min-width: $brekpointXL) {
      position: absolute;
      bottom: 20px;
      left: -10px;
      margin-top: 0;
    }
  }

  &__slide {
    display: flex;
    flex-direction: column;
    gap: 50px;
    justify-content: space-between;
    align-items: center;
    padding: 0 !important;
    margin: 0;

    .slide-info {
      text-align: center;

      &__title {
        margin-top: 50px;
        text-transform: uppercase;
        color: #ffffff;
        mix-blend-mode: normal;
        opacity: 0.5;

        @media (min-width: $brekpointXL) {
          margin-top: 154px;
        }
      }

      &__name {
        margin-top: 15px;
        text-transform: uppercase;
        color: $white;
      }

      &__description {
        font-family: $fontFamilyBrlow;
        max-width: 445px;
        margin: 27px auto 0 auto;
        color: $secondary;
        font-size: 18px;
        line-height: 32px;
        margin-top: 27px;

        @media (min-width: $brekpointXL) {
          margin: 27px 0 0 0;
        }
      }

      @media (min-width: $brekpointXL) {
        text-align: left;
      }
    }

    &__image {
      img {
        width: 250px;

        @media (min-width: 420px) {
          width: 350px;
        }

        @media (min-width: $brekpointMedium) {
          width: auto;
        }
      }
    }

    @media (min-width: $brekpointXL) {
      flex-direction: row;
    }
  }
}
</style>
