<template>
  <v-toolbar elevation="5" class="px-5">
    <div>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-tooltip activator="parent">Menu</v-tooltip>
    </div>

    <div>
      <v-toolbar-title>My ToolBar Title</v-toolbar-title>
      <v-tooltip activator="parent">My ToolBar title</v-tooltip>
    </div>
    <v-spacer></v-spacer>
    <div>
      <v-icon class="mr-3"> mdi-account </v-icon>
      <v-tooltip activator="parent" location="bottom">Profile</v-tooltip>
    </div>

    <div>
      <v-icon> mdi-logout </v-icon>
      <v-tooltip activator="parent" location="bottom">Logout</v-tooltip>
    </div>
  </v-toolbar>
  <!-- <nav> -->
  <!-- <router-link to="/">Home</router-link> | -->
  <!-- <router-link to="/about">About</router-link> -->
  <!-- </nav> -->
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.v-toolbar-title__placeholder {
  width: fit-content;
}
</style>
