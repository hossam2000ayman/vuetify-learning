<template>
  <v-layout>
    <v-app-bar
      elevation="0"
      style="border-bottom: 1px solid rgba(0, 0, 0, 0.1)"
      theme="light"
      color="white"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-app-bar-title style="color: white">My AppBar Title</v-app-bar-title>
      <v-icon class="mr-4">mdi-magnify</v-icon>
      <v-icon class="mr-4">mdi-heart</v-icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-app-bar>

    <v-app-bar elevation="2">
      <!-- <v-breadcrumbs :items="items" divider=">>"></v-breadcrumbs> -->
      <v-breadcrumbs :items="items" divider="-">
        <!-- If you need to make override on props then you can make it through template have v-slot:<name-of-props> -->
        <!-- so this will override the divider props in the parent component (v-breadcrumbs) -->
        <template v-slot:divider>
          <v-icon>mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>
    </v-app-bar>

    <v-bottom-navigation height="60" class="bg-cyan">
      <v-btn>
        <v-icon color="white">mdi-home</v-icon>
      </v-btn>
      <v-btn>
        <v-icon color="white">mdi-account</v-icon>
      </v-btn>
      <v-btn>
        <v-icon color="white">mdi-music</v-icon>
      </v-btn>
    </v-bottom-navigation>
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
