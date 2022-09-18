<template>
  <div class="container_canvas">
    <button @click="clearCanvas">Clear</button>
    <canvas
      @mousedown="startPainting"
      @mousemove="draw"
      @mouseup="finishedPainting"
      id="canvas"
      ref="canvas"
      width="1300"
      height="525"
      class="canvas"
    >
    </canvas>
    <cursor-vue />
  </div>
</template>

<script>
import CursorVue from "./Cursor.vue";
export default {
  name: "CanvasVue",
  data() {
    return {
      ctx: null,
      painting: false,
      canvasVue: null,
    };
  },
  methods: {
    startPainting() {
      this.painting = true;
    },
    draw(e) {
      if (!this.painting) return;
      this.ctx.lineWidth = 1;
      this.ctx.lineCap = "round";

      this.ctx.lineTo(e.offsetX, e.offsetY);
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.strokeStyle = "#FFF";
      this.ctx.moveTo(e.offsetX, e.offsetY);
    },
    finishedPainting() {
      this.painting = false;
      this.ctx.beginPath();
    },
    clearCanvas() {
      this.ctx.clearRect(0, 0, this.canvasVue.width, this.canvasVue.height);
    },
  },
  components: {
    CursorVue,
  },
  mounted() {
    const canvasX = this.$refs.canvas;
    this.ctx = canvasX.getContext("2d");
  },
};
</script>

<style lang="scss">
.container_canvas {
  display: flex;
  cursor: none;
  .canvas {
    border: solid #534057 1px;
  }
}
</style>
