<template>
  <div class="d-flex align-center flex-column pa-6">
    <v-card width="70%">
      <v-chip-group v-model="sports" multiple color="red" variant="outlined">
        <v-chip value="Football" filter filter-icon="mdi-account">
          Football
        </v-chip>
        <v-chip value="Tennis" filter>Tennis</v-chip>
        <v-chip value="Basketball" filter>Basketball</v-chip>
      </v-chip-group>
      {{ sports }}
    </v-card>
  </div>
</template>

<script setup>
import { ref } from "vue";

const sports = ref(["Football"]);
</script>
