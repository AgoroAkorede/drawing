<template>
  <div class="container_canvas">
    <delete-icon @click="deleteCanvas(this)" />
    <button @click="undoLast(this)">UNDO</button>
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
import { mapActions, mapState } from "vuex";
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
    ...mapState(["color", "radius", "opacity", "history"]),
  },
  methods: {
    startPainting() {
      this.painting = true;
    },
    draw(e) {
      if (!this.painting) return;
      this.ctx.lineWidth = this.radius;
      this.ctx.lineCap = "round";
      this.ctx.lineJoin = "round";

      this.ctx.lineTo(e.offsetX, e.offsetY);
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.strokeStyle = this.color;
      this.ctx.moveTo(e.offsetX, e.offsetY);
      this.ctx.globalAlpha = this.opacity / 100;
      this.ctx.closePath();
      console.log(this.history);
    },
    finishedPainting() {
      this.painting = false;
      this.ctx.beginPath();
      this.setHistory(this);
    },
    // historyNos(e) {
    //   let hist = [];
    //   if (this.painting) {
    //     hist.push(e.offsetX);
    //   }
    // },
    ...mapState(["history"]),
    ...mapActions(["deleteCanvas", "undoLast", "setHistory"]),
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
