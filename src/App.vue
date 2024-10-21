<template>
  <div class="d-flex align-center flex-column pa-6">
    <v-hover v-slot="{ isHovering, props }" open-delay="300" close-delay="400">
      <v-card
        width="70%"
        class="pa-5 text-center"
        height="300"
        v-bind="props"
        :elevation="isHovering ? 10 : 1"
        :color="isHovering ? 'red' : ''"
      >
        <v-card-title> This is title </v-card-title>
        <v-card-text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nesciunt
          magni quas tempora neque deleniti laborum aperiam, aspernatur,
          consectetur quis maiores! Dolore necessitatibus at molestiae ex iste
          eaque pariatur vel?
        </v-card-text>
      </v-card>
    </v-hover>
  </div>
</template>

<script setup></script>
