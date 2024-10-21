<template>
  <div class="d-flex align-center flex-column pa-6">
    <v-card max-width="500" width="500" height="2000">
      <v-lazy v-for="num in 100" :key="num" color="red" class="mt-10">
        <v-card image="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg">
          <v-card-title>this is card title</v-card-title>
          <v-card-text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            nesciunt magni quas tempora neque deleniti laborum aperiam,
            aspernatur, consectetur quis maiores! Dolore necessitatibus at
            molestiae ex iste eaque pariatur vel?
          </v-card-text>
        </v-card>
      </v-lazy>
    </v-card>
  </div>
</template>
<script setup></script>
