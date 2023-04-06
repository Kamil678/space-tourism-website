<template>
  <q-tabs v-model="tab" class="destinations-tabs">
    <q-tab name="moon" label="Moon" />
    <q-tab name="mars" label="Mars" />
    <q-tab name="europa" label="Europa" />
    <q-tab name="titan" label="Titan" />
  </q-tabs>

  <q-tab-panels
    v-model="tab"
    animated
    swipeable
    vertical
    transition-prev="jump-up"
    transition-next="jump-up"
    class="all-destinations">
    <q-tab-panel v-for="destination in destinations" :key="destination.name" :name="destination.name" class="destination">
      <div class="destination-image">
        <q-img :src="destination.img" />
      </div>
      <div class="destination-info">
        <h2 class="destination-name">{{ destination.name }}</h2>
        <p class="destination-description">{{ destination.description }}</p>
        <div class="destination-line"></div>
        <div class="destination-numbers">
          <div class="destination-distance">
            <p>Avg. distance</p>
            <p>{{ destination.distance }}</p>
          </div>
          <div class="destination-travel-time">
            <p>Est. travel time</p>
            <p>{{ destination.travelTime }}</p>
          </div>
        </div>
      </div>
    </q-tab-panel>
  </q-tab-panels>
</template>

<script setup>
import { ref } from 'vue'
const tab = ref('moon')

const destinations = [
  {
    name: 'moon',
    img: 'src/assets/destination/image-moon.png',
    description: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites',
    distance: '384,400 km',
    travelTime: '3 days'
  },
  {
    name: 'mars',
    img: 'src/assets/destination/image-mars.png',
    description: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
    distance: '225 mil. km',
    travelTime: '9 months'
  },
  {
    name: 'europa',
    img: 'src/assets/destination/image-europa.png',
    description: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
    distance: '628 mil. km',
    travelTime: '3 years'
  },
  {
    name: 'titan',
    img: 'src/assets/destination/image-titan.png',
    description: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
    distance: '1.6 bil. km',
    travelTime: '7 years'
  }
]
</script>

<style lang="scss">
.all-destinations {
  background: transparent;
}

.destination {
  display: flex;
  justify-content: space-between;

  .destination-image {
    width: 445px;
    height: 445px;
  }

  .destination-info {
    .destination-name {
      text-transform: uppercase;
      font-size: $fontSizeH2;
      color: $white;
      line-height: 115px;
      margin-bottom: 14px;
    }

    .destination-description {
      max-width: 444px;
      font-family: $fontFamilyBrlow;
      font-size: 18px;
      color: $secondary;
      line-height: 32px;
      font-weight: 400;
      margin-bottom: 54px;
    }

    .destination-line {
      width: 100%;
      height: 1px;
      background-color: $primary;
    }

    .destination-numbers {
      display: flex;
      justify-content: space-between;
    }

    .destination-distance,
    .destination-travel-time {
      display: flex;
      flex-direction: column;
      color: $white;
    }
  }

}
</style>