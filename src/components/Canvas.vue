<template>
  <div class="container_canvas">
    <canvas id="canvas" width="1300" height="525" class="canvas"> </canvas>
  </div>
  <div></div>
</template>

<script>
export default {
  name: "CanvasVue",
  data() {
    return {
      width: innerHeight,
      height: innerWidth,
    };
  },
};
</script>

<style lang="scss">
.container_canvas {
  display: flex;
  //   justify-content: center;
  .canvas {
    border: solid #534057 1px;
  }
}
</style>
