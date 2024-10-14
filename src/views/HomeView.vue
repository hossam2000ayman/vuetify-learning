<template>
  <v-container>
    <v-row>
      <v-col v-for="card in 4" :key="card">
        <v-card variant="outlined">
          <v-card-title> This is title </v-card-title>
          <v-card-subtitle>This is subtitle</v-card-subtitle>
          <v-card-text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            numquam asperiores architecto vero ad cupiditate eos laudantium
            doloribus consectetur, neque nemo, possimus modi. Perferendis
            dignissimos sapiente fugit deserunt in iusto?</v-card-text
          >
          <v-card-actions>
            <v-btn>
              <v-icon>mdi-delete-outline</v-icon>
            </v-btn>
            <v-btn>
              <v-icon>mdi-share-outline</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script></script>
