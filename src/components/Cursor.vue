<template>
  <div>
    <div :style="myStyles" class="custom_cursor">
      <div :style="myChild" class="cursor_child"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "CursorVue",
  data() {
    return {
      xChild: 0,
      yChild: 0,
      x: 0,
      y: 0,
    };
  },
  computed: {
    myStyles() {
      return {
        height: `${this.radius / 4}rem`,
        width: `${this.radius / 4}rem`,
        transform: `translateX(${this.x}px)
       translateY(${this.y}px)`,
        background: `${this.color}`,
        opacity: `${this.opacity / 100}`,
        filter: `blur(${this.hardness}px)`,
      };
    },
    myChild() {
      return {
        height: `${this.radius / 20}rem`,
        width: `${this.radius / 20}rem`,
        transform: `translateX(${this.xChild}px) translateY(${this.yChild}px)`,
        background: `#000`,
        borderRadius: "50%",
        position: "absolute",
        top: "10px",
        left: "-10px",
      };
    },
    ...mapState(["color", "radius", "opacity", "hardness"]),
  },
  methods: {
    moveCursor(e) {
      this.x = e.clientX;
      this.y = e.clientY;
      // this.xChild = e.clientX - 15;
      // this.yChild = e.clientY - 15;
    },
  },
  mounted() {
    document.addEventListener("mousemove", this.moveCursor);
    document.addEventListener("touchmove", this.moveCursor);
    document.addEventListener("mouseleave", (e) => {
      this.hideCursor = true;
    });
    document.addEventListener("touchcancel", (e) => {
      this.hideCursor = true;
    });
    document.addEventListener("mouseenter", (e) => {
      this.hideCursor = false;
    });
    document.addEventListener("touchstart", (e) => {
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
  display: flex;
  justify-content: center;
  align-items: center;
  .cursor_child {
    height: 5rem;
    width: 5rem;
    color: rgb(233, 19, 19);
    z-index: 1000;
  }
}
</style>
