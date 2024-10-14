<template>
  <v-container>
    <v-row>
      <v-col v-for="card in 4" :key="card">
        <v-card variant="outlined">
          <v-card-title> This is title </v-card-title>
          <v-card-subtitle>This is subtitle</v-card-subtitle>
          <v-card-text
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nobis
            illo vel voluptas delectus. Quae explicabo architecto exercitationem
            quis amet. Laborum numquam, dicta minus saepe accusamus nam adipisci
            dolores sed.</v-card-text
          >
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn>
              <v-icon>mdi-delete-outline</v-icon>
            </v-btn>
            <v-btn>
              <v-icon>mdi-share-outline</v-icon>
            </v-btn>
          </v-card-actions>
          <v-divider color="red" class="mb-5"></v-divider>
          <v-divider color="green" class="mb-5" inset></v-divider>
          <v-divider color="blue" class="mb-5" length="75%"></v-divider>
          <v-divider color="black" class="mb-5"></v-divider>

          <v-chip color="red" label variant="outlined" class="mb-5">
            <v-icon>mdi-account</v-icon> #Andoid</v-chip
          >
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script></script>
