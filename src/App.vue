<template>
  <div class="d-flex align-center flex-column pa-6">
    <v-card width="70%" class="pa-5" height="560">
      <v-btn @click="(alert = true), (alertType = 'success')"
        >Show Success</v-btn
      >
      <v-btn @click="(alert = true), (alertType = 'info')">Show Info</v-btn>
      <v-btn @click="(alert = true), (alertType = 'warning')"
        >Show Warning</v-btn
      >
      <v-btn @click="(alert = true), (alertType = 'error')">Show Error</v-btn>

      <v-alert
        :color="alertType"
        :type="alertType"
        :title="alertType"
        closable
        border="start"
        height="220"
        v-model="alert"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nesciunt
        magni quas tempora neque deleniti laborum aperiam, aspernatur,
        consectetur quis maiores! Dolore necessitatibus at molestiae ex iste
        eaque pariatur vel?
      </v-alert>
    </v-card>
  </div>
</template>

<script setup>
import { ref } from "vue";
const alert = ref(false);
const alertType = ref("");
</script>
