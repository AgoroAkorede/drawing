<template>
  <div class="body">
    <back-icon />
    <colors-vue />
    <delete-icon />
    <div class="sliders">
      <label>opacity: {{ opacity }} </label>
      <input class="slider" type="range" min="0" max="100" v-model="opacity" />

      <label>radius: {{ radius }} </label>
      <input
        class="slider"
        type="range"
        min="-180"
        max="180"
        v-model="radius"
      />

      <label>lazy Radius: {{ lazy_radius }} </label>
      <input
        class="slider"
        type="range"
        min="-180"
        max="180"
        v-model="lazy_radius"
      />
    </div>
  </div>
</template>

<script lang="ts">
// import deleteIcon from "./delete.svg";
import ColorsVue from "./Colors.vue";
import BackIcon from "./icons/back.vue";
import DeleteIcon from "./icons/delete.vue";

export default {
  name: "DashboardVue",
  components: {
    ColorsVue,
    BackIcon,
    DeleteIcon,
  },
  data() {
    return {
      opacity: 100,
      radius: 0,
      lazy_radius: 0,
    };
  },
};
</script>

<style lang="scss">
.body {
  height: 10%;
  border-bottom: solid 0.2px #3a2f3b;
  width: 97vw;
  padding: 1rem;
  display: flex;
}
.sliders {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 90%;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;

  .slider {
    -webkit-appearance: none; /* Override default CSS styles */
    appearance: none;
    width: 10%;
    height: 5px;
    background: #160d18;
    outline: none;
    opacity: 0.7;
    border-radius: 3px;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 15px;
      height: 15px;
      background: #534057;
      cursor: pointer;
      border-radius: 5px;
    }
  }
}
</style>
