<template>
  <div class="body">
    <colors-vue />
    <div class="sliders">
      <div class="slider_parent">
        <label>opacity: {{ this.opacity }} </label>
        <input
          class="slider"
          type="range"
          min="0"
          max="100"
          v-model="this.opacity"
          @input="setOpacity(this.opacity)"
        />
      </div>
      <div class="slider_parent">
        <label>radius: {{ this.radius }} </label>
        <input
          class="slider"
          type="range"
          min="1"
          max="36"
          v-model="this.radius"
          @input="setRadius(this.radius)"
        />
      </div>

      <div class="slider_parent">
        <label>lazy Radius: {{ lazy_radius }} </label>
        <input
          class="slider"
          type="range"
          min="-180"
          max="180"
          v-model="lazy_radius"
        />
      </div>

      <div class="slider_parent">
        <label>softness: {{ this.hardness }} </label>
        <input
          class="slider"
          type="range"
          min="0"
          max="50"
          v-model="this.hardness"
          @input="setHardness(this.hardness)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapActions, mapState, mapMutations } from "vuex";
import ColorsVue from "./Colors.vue";

export default {
  name: "DashboardVue",
  components: {
    ColorsVue,
  },
  data() {
    return {
      opacity: 100,
      lazy_radius: 0,
      radius: 10,
      hardness: 0,
    };
  },
  methods: {
    ...mapActions(["setRadius", "setOpacity", "setHardness"]),
  },
  computed: {
    ...mapState(["radius", "opacity", "hardness"]),
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
  .slider_parent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 25%;
    padding: 1rem;
    &:hover {
      background-color: #53405779;
    }
    .slider {
      -webkit-appearance: none; /* Override default CSS styles */
      appearance: none;
      width: 90%;
      height: 5px;
      background: #160d18;
      outline: none;
      opacity: 0.7;
      border-radius: 3px;
      -webkit-transition: 0.2s;
      transition: opacity 0.2s;
      margin-top: 1.5rem;
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
}
</style>
