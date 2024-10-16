<template>
  <h1 class="text font-weight-light">This is homepage</h1>
  <v-container>
    <v-row>
      <v-col cols="12">
        <!-- old way to create tooltip from default browser on hover  -->
        <!-- <p title="my tooltip element">test</p> -->

        <p title="my element">
          Hossam ElBadry
          <v-tooltip activator="parent" location="top"
            >Hossam Ayman Hasan ElBadry</v-tooltip
          >
        </p>

        <span>
          <v-icon>mdi-delete</v-icon>
          <v-tooltip activator="parent" location="bottom"
            >Delete Item</v-tooltip
          >
        </span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script></script>
