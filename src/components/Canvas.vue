<template>
  <div class="container_canvas">
    <div class="hot_bar">
      <delete-icon @click="deleteCanvas(this)" />
      <back-icon @click="undoLast(this)"></back-icon>
      <save-icon @click.prevent="toggleSaveModal" />
      <transition name="pop" mode="out-in">
        <div
          class="save_parent"
          :style="saveModal ? { display: 'flex' } : { display: 'none' }"
          v-if="saveModal"
        >
          <input
            class="input"
            type="text"
            placeholder="Name"
            v-model="this.name"
            @input="setSaveName(this.name)"
          />
          <button class="save" @click.prevent="saveItem(this)">save</button>
          <button @click="toggleSaveModal" class="close_button">
            <close-icon class="icon" />
          </button>
        </div>
      </transition>
    </div>

    <div class="canvas">
      <canvas
        @mousedown="startPainting"
        @mouseup="finishedPainting"
        @mousemove="draw"
        @touchstart="startPainting"
        @touchend="draw"
        @touchmove="draw"
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
import { mapActions, mapMutations, mapState } from "vuex";
import DeleteIcon from "./icons/delete.vue";
import BackIcon from "./icons/back.vue";
import SaveIcon from "./icons/save.vue";
import CloseIcon from "./icons/close.vue";

export default {
  name: "CanvasVue",
  data() {
    return {
      ctx: null,
      painting: false,
      canvasVue: null,
      width: screen.availWidth,
      height: "525",
      name: "Default",
    };
  },
  computed: {
    myStyles() {
      return {
        display: "flex",
      };
    },
    ...mapState([
      "color",
      "radius",
      "opacity",
      "history",
      "isDrawing",
      "hardness",
      "index",
      "saveModal",
      "save",
    ]),
  },
  methods: {
    startPainting() {
      this.painting = true;
    },
    draw(e) {
      if (!this.painting) return;
      this.ctx.lineWidth = this.radius * 4;
      this.ctx.lineCap = "round";
      this.ctx.lineJoin = "round";
      this.ctx.lineTo(e.offsetX, e.offsetY);
      this.ctx.stroke();
      this.ctx.beginPath();
      this.ctx.strokeStyle = this.color;
      this.ctx.moveTo(e.offsetX, e.offsetY);
      this.ctx.globalAlpha = this.opacity / 100;
      this.ctx.filter = `blur(${this.hardness}px)`;
      this.ctx.closePath();
      this.ctx.shadowBlur = 10;
      // this.isDrawing = true;
    },
    finishedPainting() {
      this.painting = false;
      this.toggleisDrawing();
      this.ctx.beginPath();
      this.setHistory(this);
    },
    ...mapMutations(["toggleisDrawing", "toggleSaveModal"]),
    ...mapActions([
      "deleteCanvas",
      "undoLast",
      "setHistory",
      "saveItem",
      "setSaveName",
    ]),
  },
  components: {
    CursorVue,
    DeleteIcon,
    BackIcon,
    SaveIcon,
    CloseIcon,
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
    width: 95vw;
    height: 80vh;
    .cursor {
      display: none;
    }
    &:hover {
      .cursor {
        display: flex;
      }
    }
  }
  .hot_bar {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    cursor: default;
  }
  .save_parent {
    position: absolute;
    height: 7.5rem;
    width: 12.5rem;
    z-index: 100;
    border-radius: 0.25rem;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    justify-content: center;
    .input {
      border: solid #6c80da 2px;
      height: 2rem;
      border-radius: 0.25rem;
      &:focus {
        outline: solid #97d779 2px;
        border: none;
      }
    }
    .close_button {
      width: 1rem;
      height: 1rem;
      border: transparent;
      background-color: #f03131;
      position: absolute;
      top: 0;
      right: 0;
      cursor: pointer;
      border-radius: 50%;
      margin: 2px;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;
    }
    .save {
      background-color: #6c80da;
      border: none;
      height: 2rem;
      width: 4rem;
      border-radius: 0.25rem;
      align-self: flex-end;
      margin: 0.5rem;
      cursor: pointer;
      color: #fff;
    }
  }
  .pop-enter-active {
    animation: pop-up 1s linear forwards;
    transition: all 1s linear;
  }
  .pop-leave-active {
    animation: pop-down 1s linear forwards;
    transition: all 1s linear;
  }

  @keyframes pop-up {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes pop-down {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(0);
    }
  }
}
</style>
