<template>
  <v-layout>
    <v-card min-width="100%" class="pa-5" min-height="90vh" variant="outlined">
      {{ range }}
      <v-slider
        :min="0"
        :max="10"
        v-model="range"
        step="0.25"
        color="red"
        track-color="blue"
        thumb-label="always"
        thumb-size="30"
        class="mt-6"
        append-icon="mdi-plus"
        prepend-icon="mdi-minus"
        @click:append="increment"
        @click:prepend="decrement"
      ></v-slider>
    </v-card>
  </v-layout>
</template>

<script setup>
import { ref } from "vue";

const range = ref(0);

const decrement = () => {
  range.value -= 1;
};

const increment = () => {
  range.value += 1;
};
</script>
<style scoped></style>
