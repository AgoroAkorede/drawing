import { createStore } from "vuex";

export default createStore({
  state: {
    color: "#fff",
    radius: 10,
  },
  getters: {},
  mutations: {},
  actions: {
    setColorRed({ state }) {
      state.color = "red";
    },
    setColorBlue({ state }) {
      state.color = "blue";
    },
    setColorYellow({ state }) {
      state.color = "yellow";
    },
    setColorWhite({ state }) {
      state.color = "white";
    },
    setColorPurple({ state }) {
      state.color = "purple";
    },
    setColorGrey({ state }) {
      state.color = "grey";
    },
    setColorGreen({ state }) {
      state.color = "green";
    },
    setColorPink({ state }) {
      state.color = "pink";
    },
    setColorBlack({ state }) {
      state.color = "black";
    },
    setColorAqua({ state }) {
      state.color = "aqua";
    },
    setColorMangeta({ state }) {
      state.color = "mangenta";
    },
    setColorDefault({ state }) {
      state.color = "#2a192d";
    },
    setRadius({ state }) {
      console.log(state.radius);
    },
  },
});
