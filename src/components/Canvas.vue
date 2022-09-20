<template>
  <div class="container_canvas">
    <delete-icon @click="clearCanvas" />
    <div class="canvas">
      <canvas
        @mousedown="startPainting"
        @mousemove="draw"
        @mouseup="finishedPainting"
        id="canvas"
        ref="canvas"
        :width="width"
        :height="height"
      >
      </canvas>
      <div class="cursor" :class="{ backgroundColor: color }">
        <cursor-vue />
      </div>
    </div>
  </div>
</template>

<script>
import CursorVue from "./Cursor.vue";
import { mapState } from "vuex";
import DeleteIcon from "./icons/delete.vue";
export default {
  name: "CanvasVue",
  data() {
    return {
      ctx: null,
      painting: false,
      canvasVue: null,
      width: "1300",
      height: "525",
    };
  },
  computed: {
    ...mapState(["color", "radius"]),
  },
  methods: {
    startPainting() {
      this.painting = true;
    },
    draw(e) {
      if (!this.painting) return;
      this.ctx.lineWidth = this.radius;
      this.ctx.lineCap = "round";

      this.ctx.lineTo(e.offsetX, e.offsetY);
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.strokeStyle = this.color;
      this.ctx.moveTo(e.offsetX, e.offsetY);
    },
    finishedPainting() {
      this.painting = false;
      this.ctx.beginPath();
      console.log(this.color);
    },
    clearCanvas() {
      this.ctx.clearRect(0, 0, this.width, this.height);
      // console.log(this.ctx.clearRect(0, 0, 1300, 525));
    },
  },
  components: {
    CursorVue,
    DeleteIcon,
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
    .cursor {
      display: none;
    }
    &:hover {
      .cursor {
        display: flex;
      }
    }
  }
}
</style>
