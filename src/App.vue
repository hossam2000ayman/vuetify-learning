<template>
  <v-layout>
    <v-card class="w-100">
      <v-progress-linear
        :indeterminate="loading"
        height="5"
        color="red"
      ></v-progress-linear>
      <v-progress-circular
        class="my-5"
        indeterminate
        size="10"
        width="5"
        v-if="loading"
      ></v-progress-circular>
      <v-btn @click="startLoading">Click Me </v-btn>
    </v-card>
  </v-layout>
</template>

<script setup>
import { ref } from "vue";

const loading = ref(false);
const startLoading = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 2000);
};
</script>
