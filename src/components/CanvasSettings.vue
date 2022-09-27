<template>
  <div class="settings_container">
    <button @click="toggleCanvasModal" class="close_button">
      <close-icon class="icon" />
    </button>
    <h1>Canvas</h1>
    <h2>Transparent Canvas</h2>
    <button class="transparent"></button>
    <h2>Resize Canvas</h2>
    <ul>
      <li>
        width
        <input type="text" @input="setCanvas(canvas)" v-model="canvas.width" />
      </li>
      <li>height <input type="text" v-model="canvas.height" /></li>
    </ul>
    <select name="Pixels">
      <option value="Pixels">Pixels</option>
      <!-- <option value="Percent">Percent</option> -->
    </select>

    <h2>Rotate and Flip</h2>
    <div class="buttons_Rotate">
      <button @click="rotateCanvas(canvas)">⇽</button>
      <button @click="rotateCanvas(canvas)">⇾</button>
      <button>◮</button>
      <button>◭</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
import CloseIcon from "./icons/close.vue";
export default {
  name: "CanvasSettings",
  data() {
    return {
      ctx: null,
    };
  },
  computed: {
    ...mapState(["canvas"]),
  },
  // mounted() {
  //   const canvasX = this.$refs.canvas;
  //   this.ctx = canvasX.getContext("2d");
  // },
  methods: {
    ...mapActions(["setCanvas", "rotateCanvas"]),
    ...mapMutations(["toggleCanvasModal"]),
  },
  components: {
    CloseIcon,
  },
};
</script>

<style lang="scss">
.settings_container {
  background-color: rgba(243, 243, 243, 0.993);
  color: black;
  height: 100%;
  width: 20vw;
  z-index: 5;
  position: absolute;
  right: 0;
  top: 0;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", h1 {
    font-size: 1.3rem;
    color: blueviolet;
    font-weight: 100;
  }
  .close_button {
    width: 1.25rem;
    height: 1.25rem;
    border: transparent;
    background-color: #f03131;
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    border-radius: 50%;
    margin: 2px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
  h2 {
    font-size: 0.85rem;
    font-weight: 100;
  }
  ul {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: flex-start;
    li {
      list-style: none;
      margin-right: 1rem;
      display: flex;
      padding: 0.25rem;
      flex-direction: column;
      color: #747272;
      input {
        margin: 0.45rem 0;
        width: 4rem;
        height: 1.5rem;
        border: #9e9e9e solid 1px;
        &:focus {
          outline: none;
        }
      }
    }
  }
  select {
    height: 2.5rem;
    border: #9e9e9e solid 1px;
    margin-bottom: 30vh;
    option {
      height: 2.5rem;
    }
    &:focus,
    &:hover {
      border: none;
      outline: solid 1px blue;
    }
  }
  .buttons_Rotate {
    button {
      height: 3rem;
      width: 3rem;
      margin: 0.25rem;
      font-size: 1.2rem;
      &:hover {
        background-color: transparent;
        border: blue solid 1px;
        color: blue;
      }
      &:last-child {
        transform: rotate(270deg);
      }
    }
  }
}
</style>
