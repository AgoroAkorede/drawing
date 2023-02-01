<template>
  <div class="home">
    <dashboard-vue />
    <!-- <div class="canvases">
      <div v-for="canvas in PageNo" :key="canvas">
        {{ canvas }}
        <canvas-vue />
      </div>
    </div> -->
    <canvas-vue />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapActions, mapState, mapMutations } from "vuex";
import DashboardVue from "@/components/dashboard.vue";
import CanvasVue from "@/components/Canvas.vue";

export default {
  components: {
    DashboardVue,
    CanvasVue,
  },
  data() {
    return {
      PageNo: 1,
    };
  },
  computed: {
    ...mapState(["PageNo"]),
  },
};
// export default class HomeView extends Vue {}
</script>

<style lang="scss">
.home {
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: scroll;
  align-items: center;
  max-width: 100vw;
  height: 100%;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS";
  &::-webkit-scrollbar {
    display: none;
  }
  .canvases {
    display: flex;
    flex-direction: row;
    position: absolute;
    left: 0;
    top: 22.5%;
    /* width: 100vw; */
    overflow: hidden;
    transform: translate(-10%);
    div {
      margin-left: 1rem;
      margin-right: 7.5vw;
      max-height: 65vh;
      padding: 0;
    }
  }
}
</style>
