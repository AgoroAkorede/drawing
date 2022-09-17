<template>
  <div class="home">
    <dashboard-vue />
    <canvas-vue />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import DashboardVue from "@/components/dashboard.vue";
import CanvasVue from "@/components/Canvas.vue";

@Options({
  components: {
    DashboardVue,
    CanvasVue,
  },
})
export default class HomeView extends Vue {}
</script>

<style lang="scss">
.home {
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  align-items: center;
  max-width: 100vw;
  max-height: 100vh;
}
</style>
