<template>
  <v-layout>
    <v-app-bar :theme="switchTheme"></v-app-bar>
    <v-card
      min-width="100%"
      class="pa-5 mt-10"
      min-height="90vh"
      variant="outlined"
    >
      <v-switch
        :label="`Theme: ${switchTheme}`"
        v-model="switchTheme"
        false-value="light"
        true-value="dark"
      ></v-switch>
    </v-card>

    <v-footer app class="pa-5" :theme="switchTheme">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis error
        sit ad iure! Nulla cum voluptate inventore impedit, vel esse beatae
        quibusdam rerum, unde voluptatem explicabo eveniet nihil, asperiores
        iure!
      </p>
    </v-footer>
  </v-layout>
</template>

<script setup>
import { ref } from "vue";

const switchTheme = ref("light");
</script>
<style scoped></style>
