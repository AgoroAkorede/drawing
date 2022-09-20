<template>
  <div :style="cursorCircle" class="custom_cursor">
    <div :style="setColor" class="cursor_child"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "CursorVue",
  data() {
    return {
      x: 0,
      y: 0,
    };
  },
  computed: {
    cursorCircle() {
      return `transform:
      translateX(${this.x}px)
       translateY(${this.y}px)`;
    },
    setColor() {
      return `background-color: ${this.color}`;
    },
    ...mapState(["color"]),
  },
  methods: {
    moveCursor(e) {
      this.x = e.clientX;
      this.y = e.clientY;
    },
  },
  mounted() {
    document.addEventListener("mousemove", this.moveCursor);
    document.addEventListener("mouseleave", (e) => {
      this.hideCursor = true;
    });
    document.addEventListener("mouseenter", (e) => {
      this.hideCursor = false;
    });
  },
};
</script>

<style lang="scss">
.custom_cursor {
  pointer-events: none;
  user-select: none;
  top: 0;
  left: 0;
  position: fixed;
  width: 1rem;
  height: 1rem;
  border-radius: 100%;
  z-index: 55;
  backface-visibility: hidden;
  transition: opacity 0.6s ease;
  border: solid 1px #534057;
  overflow: hidden;
  .cursor_child {
    height: 100%;
    width: 100%;
  }
}
</style>
