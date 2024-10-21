<template>
  <div class="d-flex align-center flex-column pa-6">
    <v-card width="70%" class="pa-5">
      <v-window
        class="bg-blue"
        show-arrows
        prev-icon="mdi-arrow-left"
        next-icon="mdi-arrow-right"
      >
        <v-window-item v-for="n in 25" :key="n">
          <v-card width="100%" color="green">
            <v-card-title>This is Title {{ n }}</v-card-title>
            <v-card-text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              nesciunt magni quas tempora neque deleniti laborum aperiam,
              aspernatur, consectetur quis maiores! Dolore necessitatibus at
              molestiae ex iste eaque pariatur vel?
            </v-card-text>
          </v-card>
        </v-window-item>
      </v-window>
    </v-card>
  </div>
</template>

<script setup></script>
