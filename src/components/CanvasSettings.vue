<template>
  <div class="settings_container">
    <button @click="toggleCanvasModal" class="close_button">
      <close-icon class="icon" />
    </button>
    <h1>Canvas</h1>
    <h2>Transparent Canvas</h2>
    <label class="switch">
      <input type="checkbox" />
      <span class="slider" @click="toggleisTransparent"></span>
    </label>
    <h2>Resize Canvas</h2>
    <ul>
      <li>
        width
        <input type="text" @input="setCanvas(canvas)" v-model="canvas.width" />
      </li>
      <li>height <input type="text" v-model="canvas.height" /></li>
    </ul>
    <article>Adjusting the canvas dimension resets the canvas.</article>
    <select name="Pixels">
      <option class="option" value="Pixels">Pixels</option>
      <option class="option" value="Pixels">Percent</option>
    </select>

    <h2>Rotate and Flip</h2>
    <div class="buttons_Rotate">
      <button>⇽</button>
      <button>⇾</button>
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
  methods: {
    ...mapActions(["setCanvas"]),
    ...mapMutations(["toggleCanvasModal", "toggleisTransparent"]),
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
  article {
    margin: 1.5rem;
    color: #747272;
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
    margin-bottom: 20vh;
    appearance: none;
    .option {
      height: 2.5rem;
      border-radius: none;
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
  .switch {
    position: relative;
    display: inline-block;
    width: 2.5rem;
    height: 1.1rem;
    .slider {
      position: absolute;
      top: 0;
      background-color: transparent;
      -webkit-transition: 0.4s;
      transition: 0.4s;
      height: 100%;
      width: 100%;
      border-radius: 20px;
      border: solid black 2px;
      &::before {
        position: absolute;
        content: "";
        height: 0.75rem;
        width: 0.75rem;
        left: 4px;
        bottom: 3px;
        background-color: rgb(0, 0, 0);
        transition: 0.4s;
        border-radius: 50%;
      }
    }
    input {
      opacity: 0;
      width: 0;
      height: 0;
      &:checked + .slider {
        background-color: #2196f3;
        border: solid #2196f3 2px;
      }
      &:focus + .slider {
        box-shadow: 0 0 1px #2196f3;
      }
      &:checked + .slider::before {
        transform: translateX(1.25rem);
        background-color: #fff;
      }
    }
  }
}
</style>
