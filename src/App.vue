<template>
  <div class="d-flex align-center flex-column pa-6">
    <v-card width="70%">
      <v-slide-group v-model="selectedItem" mandatory>
        <v-slide-group-item
          v-for="num in 25"
          :key="num"
          v-slot="{ isSelected, toggle }"
          :value="`Item : ${num}`"
        >
          <v-card
            width="200"
            class="mr-3"
            @click="toggle"
            v-bind="isSelected"
            :color="isSelected ? 'primary' : ''"
          >
            <v-card-title>Card Number : {{ num }} </v-card-title>
            <v-card-text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
              quis odio dolorem voluptatem vero harum dicta fuga ipsa maxime.
              Totam pariatur nostrum asperiores culpa similique, dignissimos
              earum aperiam necessitatibus. Praesentium?
            </v-card-text>
          </v-card>
        </v-slide-group-item>
      </v-slide-group>
      {{ selectedItem }}
    </v-card>
  </div>
</template>

<script setup>
import { ref } from "vue";

const selectedItem = ref("");
</script>
