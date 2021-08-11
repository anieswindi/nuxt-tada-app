<template>
  <div id="wrapper">
    <!-- <app-sidebar></app-sidebar> -->
    <div class="d-flex flex-column" id="content-wrapper">
      <div id="content">
        <!-- <app-header></app-header> -->
        <nuxt />
      </div>
    </div>

    <!-- <header>
      <nuxt-link to="/home">Home</nuxt-link>
      <nuxt-link to="/user">User</nuxt-link>
    </header>
    <nuxt />
    <footer>
      <p>&copy; 2021 - nuxt-tada-app</p>
    </footer> -->
  </div>
</template>

<style></style>

<script>
import Sidebar from "@/components/Sidebar.vue";
import Header from "@/components/Header.vue";

export default {
  components: {
    "app-header": Header,
    "app-sidebar": Sidebar
  }
};
</script>
