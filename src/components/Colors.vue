<template>
  <div class="container">
    <div
      class="red"
      @click.prevent="setColorRed"
      :style="
        activeColor === '#f06d31'
          ? { outline: 'white solid 2px' }
          : { outline: none }
      "
    ></div>
    <div
      class="blue"
      @click.prevent="setColorBlue"
      :style="
        activeColor === '#6c80da'
          ? { outline: 'white solid 2px' }
          : { outline: none }
      "
    ></div>
    <div
      class="white"
      @click.prevent="setColorWhite"
      :style="
        activeColor === '#fff'
          ? { outline: 'white solid 2px' }
          : { outline: none }
      "
    ></div>
    <div
      class="yellow"
      @click.prevent="setColorYellow"
      :style="
        activeColor === 'yellow'
          ? { outline: 'white solid 2px' }
          : { outline: none }
      "
    ></div>
    <div
      class="purple"
      @click.prevent="setColorPurple"
      :style="
        activeColor === 'purple'
          ? { outline: 'white solid 2px' }
          : { outline: none }
      "
    ></div>
    <div
      class="grey"
      @click.prevent="setColorGrey"
      :style="
        activeColor === 'grey'
          ? { outline: 'white solid 2px' }
          : { outline: none }
      "
    ></div>
    <div
      class="green"
      @click.prevent="setColorGreen"
      :style="
        activeColor === '#97d779'
          ? { outline: 'white solid 2px' }
          : { outline: none }
      "
    ></div>
    <div
      class="pink"
      @click.prevent="setColorPink"
      :style="
        activeColor === 'pink'
          ? { outline: 'white solid 2px' }
          : { outline: none }
      "
    ></div>
    <div
      class="black"
      @click.prevent="setColorBlack"
      :style="
        activeColor === '#0e0707'
          ? { outline: 'white solid 2px' }
          : { outline: none }
      "
    ></div>
    <div
      class="aqua"
      @click.prevent="setColorAqua"
      :style="
        activeColor === '#70dddd'
          ? { outline: 'white solid 2px' }
          : { outline: none }
      "
    ></div>
    <div
      class="mangenta"
      @click.prevent="setColorMangeta"
      :style="
        activeColor === '#ff00ff'
          ? { outline: 'white solid 2px' }
          : { outline: none }
      "
    ></div>
    <div
      class="default"
      @click.prevent="setColorDefault"
      :style="
        activeColor === '#2a192d'
          ? { outline: 'white solid 2px' }
          : { outline: none }
      "
    ></div>
  </div>
</template>

<script lang="ts">
import { mapActions, mapState } from "vuex";
export default {
  name: "ColorsVue",
  methods: {
    ...mapActions([
      "setColorRed",
      "setColorBlue",
      "setColorWhite",
      "setColorYellow",
      "setColorPurple",
      "setColorGrey",
      "setColorGreen",
      "setColorPink",
      "setColorAqua",
      "setColorBlack",
      "setColorMangeta",
      "setColorDefault",
    ]),
  },
  computed: {
    ...mapState(["activeColor"]),
  },
};
</script>

<style lang="scss">
.container {
  display: grid;
  grid-gap: 0.25rem;
  grid-template-columns: repeat(4, 1rem);
  margin: 1rem;
  cursor: pointer;
  @mixin icon {
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
  }
  .red {
    background-color: #f06d31;
    @include icon();
    // outline: white solid 2px;
  }
  .blue {
    background-color: #6c80da;
    @include icon();
  }
  .white {
    background-color: white;
    @include icon();
  }
  .yellow {
    background-color: yellow;
    @include icon();
  }
  .purple {
    background-color: purple;
    @include icon();
  }
  .grey {
    background-color: grey;
    @include icon();
  }
  .green {
    background-color: #97d779;
    @include icon();
  }
  .pink {
    background-color: pink;
    @include icon();
  }
  .black {
    background-color: #0e0707;
    @include icon();
  }
  .mangenta {
    background-color: #ff00ff;
    @include icon();
  }
  .default {
    background-color: #2a192d;
    @include icon();
    border: solid 1px #534057;
  }
  .aqua {
    background-color: #70dddd;
    @include icon();
  }
}
</style>
