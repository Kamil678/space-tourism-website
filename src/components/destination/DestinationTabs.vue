<template>
  <q-tabs v-model="tab" class="destinations-tabs">
    <q-tab name="moon" label="Moon" />
    <q-tab name="mars" label="Mars" />
    <q-tab name="europa" label="Europa" />
    <q-tab name="titan" label="Titan" />
  </q-tabs>

  <q-tab-panels
    v-model="tab"
    vertical
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
            <span>{{ destination.distance }}</span>
          </div>
          <div class="destination-travel-time">
            <p>Est. travel time</p>
            <span>{{ destination.travelTime }}</span>
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
.destinations-tabs {
  font-family: $fontFamilyBrlow;
  font-size: $fontNavText;
  color: $white;
  margin: 64px 135px 0 0;

  .q-tabs__content--align-center {
    justify-content: flex-end;
  }

  .q-tab {
    padding: 0 17.5px 12px 17.5px;
  }

  .q-tab__label {
    font-weight: 400;
    font-size: $fontNavText;
    line-height: 19px;
    letter-spacing: 2.7px;
  }

  .q-tab__indicator {
    right: 17.5px;
    left: 17.5px;
  }

  .q-ripple {
    display: none;
  }
}

.destinations-tabs.q-tabs .q-tab:hover {
  div.q-focus-helper {
    background: transparent;
    opacity: 0;
  }

  .q-tab__indicator {
    background: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.5;
  }
}

.all-destinations {
  background: transparent;
}

.destination {
  display: flex;
  justify-content: space-between;
  padding: 0;

  .destination-image {
    width: 445px;
    height: 445px;
  }

  .destination-info {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    .destination-name {
      text-transform: uppercase;
      font-size: $fontSizeH2;
      color: $white;
      line-height: 115px;
      margin-bottom: 14px;
    }

    .destination-description {
      max-width: 445px;
      font-family: $fontFamilyBrlow;
      font-size: 18px;
      color: $secondary;
      line-height: 32px;
      font-weight: 400;
      margin-bottom: 54px;
    }

    .destination-line {
      height: 1px;
      background-color: $white;
      width: 100%;
      mix-blend-mode: normal;
      opacity: 0.25;
      margin-bottom: 28px;
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

      p {
        font-family: $fontFamilyBrlow;
        font-size: 14px;
        color: $secondary;
        letter-spacing: 2.3635px;
        line-height: 17px;
        font-weight: 400;
        text-transform: uppercase;
        margin-bottom: 12px;
      }

      span {
        font-size: $fontSizeH5;
        line-height: 32px;
        text-transform: uppercase;
      }
    }
  }

}
</style>