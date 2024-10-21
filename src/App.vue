<template>
  <div class="d-flex align-center flex-column pa-6">
    <v-card width="70%" class="pa-5 text-center" height="2000">
      <v-timeline side="start">
        <v-timeline-item
          v-for="(item, index) in items"
          :key="index"
          :icon="item.icon"
          :dot-color="item.color"
          :size="item.size"
        >
          <template v-slot:opposite>
            <p>Item number {{ index + 1 }}</p>
          </template>
          <v-card :color="item.color">
            <v-card-title>Card Title {{ index + 1 }}</v-card-title>
            <v-card-text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              nesciunt magni quas tempora neque deleniti laborum aperiam,
              aspernatur, consectetur quis maiores! Dolore necessitatibus at
              molestiae ex iste eaque pariatur vel?
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-card>
  </div>
</template>

<script setup>
import { ref } from "vue";
const items = ref([
  {
    color: "red-darken-1",
    icon: "mdi-close",
    size: "x-large",
  },
  {
    color: "yellow-darken-4",
    icon: "mdi-home",
    size: "large",
  },

  {
    color: "blue-darken-1",
    icon: "mdi-account",
    size: "small",
  },
  {
    color: "green-darken-1",
    icon: "mdi-check",
    size: "x-small",
  },
]);
</script>
