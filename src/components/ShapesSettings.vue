<template>
  <div class="settings_container">
    <button @click="toggleShapesModal" class="close_button">
      <close-icon class="icon" />
    </button>
    <h1>2D Shapes</h1>
    <h2>2D Shapes</h2>
    <ul class="shapes">
      <li>
        <svg
          class="icon"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
        >
          <path d="M0 0h32v32H0z" />
        </svg>
      </li>
      <li>
        <svg class="icon" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 14H5l5-9 5 9z" />
        </svg>
      </li>
      <li>
        <svg
          class="icon"
          xmlns="http://www.w3.org/2000/svg"
          width="1792"
          height="1792"
        >
          <path
            d="M1664 896q0 209-103 385.5T1281.5 1561 896 1664t-385.5-103T231 1281.5 128 896t103-385.5T510.5 231 896 128t385.5 103T1561 510.5 1664 896z"
          />
        </svg>
      </li>
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          class="icon"
        >
          <path
            d="M47.907 60 63.8 32 47.907 4H16.093L.201 32l15.893 28h31.813zM17.257 6h29.485L61.5 32 46.743 58H17.257L2.5 32 17.257 6z"
          />
        </svg>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
import CloseIcon from "./icons/close.vue";
export default {
  name: "ShapesSettings",
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
    ...mapMutations(["toggleShapesModal"]),
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
  .shapes {
    display: grid;
    li {
      .icon {
        fill: rgb(170, 166, 166);
        height: 1rem;
        width: 1em;
        // border: solid 2px rgb(22, 22, 22);
      }
    }
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
