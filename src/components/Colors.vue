<template>
  <div class="container">
    <div class="red"></div>
    <div class="blue"></div>
    <div class="white"></div>
    <div class="yellow"></div>
    <div class="purple"></div>
    <div class="grey"></div>
    <div class="green"></div>
    <div class="pink"></div>
    <div class="black"></div>
    <div class="aqua"></div>
    <div class="mangenta"></div>
    <div class="default"></div>
  </div>
</template>

<script lang="ts">
export default {
  name: "ColorsVue",
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
