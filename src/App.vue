<template>
  <v-layout>
    <v-card min-height="60vh" min-width="100%" :loading="loading">
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-row style="height: 100%" v-if="!loading">
              <v-col cols="3" v-for="item in passengers.data" :key="item._id">
                <v-card>
                  <v-card-title>{{ item.name }}</v-card-title>
                  <v-card-title>{{ item.trips }}</v-card-title>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12">
            <v-card>
              <v-pagination
                rounded
                v-model="page"
                :length="passengers.totalPages"
                color="blue"
                @update:model-value="getData"
                prev-icon="mdi-arrow-left"
                next-icon="mdi-arrow-right"
              ></v-pagination>
            </v-card>
          </v-col>
          <v-col cols="12">
            <v-btn @click="getData">Fetch</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-layout>
</template>

<script setup>
import { onMounted, ref } from "vue";

const passengers = ref([]);
const page = ref(1);
const loading = ref(false);
onMounted(async () => {
  await getData();
});
const getData = async () => {
  loading.value = true;
  await fetch(
    `https://api.instantwebtools.net/v1/passenger?page=${
      page.value - 1
    }&size=10`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("data :: ", data);
      passengers.value = data;
    });
  loading.value = false;
};
</script>
<style scoped>
* {
  display: flex;
  text-align: center;
  width: 100%;
  justify-content: center;
  align-items: center;
}
</style>
