<template>
  <v-layout>
    <v-card min-width="100%" class="pa-5" min-height="90vh" variant="outlined">
      <div v-if="selectedUser">Selected Name :: {{ selectedUser }}</div>
      <v-radio-group
        v-model="selectedUser"
        append-icon="mdi-home"
        prepend-icon="mdi-account"
        false-icon="mdi-close-outline"
        true-icon="mdi-check-outline"
      >
        <!-- v-radio-group is the parent of the radio button -->
        <v-radio label="Ahmed" value="_Ahmed"></v-radio>
        <v-radio label="Samy" value="_Samy"></v-radio>
      </v-radio-group>
      <!-- <v-text-field readonly value="disabled text"></v-text-field> -->
    </v-card>
  </v-layout>
</template>

<script setup>
import { ref } from "vue";

const selectedUser = ref(null);
</script>
<style scoped></style>
