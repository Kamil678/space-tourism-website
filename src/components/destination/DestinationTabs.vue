<template>
  <q-tabs v-model="tab" class="destinations-tabs">
    <q-tab name="moon" label="Moon" />
    <q-tab name="mars" label="Mars" />
    <q-tab name="europa" label="Europa" />
    <q-tab name="titan" label="Titan" />
  </q-tabs>

  <q-tab-panels v-model="tab" vertical class="all-destinations">
    <q-tab-panel
      v-for="destination in destinations"
      :key="destination.name"
      :name="destination.name"
      class="all-destinations__destination"
    >
      <div class="all-destinations__destination__image">
        <q-img :src="destination.img" :alt="destination.name" />
      </div>
      <div class="all-destinations__destination__info">
        <h2 class="heading-2 all-destinations__destination__info__name">
          {{ destination.name }}
        </h2>
        <p class="text all-destinations__destination__info__description">
          {{ destination.description }}
        </p>
        <div class="all-destinations__destination__info__line"></div>
        <div class="all-destinations__destination__info__numbers">
          <div class="all-destinations__destination__info__numbers__distance">
            <p
              class="subheading-2 all-destinations__destination__info__numbers__distance__title"
            >
              Avg. distance
            </p>
            <span
              class="subheading-1 all-destinations__destination__info__numbers__distance__number"
              >{{ destination.distance }}</span
            >
          </div>
          <div
            class="all-destinations__destination__info__numbers__travel-time"
          >
            <p
              class="subheading-2 all-destinations__destination__info__numbers__distance__title"
            >
              Est. travel time
            </p>
            <span
              class="subheading-1 all-destinations__destination__info__numbers__distance__number"
              >{{ destination.travelTime }}</span
            >
          </div>
        </div>
      </div>
    </q-tab-panel>
  </q-tab-panels>
</template>

<script setup>
import { ref } from "vue";
const tab = ref("moon");

const destinations = [
  {
    name: "moon",
    img: "src/assets/destination/image-moon.png",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites",
    distance: "384,400 km",
    travelTime: "3 days",
  },
  {
    name: "mars",
    img: "src/assets/destination/image-mars.png",
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 mil. km",
    travelTime: "9 months",
  },
  {
    name: "europa",
    img: "src/assets/destination/image-europa.png",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travelTime: "3 years",
  },
  {
    name: "titan",
    img: "src/assets/destination/image-titan.png",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travelTime: "7 years",
  },
];
</script>

<style lang="scss">
.destinations-tabs {
  font-family: $fontFamilyBrlow;
  font-size: 14px;
  color: $white;
  margin: 64px auto 50px auto;

  .q-tabs__content {
    &--align-center {
      @media (min-width: $brekpointXL) {
        justify-content: flex-end;
      }
    }

    .q-tab {
      padding: 0 8px 12px 8px;

      &__label {
        font-weight: 400;
        font-size: $fontNavText;
        line-height: 19px;
        letter-spacing: 2.7px;
      }

      &__indicator {
        right: 17.5px;
        left: 17.5px;
      }

      &:hover {
        div.q-focus-helper {
          background: transparent;
          opacity: 0;
        }

        &__indicator {
          background: #ffffff;
          mix-blend-mode: normal;
          opacity: 0.5;
        }
      }

      @media (min-width: $brekpointMedium) {
        padding: 0 17.5px 12px 17.5px;
      }
    }
  }

  .q-ripple {
    display: none;
  }

  @media (min-width: $brekpointMedium) {
    font-size: $fontNavText;
  }

  @media (min-width: $brekpointXL) {
    margin: 64px 135px 0 0;
  }
}

.all-destinations {
  background: transparent;

  &__destination {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding: 0;

    &__image {
      width: 200px;
      height: 200px;

      @media (min-width: $brekpointMedium) {
        width: 300px;
        height: 300px;
      }

      @media (min-width: $brekpointLarge) {
        width: 445px;
        height: 445px;
      }
    }

    &__info {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;

      &__name {
        text-transform: uppercase;
        color: $white;
        margin-bottom: 14px;
        text-align: center;

        @media (min-width: $brekpointXL) {
          text-align: left;
        }
      }

      &__description {
        max-width: 445px;
        font-family: $fontFamilyBrlow;
        color: $secondary;
        font-weight: 400;
        margin-bottom: 54px;
        text-align: center;

        @media (min-width: $brekpointXL) {
          text-align: left;
        }
      }

      &__line {
        height: 1px;
        background-color: $white;
        width: 100%;
        mix-blend-mode: normal;
        opacity: 0.25;
        margin-bottom: 28px;
      }

      &__numbers {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;

        &__distance,
        &__travel-time {
          display: flex;
          flex-direction: column;
          align-items: center;
          color: $white;

          &__title {
            font-family: $fontFamilyBrlow;
            color: $secondary;
            font-weight: 400;
            text-transform: uppercase;
            margin-bottom: 12px;
          }

          &__number {
            text-transform: uppercase;
          }

          @media (min-width: $brekpointXL) {
            align-items: flex-start;
          }
        }

        @media (min-width: $brekpointMedium) {
          flex-direction: row;
          justify-content: space-between;
          gap: 0;
        }
      }
    }

    @media (min-width: $brekpointXL) {
      flex-direction: row;
      justify-content: space-between;
      gap: 0;
    }
  }
}
</style>
