<template>
  <div class="home">
    <h1>This is Home Page</h1>
    <h1>Example 1 Container</h1>
    <v-container fluid>
      <v-row>
        <!-- grid system of columns have 12 column over all for each line (row) -->
        <v-col cols="3">Ahmed</v-col>
        <v-col cols="3">Mohamed</v-col>
        <v-col cols="3">Mostafa</v-col>
        <v-col cols="3">Sally</v-col>
        <v-col cols="12">Test</v-col>
      </v-row>
    </v-container>
    <h2>Example 2 Container</h2>
    <v-container fluid>
      <v-row>
        <v-col cols="6" style="border: 1px solid">
          <v-row>
            <v-col cols="2" style="border: 1px solid red">test1</v-col>
            <v-col style="border: 1px solid red">test2</v-col>
            <v-col style="border: 1px solid red">test3</v-col>
          </v-row>
        </v-col>
        <v-col cols="6" style="border: 1px solid">Mohamed</v-col>
      </v-row>
    </v-container>
    <h1>Example 3 Container</h1>
    <v-container>
      <v-row>
        <!-- this is for responsive design it varies based on the window screen and it's size  -->
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          xl="3"
          xxl="3"
          style="border: 1px solid"
          >Test One</v-col
        >
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          xl="3"
          xxl="3"
          style="border: 1px solid"
          >Test Two</v-col
        >
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          xl="3"
          xxl="3"
          style="border: 1px solid"
          >Test Three</v-col
        >
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          xl="3"
          xxl="3"
          style="border: 1px solid"
          >Test Four</v-col
        >
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>
