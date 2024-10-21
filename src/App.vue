<template>
  <div class="d-flex align-center flex-column pa-6">
    <v-card width="70%" class="pa-5 text-center" heigth="500">
      <v-rating
        v-model="rating"
        color="warning"
        half-increments
        hover
        active-color="info"
        :length="labels.length"
        :item-labels="labels"
        size="70"
        ripple
        clearable
      >
        <template v-slot:item-label="props">
          <span style="font-size: 15px" :class="`text-${colors[props.index]}`">
            {{ props.label }}
          </span>
        </template>
      </v-rating>
    </v-card>
    {{ rating }}
  </div>
</template>

<script setup>
import { ref } from "vue";
const rating = ref(0);
const labels = ref(["bad", "fair", "good", "v.good", "excellent", "amazing"]);
const colors = ref(["error", "yellow", "warning", "info", "success"]);
</script>
