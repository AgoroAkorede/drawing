<template>
  <div :style="cursorCircle" class="custom_cursor"></div>
</template>

<script>
export default {
  name: "CursorVue",
  data() {
    return {
      x: 0,
      y: 0,
      color: "#fff",
    };
  },
  computed: {
    cursorCircle() {
      return `transform:
      translateX(${this.x}px)
       translateY(${this.y}px)`;
    },
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
  width: 30px;
  height: 30px;
  background-color: #fff;
  border-radius: 100%;
  z-index: 55;
  backface-visibility: hidden;
  transition: opacity 0.6s ease;
}
</style>
