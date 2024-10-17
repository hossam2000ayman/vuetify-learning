<template>
  <v-layout>
    <v-card class="w-100">
      <!-- v-tabs is container of tabs -->

      <v-tabs
        v-model="tab"
        prev-icon="mdi-arrow-left"
        next-icon="mdi-arrow-right"
      >
        <v-tab variant="outlined" v-for="num in 20" :key="num" :value="num">
          <v-icon>mdi-home</v-icon>
          Tab {{ num }}
        </v-tab>
      </v-tabs>
      <!-- <v-tabs v-model="tab" fixed-tabs>
        <v-tab v-for="num in 3" :key="num" :value="num">
          <v-icon>mdi-home</v-icon>
          Tab {{ num }}
        </v-tab>
      </v-tabs> -->

      <!-- <v-tabs v-model="tab" bg-color="orange">
        <v-tab v-for="num in 20" :key="num" :value="num">
          <v-icon>mdi-home</v-icon>
          Tab {{ num }}
        </v-tab>
      </v-tabs> -->
      <!-- <v-tabs v-model="tab" center-active>
        <v-tab v-for="num in 20" :key="num" :value="num">
          <v-icon>mdi-home</v-icon>
          Tab {{ num }}
        </v-tab>
      </v-tabs> -->
      <!-- <v-tabs v-model="tab" align-tabs="center">
        <v-tab v-for="num in 20" :key="num" :value="num">
          <v-icon>mdi-home</v-icon>
          Tab {{ num }}
        </v-tab>
      </v-tabs> -->

      <!-- <v-tabs v-model="tab" stacked>
        <v-tab v-for="num in 4" :key="num" :value="num">
          <v-icon>mdi-home</v-icon>
          Tab {{ num }}
        </v-tab>
      </v-tabs> -->
      <!-- to map the content with it's tab we need to add component -->
      <!-- called window which parent of list of window-items  -->
      <v-window v-model="tab" class="mt-5">
        <v-window-item v-for="num in 20" :key="num" :value="num">
          <v-card>
            <v-title>card {{ num }} </v-title>
          </v-card>
        </v-window-item>
      </v-window>
    </v-card>
  </v-layout>
</template>

<script setup>
import { ref } from "vue";

const tab = ref("");
</script>
