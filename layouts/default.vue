<template>
  <div id="wrapper">
    <app-sidebar v-if="isAuth"></app-sidebar>
    <div class="d-flex flex-column" id="content-wrapper">
      <div id="content">
        <nuxt />
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
import Sidebar from "@/components/Sidebar.vue";
import Header from "@/components/Header.vue";

export default {
  data() {
    return {
      isAuth: true
    };
  },
  components: {
    "app-header": Header,
    "app-sidebar": Sidebar
  }
};
</script>
