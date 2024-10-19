<template>
  <div class="d-flex align-center flex-column pa-6">
    <v-card width="70%">
      <v-carousel
        height="200"
        show-arrows="hover"
        cycle
        interval="2000"
        delimiter-icon="mdi-home"
        hide-delimiter-background
        progress
      >
        <template v-slot:prev="{ props }">
          <v-btn v-bind="props" color="green"
            ><v-icon color="yellow">mdi-arrow-left</v-icon></v-btn
          >
        </template>

        <template v-slot:next="{ props }">
          <v-btn v-bind="props" color="green"
            ><v-icon color="yellow">mdi-arrow-right</v-icon></v-btn
          >
        </template>
        <v-carousel-item
          cover
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        ></v-carousel-item>
        <v-carousel-item
          cover
          src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
        ></v-carousel-item>
        <v-carousel-item
          cover
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        ></v-carousel-item>
      </v-carousel>
    </v-card>
  </div>
</template>

<script setup></script>
