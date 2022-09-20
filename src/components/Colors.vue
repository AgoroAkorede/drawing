<template>
  <div class="container">
    <div class="red" @click.prevent="setColorRed"></div>
    <div class="blue" @click.prevent="setColorBlue"></div>
    <div class="white" @click.prevent="setColorWhite"></div>
    <div class="yellow" @click.prevent="setColorYellow"></div>
    <div class="purple" @click.prevent="setColorPurple"></div>
    <div class="grey" @click.prevent="setColorGrey"></div>
    <div class="green" @click.prevent="setColorGreen"></div>
    <div class="pink" @click.prevent="setColorPink"></div>
    <div class="black" @click.prevent="setColorBlack"></div>
    <div class="aqua" @click.prevent="setColorAqua"></div>
    <div class="mangenta" @click.prevent="setColorMangenta"></div>
    <div class="default" @click.prevent="setColorDefault"></div>
  </div>
</template>

<script lang="ts">
import { mapActions } from "vuex";
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
      "setColorMangenta",
      "setColorDefault",
    ]),
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
  .red {
    background-color: red;
    height: 1rem;
    width: 1rem;
  }
  .blue {
    background-color: blue;
    height: 1rem;
    width: 1rem;
  }
  .white {
    background-color: white;
    height: 1rem;
    width: 1rem;
  }
  .yellow {
    background-color: yellow;
    height: 1rem;
    width: 1rem;
  }
  .purple {
    background-color: purple;
    height: 1rem;
    width: 1rem;
  }
  .grey {
    background-color: grey;
    height: 1rem;
    width: 1rem;
  }
  .green {
    background-color: green;
    height: 1rem;
    width: 1rem;
  }
  .pink {
    background-color: pink;
    height: 1rem;
    width: 1rem;
  }
  .black {
    background-color: black;
    height: 1rem;
    width: 1rem;
  }
  .mangenta {
    background-color: magenta;
    height: 1rem;
    width: 1rem;
  }
  .default {
    background-color: #2a192d;
    height: 1rem;
    width: 1rem;
    border: solid 1px #534057;
  }
  .aqua {
    background-color: aqua;
    height: 1rem;
    width: 1rem;
  }
}
</style>
