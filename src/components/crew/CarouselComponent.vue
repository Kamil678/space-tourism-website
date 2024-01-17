<template>
  <q-carousel
    v-model="slide"
    navigation
    padding
    class="slider">
    <q-carousel-slide v-for="crewMember in  allCrew " :key="crewMember.name" :name="crewMember.specialization" class="crew-member">
      <div class="crew-member-info">
        <h4 class="crew-member-specialization">{{ crewMember.specialization }}</h4>
        <h3 class="crew-member-name">{{ crewMember.name }}</h3>
        <p class="crew-member-description">{{ crewMember.description }}</p>
      </div>
      <div class="crew-member-image">
        <q-img :src="crewMember.img" />
      </div>
    </q-carousel-slide>
  </q-carousel>
</template>

<script setup>
import { ref } from 'vue'
const slide = ref('commander')

const allCrew = [
  {
    specialization: 'commander',
    name: 'Douglas Hurley',
    description: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
    img: "src/assets/crew/image-douglas-hurley.png",
  },
  {
    specialization: 'mission specialist',
    name: 'Mark Shuttleworth',
    description: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
    img: 'src/assets/crew/image-mark-shuttleworth.png',
  },
  {
    specialization: 'pilot',
    name: 'Victor Glover',
    description: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ',
    img: 'src/assets/crew/image-victor-glover.png',
  },
  {
    specialization: 'flight engineer',
    name: 'Anousheh Ansari',
    description: ' Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ',
    img: 'src/assets/crew/image-anousheh-ansari.png',
  }
]
</script>

<style lang="scss">
.slider {
  background: transparent;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: visible;

  .q-carousel__navigation-inner {
    display: block;
    top: 0;
    left: 0;
  }

  .q-carousel__navigation--bottom {
    top: 550px;
    left: -4px;
  }

  .crew-member {
    display: flex;
    justify-content: space-between;
    padding: 0 0 0 0 !important;
    margin: 0;

    .crew-member-specialization {
      margin-top: 154px;
      font-size: $fontSizeH4;
      line-height: 37px;
      text-transform: uppercase;
      color: #FFFFFF;
      mix-blend-mode: normal;
      opacity: 0.5;
    }

    .crew-member-name {
      margin-top: 15px;
      font-size: $fontSizeH3;
      line-height: 64px;
      text-transform: uppercase;
      color: $white;
    }

    .crew-member-description {
      font-family: $fontFamilyBrlow;
      max-width: 445px;
      color: $secondary;
      font-size: 18px;
      line-height: 32px;
      margin-top: 27px;
    }

    .crew-member-image {
      width: 570px;
    }
  }
}
</style>