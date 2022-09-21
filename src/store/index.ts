import { createStore } from "vuex";

export default createStore({
  state: {
    isDrawing: false,
    color: "#fff",
    radius: 10,
    lazy_radius: 10,
    opacity: 100,
    history: [],
    index: -1,
  },
  getters: {},
  mutations: {},
  actions: {
    setColorRed({ state }) {
      state.color = "#f06d31";
    },
    setColorBlue({ state }) {
      state.color = "#6c80da";
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
      state.color = "#97d779";
    },
    setColorPink({ state }) {
      state.color = "pink";
    },
    setColorBlack({ state }) {
      state.color = "#0e0707";
    },
    setColorAqua({ state }) {
      state.color = "#70dddd";
    },
    setColorMangeta({ state }) {
      state.color = "#ff00ff";
    },
    setColorDefault({ state }) {
      state.color = "#2a192d";
    },
    setRadius({ state }, payload) {
      state.radius = payload;
    },
    setOpacity({ state }, payload) {
      state.opacity = payload;
    },
    deleteCanvas({ state }, payload) {
      payload.ctx.clearRect(0, 0, payload.width, payload.height);

      state.index = -1;
      state.history = [];
    },
    setHistory({ state }, payload) {
      payload.history.push(
        payload.ctx.getImageData(
          0,
          0,
          payload.ctx.canvas.width,
          payload.ctx.canvas.height
        )
      );

      state.index += 1;
    },
    undoLast({ state, dispatch }, payload) {
      if (state.index <= 0) {
        dispatch("deleteCanvas");
      } else {
        state.index -= 1;
        state.history.pop();
        payload.ctx.putImageData(state.history[state.index]);
      }
    },
  },
});
