<template>
  <div class="body">
    <colors-vue />
    <div class="sliders">
      <div class="slider_parent">
        <label>opacity: {{ opacity }} </label>
        <input
          class="slider"
          type="range"
          min="0"
          max="100"
          v-model="opacity"
          @input="setOpacity(opacity)"
        />
      </div>
      <div class="slider_parent">
        <label>radius: {{ radius }} </label>
        <input
          class="slider"
          type="range"
          min="1"
          max="36"
          v-model="radius"
          @input="setRadius(radius)"
        />
      </div>

      <div class="slider_parent">
        <label>softness: {{ hardness }} </label>
        <input
          class="slider"
          type="range"
          min="0"
          max="50"
          v-model="hardness"
          @input="setHardness(hardness)"
        />
      </div>
      <div class="slider_parent">
        <label>zoom: {{ zoom }} </label>
        <input
          class="slider"
          type="range"
          min="0"
          max="100"
          v-model="zoom"
          @input="setHardness(hardness)"
        />
      </div>
    </div>
    <div @click="toggleCanvasModal" class="canvas_settings">
      <canvas-icon />
      Canvas
    </div>
    <transition name="translate">
      <canvas-settings v-if="canvasModal" />
    </transition>

    <div @click="toggleShapesModal" class="canvas_settings">
      <shapes-icon />
      Shapes
    </div>
    <transition name="translate">
      <shapes-settings v-if="shapesModal" />
    </transition>
  </div>
  <div class="page_no">
    <button class="page_btn" @click="PreviousPage">⇽</button> {{ pageNo }}
    <button class="page_btn" @click="NextPage">⇾</button>
  </div>
</template>

<script lang="ts">
import { mapActions, mapState, mapMutations } from "vuex";
import ColorsVue from "./Colors.vue";
import CanvasSettings from "./CanvasSettings.vue";
import ShapesSettings from "./ShapesSettings.vue";
import CanvasIcon from "./icons/CanvasIcon.vue";
import ShapesIcon from "./icons/ShapesIcon.vue";

export default {
  name: "DashboardVue",
  components: {
    ColorsVue,
    CanvasSettings,
    ShapesSettings,
    CanvasIcon,
    ShapesIcon,
  },
  data() {
    return {
      opacity: 100,
      lazy_radius: 0,
      radius: 5,
      hardness: 0,
      zoom: 100,
    };
  },
  methods: {
    ...mapActions([
      "setRadius",
      "setOpacity",
      "setHardness",
      "PreviousPage",
      "NextPage",
    ]),
    ...mapMutations(["toggleShapesModal", "toggleCanvasModal"]),
  },
  computed: {
    ...mapState([
      "radius",
      "opacity",
      "hardness",
      "shapesModal",
      "canvasModal",
      "pageNo",
      "zoom",
    ]),
  },
};
</script>

<style lang="scss">
.body {
  // height: 5rem;
  border-bottom: solid 0.2px #3a2f3b;
  width: 97vw;
  padding: 1rem;
  display: flex;
  /* position: fixed; */
  top: 0;
  @media (max-width: 33rem) {
    // padding: 0;
    width: 90vw;
  }
  @media (max-width: 22rem) {
    // padding: 0;
    width: 100vw;
  }
  .canvas_settings {
    height: 6rem;
    width: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
      background-color: #53405779;
    }
  }
  .sliders {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 90%;
    font-size: 1.2rem;
    text-transform: uppercase;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    @media (max-width: 33rem) {
      font-size: 0.8rem;
    }

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
          @media (max-width: 22rem) {
            width: 10px;
            height: 10px;
          }
          @media (max-width: 33rem) {
            width: 10px;
            height: 10px;
          }
        }
      }
    }
  }
  .translate-enter-active {
    animation: translate-left 1s linear forwards;
    transition: all 1s linear;
  }
  .translate-leave-active {
    animation: translate-right 1s linear forwards;
    transition: all 1s linear;
  }
  @keyframes translate-left {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0%);
    }
  }
  @keyframes translate-right {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(100%);
    }
  }
}

.page_no {
  font-size: 1.25rem;
  color: white;
  .page_btn {
    background-color: transparent;
    border: none;
    padding: none;
    font-size: 1.25rem;
    cursor: pointer;
  }
}
</style>
