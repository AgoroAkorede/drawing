import { createStore } from "vuex";

export default createStore({
  state: {
    isDrawing: 0,
    color: "#2a192d",
    activeColor: "#2a192d",
    radius: 5,
    lazy_radius: 10,
    opacity: 100,
    history: [],
    index: -1,
    hardness: 0,
    saveModal: false,
    canvasModal: false,
    shapesModal: false,
    isPixel: false,
    isTransparent: false,
    pageNo: 1,
    save: {
      item: "",
      name: "default",
    },
    canvas: {
      width: "862",
      height: "352",
    },
  },
  getters: {},
  mutations: {
    toggleisDrawing: (state) => {
      state.isDrawing++;
    },
    toggleisTransparent: (state) => {
      state.isTransparent = !state.isTransparent;
      state.color = "#fff";
      state.activeColor = "#fff";
    },
    toggleSaveModal: (state) => {
      state.saveModal = !state.saveModal;
    },
    toggleCanvasModal: (state) => {
      state.canvasModal = !state.canvasModal;
    },
    toggleShapesModal: (state) => {
      state.shapesModal = !state.shapesModal;
    },
  },
  actions: {
    setColorRed({ state }) {
      state.color = "#f06d31";
      state.activeColor = state.color;
    },
    setColorBlue({ state }) {
      state.color = "#6c80da";
      state.activeColor = state.color;
    },
    setColorYellow({ state }) {
      state.color = "yellow";
      state.activeColor = state.color;
    },
    setColorWhite({ state }) {
      state.color = "#fff";
      state.activeColor = state.color;
    },
    setColorPurple({ state }) {
      state.color = "purple";
      state.activeColor = state.color;
    },
    setColorGrey({ state }) {
      state.color = "grey";
      state.activeColor = state.color;
    },
    setColorGreen({ state }) {
      state.color = "#97d779";
      state.activeColor = state.color;
    },
    setColorPink({ state }) {
      state.color = "pink";
      state.activeColor = state.color;
    },
    setColorBlack({ state }) {
      state.color = "#0e0707";
      state.activeColor = state.color;
    },
    setColorAqua({ state }) {
      state.color = "#70dddd";
      state.activeColor = state.color;
    },
    setColorMangeta({ state }) {
      state.color = "#ff00ff";
      state.activeColor = state.color;
    },
    setColorDefault({ state }) {
      state.color = "#2a192d";
      state.activeColor = state.color;
    },
    setRadius({ state }, payload) {
      state.radius = payload;
    },
    setOpacity({ state }, payload) {
      state.opacity = payload;
    },
    setHardness({ state }, payload) {
      state.hardness = payload;
    },
    setSaveName({ state }, payload) {
      state.save.name = payload;
    },
    deleteCanvas({ state }, payload) {
      payload.ctx.clearRect(0, 0, state.canvas.width, state.canvas.height);
      state.history = [];
      state.index = -1;
      state.isDrawing = 0;
    },
    setCanvas({ state }, payload) {
      state.canvas.height = payload.height;
      state.canvas.width = payload.width;
    },
    setHistory({ state }, payload) {
      state.index += 1;
      payload.history.push(
        payload.ctx.getImageData(0, 0, state.canvas.width, state.canvas.height)
      );
    },
    undoLast({ commit, state, dispatch }, payload) {
      if (state.index <= 0) {
        dispatch("deleteCanvas", payload);
      } else {
        state.index -= 1;
        state.history.pop();
        payload.ctx.putImageData(state.history[state.index], 0, 0);
      }
      commit("toggleisDrawing");
    },

    saveItem({ state, dispatch }, payload) {
      if (state.isDrawing > 0) {
        state.save.item = payload.ctx.canvas.toDataURL("image/jpeg");
        const element = document.createElement("a");
        element.setAttribute("href", state.save.item);
        element.setAttribute("download", state.save.name);
        element.click();
        dispatch("deleteCanvas");
      }
    },

    createNewPage({ state, dispatch }, payload) {
      if (state.pageNo > 1) {
        console.log("Multiple pages detected");
        state.history = [];
      }
    },

    NextPage({ state, dispatch }, payload) {
      if (state.pageNo < 10) {
        state.pageNo++;
        dispatch("createNewPage");
      }
    },
    PreviousPage({ state, dispatch }, payload) {
      if (state.pageNo > 1) {
        state.pageNo--;
      }
    },
  },
});
