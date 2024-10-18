<template>
  <v-layout>
    <v-card min-width="100%" class="pa-5" min-height="90vh" variant="outlined">
      <v-row>
        <v-col cols="12">
          {{ selectedUsers }}
        </v-col>
        <v-col cols="3" v-for="user in users" :key="user.name">
          <v-card>
            <v-card-title> Name :: {{ user.name }}</v-card-title>
            <v-card-text> Age :: {{ user.age }} </v-card-text>

            <v-card-actions>
              <v-checkbox
                v-model="selectedUsers"
                :value="user"
                label="select"
              ></v-checkbox>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-layout>
</template>

<script setup>
import { ref } from "vue";

const users = ref([
  {
    name: "Ahmed",
    age: 29,
  },
  {
    name: "Mohamed",
    age: 23,
  },
  {
    name: "Hossam",
    age: 24,
  },
  {
    name: "Hasan",
    age: 18,
  },
  {
    name: "Sameh",
    age: 25,
  },
]);

const selectedUsers = ref([]);
</script>
<style scoped></style>
