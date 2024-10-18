<template>
  <v-layout>
    <v-card min-width="100%" class="pa-5" min-height="90vh" variant="outlined">
      {{ imageFile }}
      <v-file-input
        multiple
        v-model:model-value="imageFile"
        @update:model-value="renderImage"
        chips
        variant="outlined"
      ></v-file-input>

      <v-card>
        <img :src="imageUrl" alt="" class="pl-10" width="600px" />
      </v-card>
    </v-card>
  </v-layout>
</template>

<script setup>
import { ref } from "vue";

const imageFile = ref("");
const imageUrl = ref("");

const renderImage = () => {
  if (!imageFile.value[0]) {
    imageUrl.value = "";
    return;
  }
  console.log("validated");
  const file = imageFile.value[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.addEventListener("load", () => {
    console.log("File Reader :: ", reader.result);
    imageUrl.value = reader.result;
  });
};
</script>
<style scoped></style>
