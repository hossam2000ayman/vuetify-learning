<template>
  <v-layout>
    <v-card
      min-width="100%"
      min-height="50vh"
      class="pa-10 text-center"
      variant="outlined"
    >
      {{ myInput }}
      <v-text-field
        variant="outlined"
        type="email"
        v-model="myInput"
        label="Enter your email"
        :error-messages="errorMessage_1"
      ></v-text-field>

      <v-textarea
        variant="outlined"
        no-resize
        rows="10"
        label="Enter your notes"
        v-model="myTextAreaInput"
        :error-messages="errorMessage_2"
      ></v-textarea>
      <v-btn @click="validate" class="mt-3">Validate</v-btn>
    </v-card>
  </v-layout>
</template>

<script setup>
import { ref } from "vue";

const myInput = ref(null);
const myTextAreaInput = ref(null);

const errorMessage_1 = ref(null);
const errorMessage_2 = ref(null);

const validate = () => {
  errorMessage_1.value = "";
  errorMessage_2.value = "";
  if (!myInput.value) {
    errorMessage_1.value = "please enter your email";
  } else if (!myInput.value.includes("@") || !myInput.value.includes(".com")) {
    errorMessage_1.value = "please enter valid email";
  }
  if (!myTextAreaInput.value) {
    errorMessage_2.value = "please enter your notes";
  } else if (myTextAreaInput.value.length <= 10) {
    errorMessage_2.value = "please enter at least 10 character";
  }
};
</script>
<style scoped></style>
