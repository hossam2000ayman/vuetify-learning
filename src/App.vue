<template>
  <v-layout>
    <v-app-bar color="blue">
      <v-app-bar-nav-icon @click="isDrawer = !isDrawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-card min-width="100%">
      <v-navigation-drawer color="white" permanent rail expand-on-hover>
        <v-list nav>
          <v-list-item
            class="text-start"
            v-for="num in 5"
            :key="num"
            :value="num"
            prepend-icon="mdi-home"
            @click="console.log('clicked List', num)"
          >
            <v-list-item-title> List {{ num }} </v-list-item-title>
          </v-list-item>
          <v-list-group>
            <template v-slot:activator="{ props }">
              <v-list-item prepend-icon="mdi-account" v-bind="props">
                <v-list-item-title>Test</v-list-item-title>
              </v-list-item>
            </template>
            <v-list-item v-for="num in 8" :key="num">
              <v-list-item-title> Test {{ num }} </v-list-item-title>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </v-layout>
</template>

<script setup>
import { ref } from "vue";

const isDrawer = ref(false);
</script>
<style scoped>
.v-list .v-list-item--nav:not(:only-child) {
  display: flex;
  justify-content: flex-start;
}
</style>
