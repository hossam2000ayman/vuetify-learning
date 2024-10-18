<template>
  <v-layout>
    <v-card min-width="100%">
      <v-card-title v-if="searchTxt">
        Search Text :: {{ searchTxt }}
      </v-card-title>
      <v-card-title v-if="writeTxt">
        Write Text :: {{ writeTxt }}
      </v-card-title>
      <v-autocomplete
        :items="items"
        v-model="searchTxt"
        v-model:search="writeTxt"
        no-data-text="لا يوجد بيانات"
        variant="outlined"
        :error-messages="errorMessage"
      ></v-autocomplete>
      <v-btn @click="validate">Submit</v-btn>
    </v-card>
  </v-layout>
</template>

<script setup>
import { ref } from "vue";

const searchTxt = ref(null);
const writeTxt = ref(null);
const errorMessage = ref(null);
const items = ref([
  "Ahmed",
  "Ayman",
  "Mohamed",
  "Hossam",
  "Moaz",
  "Mahmoud",
  "Amr",
  "Abdullah",
]);

const validate = () => {
  errorMessage.value = "";
  if (!searchTxt.value) {
    errorMessage.value = "برجاء ادخال الاسم ";
  }
};
</script>
<style scoped></style>
