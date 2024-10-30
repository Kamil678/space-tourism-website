<template>
  <q-tabs v-model="tab" class="technology-tabs" vertical>
    <q-tab name="launchVehicle" label="1" />
    <q-tab name="spaceport" label="2" />
    <q-tab name="spaceCapsule" label="3" />
  </q-tabs>

  <q-tab-panels v-model="tab" autoplay keep-alive class="technology-panels">
    <q-tab-panel
      v-for="technologyElement in technology"
      :key="technologyElement.name"
      :name="technologyElement.name"
      class="technology-panels__panel"
    >
      <div class="technology-element">
        <div class="technology-element__info">
          <p class="technology-element__info__entry">The terminology ...</p>
          <h3 class="technology-element__info__title heading heading--3">
            {{ technologyElement.title }}
          </h3>
          <p class="technology-element__info__description">
            {{ technologyElement.description }}
          </p>
        </div>
        <div class="technology-element__image">
          <img
            v-if="isLargeScreen"
            :src="technologyElement.img"
            :alt="technologyElement.title"
            class="technology-element__image__img technology-element__image__img--large-screen-img"
          />
          <img
            v-if="!isLargeScreen"
            :src="technologyElement.imgSmallScreen"
            :alt="technologyElement.title"
            class="technology-element__image__img technology-element__image__img--small-screen-img"
          />
        </div>
      </div>
    </q-tab-panel>
  </q-tab-panels>
</template>

<script setup>
import { ref, onMounted } from "vue";
const tab = ref("launchVehicle");

const technology = [
  {
    name: "launchVehicle",
    title: "Launch Vehicle",
    img: "src/assets/technology/image-launch-vehicle-portrait.jpg",
    imgSmallScreen: "src/assets/technology/image-launch-vehicle-landscape.jpg",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    name: "spaceport",
    title: "Spaceport",
    img: "src/assets/technology/image-spaceport-portrait.jpg",
    imgSmallScreen: "src/assets/technology/image-spaceport-landscape.jpg",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  {
    name: "spaceCapsule",
    title: "Space Capsule",
    img: "src/assets/technology/image-space-capsule-portrait.jpg",
    imgSmallScreen: "src/assets/technology/image-space-capsule-landscape.jpg",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];

const isLargeScreen = ref(window.innerWidth > 1200);

onMounted(() => {
  window.addEventListener("resize", () => {
    isLargeScreen.value = window.innerWidth > 1200;
  });
});
</script>

<style lang="scss">
.technology-tabs {
  background-color: transparent;
  color: $white;
  height: auto;
  font-family: $fontFamilyBellefair;
  margin-right: 30px;
  display: flex;

  .q-tab {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    mix-blend-mode: normal;
    opacity: 0.25;
    border: 1px solid #ffffff;
    margin-bottom: 32px;

    .q-tab__label {
      font-size: 24px;
      font-weight: 400;
      line-height: 30px;
      text-align: center;
      letter-spacing: 2px;

      @media (min-width: $brekpointMedium) {
        font-size: $fontSizeH4;
        line-height: 37px;
      }
    }

    @media (min-width: $brekpointMedium) {
      width: 80px;
      height: 80px;
    }
  }

  .q-tab--active {
    background-color: $white;
    color: $primary;
    opacity: 1;
  }

  .q-tab__indicator {
    display: none;
  }

  &.q-tabs--vertical {
    .q-tabs__content {
      display: flex !important;
      gap: 20px;
      margin-top: 30px;

      @media (min-width: $brekpointXL) {
        display: block !important;
      }
    }
  }
}

.technology-panels {
  background: transparent;
  width: 100%;

  &__panel {
    width: 100%;
    padding: 0;

    .technology-element {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      gap: 50px;
      flex-direction: column-reverse;

      &__info {
        max-width: 300px;
        text-align: center;
        margin: 0 auto;

        @media (min-width: $brekpointMedium) {
          max-width: 500px;
        }

        @media (min-width: $brekpointLarge) {
          max-width: 600px;
        }

        @media (min-width: $brekpointXL) {
          max-width: 400px;
        }

        @media (min-width: $brekpointXXL) {
          max-width: 500px;
        }

        &__entry {
          font-family: $fontFamilyBrlow;
          font-size: $fontNavText;
          font-weight: 400;
          line-height: 19px;
          letter-spacing: 2.7px;
          color: $secondary;
          text-transform: uppercase;
          margin-bottom: 11px;
        }

        &__title {
          font-weight: 400;
          color: $white;
          text-transform: uppercase;
          margin-bottom: 17px;
        }

        &__description {
          font-family: $fontFamilyBrlow;
          color: $secondary;
          font-size: 18px;
          line-height: 32px;
        }

        @media (min-width: $brekpointXL) {
          text-align: left;
        }
      }

      &__image {
        flex-grow: 1;
        text-align: right;
        width: 100%;

        &__img {
          height: 100%;

          &--small-screen-img {
            width: 100%;
          }
        }

        @media (min-width: $brekpointXL) {
          width: auto;
        }
      }

      @media (min-width: $brekpointXL) {
        flex-direction: row;
      }
    }
  }
}
</style>
