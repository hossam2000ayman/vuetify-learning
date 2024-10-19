<template>
  <div v-if="false" class="d-flex align-center flex-column pa-6">
    <v-card width="70%">
      <v-card-title>
        Normal Selected Toggle Button :: {{ selectedButton_1 }}</v-card-title
      >
      <v-btn-toggle v-model="selectedButton_1">
        <v-btn value="_home"><v-icon>mdi-home</v-icon></v-btn>
        <v-btn value="_account"><v-icon>mdi-account</v-icon></v-btn>
        <v-btn value="_file"><v-icon>mdi-file-document</v-icon></v-btn>
        <v-btn value="_music"><v-icon>mdi-music</v-icon></v-btn>
      </v-btn-toggle>
    </v-card>

    <v-card width="70%">
      <v-card-title>
        Mandatory Selected Toggle Button :: {{ selectedButton_2 }}</v-card-title
      >
      <v-btn-toggle v-model="selectedButton_2" mandatory color="primary">
        <v-btn value="_home"><v-icon>mdi-home</v-icon></v-btn>
        <v-btn value="_account"><v-icon>mdi-account</v-icon></v-btn>
        <v-btn value="_file"><v-icon>mdi-file-document</v-icon></v-btn>
        <v-btn value="_music"><v-icon>mdi-music</v-icon></v-btn>
      </v-btn-toggle>
    </v-card>

    <v-card width="70%">
      <v-card-title>
        Multiple Selected Toggle Button :: {{ selectedButton_3 }}</v-card-title
      >
      <v-btn-toggle v-model="selectedButton_3" multiple color="primary">
        <v-btn value="_home"><v-icon>mdi-home</v-icon></v-btn>
        <v-btn value="_account"><v-icon>mdi-account</v-icon></v-btn>
        <v-btn value="_file"><v-icon>mdi-file-document</v-icon></v-btn>
        <v-btn value="_music"><v-icon>mdi-music</v-icon></v-btn>
      </v-btn-toggle>
    </v-card>

    <v-card width="70%" class="pa-5">
      <v-card-title>
        Divided Outlined Elevated Selected Toggle Button ::
        {{ selectedButton_1 }}</v-card-title
      >
      <v-btn-toggle
        v-model="selectedButton_1"
        divided
        variant="outlined"
        elevation="10"
        color="primary"
      >
        <v-btn value="_home"><v-icon>mdi-home</v-icon></v-btn>
        <v-btn value="_account"><v-icon>mdi-account</v-icon></v-btn>
        <v-btn value="_file"><v-icon>mdi-file-document</v-icon></v-btn>
        <v-btn value="_music"><v-icon>mdi-music</v-icon></v-btn>
      </v-btn-toggle>
    </v-card>
  </div>

  <div class="d-flex align-center flex-column pa-6">
    <v-card width="70%" class="pa-5 justify-space-around d-flex">
      <!-- Font Style Button Toggle -->
      <v-btn-toggle
        v-model="toggleStyle"
        multiple
        color="primary"
        divided
        variant="outlined"
      >
        <v-btn value="bold"><v-icon>mdi-format-bold</v-icon></v-btn>
        <v-btn value="italic"><v-icon>mdi-format-italic</v-icon></v-btn>
        <v-btn value="underline"><v-icon>mdi-format-underline</v-icon></v-btn>
      </v-btn-toggle>
    </v-card>

    <!-- Textarea where style is applied -->
    <v-card width="70%" class="pa-5">
      <v-textarea
        rows="10"
        variant="outlined"
        :class="['w-100', 'pa-5', `font-weight-${boldStyle}`, 'text-center']"
        :style="`border: 1px solid; font-style: ${italicStyle}; text-decoration: ${underlineStyle}`"
      ></v-textarea>
    </v-card>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { ref } from "vue";

const selectedButton_1 = ref("_home");
const selectedButton_2 = ref("_music");
const selectedButton_3 = ref(["_file"]);
// const toggleAlign = ref("start");
const toggleStyle = ref([]);

const boldStyle = computed(() => {
  return toggleStyle.value.filter((style) => style === "bold").join();
});
const italicStyle = computed(() => {
  return toggleStyle.value.filter((style) => style === "italic").join();
});
const underlineStyle = computed(() => {
  return toggleStyle.value.filter((style) => style === "underline").join();
});
</script>
<style scoped></style>
