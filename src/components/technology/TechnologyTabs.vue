<template>
  <q-tabs v-model="tab" class="technology-tabs" vertical>
    <q-tab name="launchVehicle" label="1" />
    <q-tab name="spaceport" label="2" />
    <q-tab name="spaceCapsule" label="3" />
  </q-tabs>

  <q-tab-panels
    v-model="tab"
    vertical
    class="all-technology">
    <q-tab-panel v-for="technologyElement in technology" :key="technologyElement.name" :name="technologyElement.name" class="technology">
      <div class="technology-element">
        <div class="technology-info">
          <p class="technology-entry">The terminology ...</p>
          <h3 class="technology-title">{{ technologyElement.title }}</h3>
          <p class="technology-description">{{ technologyElement.description }}</p>
        </div>
        <div :class="`technology-image-${technologyElement.name} technology-image`"></div>
      </div>
    </q-tab-panel>
  </q-tab-panels>
</template>

<script setup>
import { ref } from 'vue'
const tab = ref('launchVehicle')

const technology = [
  {
    name: 'launchVehicle',
    title: 'Launch Vehicle',
    description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    name: 'spaceport',
    title: 'Spaceport',
    description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  {
    name: 'spaceCapsule',
    title: 'Space Capsule',
    description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
]
</script>

<style lang="scss">
.technology-tabs {
  background-color: transparent;
  color: $white;
  height: auto;
  font-family: $fontFamilyBellefair;
  margin-right: 80px;

  .q-tab {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    mix-blend-mode: normal;
    opacity: 0.25;
    border: 1px solid #FFFFFF;
    margin-bottom: 32px;

    .q-tab__label {
      font-size: $fontSizeH4;
      font-weight: 400;
      line-height: 37px;
      text-align: center;
      letter-spacing: 2px;
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
}

.all-technology {
  background: transparent;
  width: 100%;

  .technology {
    width: 100%;
    padding: 0;

    .technology-element {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      .technology-info {
        max-width: 500px;

        .technology-entry {
          font-family: $fontFamilyBrlow;
          font-size: $fontNavText;
          font-weight: 400;
          line-height: 19px;
          letter-spacing: 2.7px;
          color: $secondary;
          text-transform: uppercase;
          margin-bottom: 11px;
        }

        .technology-title {
          font-size: $fontSizeH3;
          font-weight: 400;
          line-height: 64px;
          color: $white;
          text-transform: uppercase;
          margin-bottom: 17px;
        }

        .technology-description {
          font-family: $fontFamilyBrlow;
          color: $secondary;
          font-size: 18px;
          line-height: 32px;
        }
      }

      .technology-image {
        width: 515px;
        height: 527px;
      }

      .technology-image-launchVehicle {
        background-image: url(../../assets/technology/image-launch-vehicle-portrait.jpg);
        background-size: contain;
      }

      .technology-image-spaceport {
        background-image: url(../../assets/technology/image-spaceport-portrait.jpg);
      }

      .technology-image-spaceCapsule {
        background-image: url(../../assets/technology/image-space-capsule-portrait.jpg);
      }
    }
  }
}
</style>