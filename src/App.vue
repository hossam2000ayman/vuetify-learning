<template>
  <div class="d-flex align-center flex-column pa-6">
    <v-card width="70%" class="pa-5 text-center" height="560">
      <v-btn @click="showBadge = !showBadge">Show Badge</v-btn>
      <v-text-field type="number" v-model="badgeContent"></v-text-field>
      <v-btn variant="text">
        <v-badge
          :content="badgeContent"
          color="error"
          offset-x="2"
          offset-y="2"
          bordered
          location="top right"
          max="18"
          v-model="showBadge"
        >
          <v-icon size="30">mdi-bell</v-icon>
        </v-badge>
      </v-btn>
    </v-card>
  </div>
</template>

<script setup>
import { ref } from "vue";

const badgeContent = ref(0);
const showBadge = ref(false);
</script>
