<template>
  <div class="d-flex align-center flex-column pa-6">
    <v-card width="70%">
      <v-table
        height="200"
        hover
        density="compact"
        fixed-header
        fixed-footer
        theme="dark"
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Favorite Sport</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.age }}</td>
            <td>{{ item.favoriteSport }}</td>
            <td>{{ item.country }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td class="bg-white">Table Data</td>
            <td class="bg-white" colspan="3">Users</td>
          </tr>
        </tfoot>
      </v-table>
    </v-card>
  </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
  {
    name: "Hossam",
    age: 24,
    favoriteSport: "football",
    country: "Egypt",
  },

  {
    name: "Mahmoud",
    age: 27,
    favoriteSport: "football",
    country: "Egypt",
  },

  {
    name: "Moaz",
    age: 22,
    favoriteSport: "football",
    country: "Egypt",
  },

  {
    name: "Salem",
    age: 21,
    favoriteSport: "football",
    country: "Egypt",
  },

  {
    name: "John",
    age: 20,
    favoriteSport: "football",
    country: "Egypt",
  },

  {
    name: "Hossam",
    age: 24,
    favoriteSport: "football",
    country: "Egypt",
  },

  {
    name: "Mahmoud",
    age: 27,
    favoriteSport: "football",
    country: "Egypt",
  },

  {
    name: "Moaz",
    age: 22,
    favoriteSport: "football",
    country: "Egypt",
  },

  {
    name: "Salem",
    age: 21,
    favoriteSport: "football",
    country: "Egypt",
  },

  {
    name: "John",
    age: 20,
    favoriteSport: "football",
    country: "Egypt",
  },

  {
    name: "Hossam",
    age: 24,
    favoriteSport: "football",
    country: "Egypt",
  },

  {
    name: "Mahmoud",
    age: 27,
    favoriteSport: "football",
    country: "Egypt",
  },

  {
    name: "Moaz",
    age: 22,
    favoriteSport: "football",
    country: "Egypt",
  },

  {
    name: "Salem",
    age: 21,
    favoriteSport: "football",
    country: "Egypt",
  },

  {
    name: "John",
    age: 20,
    favoriteSport: "football",
    country: "Egypt",
  },

  {
    name: "Hossam",
    age: 24,
    favoriteSport: "football",
    country: "Egypt",
  },

  {
    name: "Mahmoud",
    age: 27,
    favoriteSport: "football",
    country: "Egypt",
  },

  {
    name: "Moaz",
    age: 22,
    favoriteSport: "football",
    country: "Egypt",
  },

  {
    name: "Salem",
    age: 21,
    favoriteSport: "football",
    country: "Egypt",
  },

  {
    name: "John",
    age: 20,
    favoriteSport: "football",
    country: "Egypt",
  },

  {
    name: "Hossam",
    age: 24,
    favoriteSport: "football",
    country: "Egypt",
  },

  {
    name: "Mahmoud",
    age: 27,
    favoriteSport: "football",
    country: "Egypt",
  },

  {
    name: "Moaz",
    age: 22,
    favoriteSport: "football",
    country: "Egypt",
  },

  {
    name: "Salem",
    age: 21,
    favoriteSport: "football",
    country: "Egypt",
  },

  {
    name: "John",
    age: 20,
    favoriteSport: "football",
    country: "Egypt",
  },

  {
    name: "Hossam",
    age: 24,
    favoriteSport: "football",
    country: "Egypt",
  },

  {
    name: "Mahmoud",
    age: 27,
    favoriteSport: "football",
    country: "Egypt",
  },

  {
    name: "Moaz",
    age: 22,
    favoriteSport: "football",
    country: "Egypt",
  },

  {
    name: "Salem",
    age: 21,
    favoriteSport: "football",
    country: "Egypt",
  },

  {
    name: "John",
    age: 20,
    favoriteSport: "football",
    country: "Egypt",
  },
]);
</script>
<style scoped></style>
