<template>
  <v-layout>
    <v-app-bar
      elevation="0"
      style="border-bottom: 1px solid rgba(255, 255, 255, 0.2)"
      theme="light"
      color="blue"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-app-bar-title style="color: white">My AppBar Title</v-app-bar-title>
      <v-icon class="mr-4">mdi-magnify</v-icon>
      <v-icon class="mr-4">mdi-heart</v-icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-app-bar>

    <v-app-bar elevation="2" color="blue">
      <!-- <v-breadcrumbs :items="items" divider=">>"></v-breadcrumbs> -->
      <v-breadcrumbs color="white" :items="items" divider="-">
        <!-- If you need to make override on props then you can make it through template have v-slot:<name-of-props> -->
        <!-- so this will override the divider props in the parent component (v-breadcrumbs) -->
        <template v-slot:divider>
          <v-icon color="white">mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>
    </v-app-bar>

    <v-system-bar color="purple" elevation="10">
      <v-icon class="mr-2">mdi-signal</v-icon>
      <v-icon class="mr-2">mdi-wifi-strength-3</v-icon>
      <v-icon class="mr-2">mdi-battery</v-icon>
      <span>08:00 PM</span>
    </v-system-bar>

    <v-footer class="bg-green flex-column" elevation="20" :app="true">
      <p style="color: white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt enim
        iure molestiae sequi dicta eveniet quis dolorem. Minima, esse eius
        adipisci dicta provident explicabo autem sapiente impedit ullam libero
        sunt!
      </p>
      <v-container>
        <v-icon color="white">mdi-home</v-icon>
        <v-icon color="white">mdi-twitter</v-icon>
        <v-icon color="white">mdi-facebook</v-icon>
        <v-icon color="white">mdi-instagram</v-icon>
      </v-container>
    </v-footer>
  </v-layout>
  <router-view />
</template>

<script setup>
import { ref } from "vue";

const items = ref(["test 1", "test 2", "test 3"]);
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.v-toolbar-title__placeholder {
  width: fit-content;
}
</style>
