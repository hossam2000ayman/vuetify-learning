<template>
  <div class="home">
    <h1 class="text font-weight-light">This is Home Page</h1>
    <div><p style="width: fit-content" class="bg-red py-5 px-10">Test</p></div>
    <v-divider></v-divider>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-sheet class="bg-orange pa-10" rounded="xl" elevation="12">
            <p>Test</p>
          </v-sheet>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-btn id="myButton">Activator</v-btn>
          <v-menu activator="#myButton" offset="10" location="right">
            <v-list>
              <v-list-item
                v-for="(menu, index) in menus"
                :key="index"
                :title="menu.title"
                :append-icon="menu.icon"
              ></v-list-item>
            </v-list>
          </v-menu>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menus: [
        { title: "Profile", icon: "mdi-account-outline" },
        { title: "Home", icon: "mdi-home-outline" },
      ],
    };
  },
};
</script>
