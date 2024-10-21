<template>
  <div class="d-flex align-center flex-column pa-6">
    <v-card width="70%" class="pa-5 text-center" height="400">
      <v-snackbar
        v-model="showSnackbar"
        timeout="3000"
        color="success"
        variant="outlined"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nesciunt
        magni quas tempora neque deleniti laborum aperiam, aspernatur,
        consectetur quis maiores! Dolore necessitatibus at molestiae ex iste
        eaque pariatur vel?
        <template v-slot:actions>
          <v-btn @click="showSnackbar = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </template>
      </v-snackbar>
      <v-btn @click="showSnackbar = !showSnackbar">Show Snackbar </v-btn>
    </v-card>
  </div>
</template>

<script setup>
import { ref } from "vue";
const showSnackbar = ref(false);
</script>
