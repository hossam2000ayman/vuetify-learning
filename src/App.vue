<template>
  <v-layout>
    <v-card min-width="100%" min-height="50vh" class="pa-10" variant="outlined">
      <v-card-title v-if="selectedGroup"> {{ selectedGroup }}</v-card-title>
      <v-select
        :items="names"
        variant="outlined"
        v-model="selectedGroup"
        :error-messages="errorMessage_1"
        autofocus
        multiple
        item-title="text"
        item-value="number"
      ></v-select>

      <v-card-title v-if="selectedName"> {{ selectedName }}</v-card-title>
      <v-select
        :items="names"
        variant="outlined"
        v-model="selectedName"
        :error-messages="errorMessage_2"
        autofocus
        item-title="text"
        item-value="number"
        return-object
      ></v-select>
      <v-btn @click="validate">Submit</v-btn>
    </v-card>
  </v-layout>
</template>

<script setup>
import { ref } from "vue";
const selectedName = ref(null);
const selectedGroup = ref(null);
const errorMessage_1 = ref(null);
const errorMessage_2 = ref(null);
const names = ref([
  //title , value can we defined by component by default not other key or you have to define it explicity instead for implicity way
  //in case if you want to define it into v-select or any form component by item-title
  {
    text: "_Ahmed",
    title: "Ahmed",
    number: "_1",
    value: 1,
  },
  {
    text: "_Hossam",
    title: "Hossam",
    number: "_2",
    value: 2,
  },
  {
    text: "_Moaz",
    title: "Moaz",
    number: "_3",
    value: 3,
  },
  {
    text: "_Mahmoud",
    title: "Mahmoud",
    number: "_4",
    value: 4,
  },
  {
    text: "_Metwaly",
    title: "Metwaly",
    number: "_5",
    value: 5,
  },
  {
    text: "_Ayman",
    title: "Ayman",
    number: "_6",
    value: 6,
  },
  {
    text: "_Samer",
    title: "Samer",
    number: "_7",
    value: 7,
  },
]);

const validate = () => {
  errorMessage_1.value = "";
  errorMessage_2.value = "";
  if (!selectedGroup.value || selectedGroup.value.length === 0) {
    errorMessage_1.value = "برجاء اختار الاسم";
  } else if (selectedGroup.value.length <= 1) {
    errorMessage_1.value = "برجاء اختيار اكتر من مستخدم واحد";
  }
  if (!selectedName.value) {
    errorMessage_2.value = "برجاء اختار الاسم";
  }
};
</script>
<style scoped></style>
