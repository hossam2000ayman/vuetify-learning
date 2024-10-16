<template>
  <v-layout>
    <v-app-bar
      theme="light"
      extended
      extension-height="130"
      color="orange"
      image="https://i.pinimg.com/originals/17/40/03/1740037aa56589d4d5148e673e0fad2d.jpg"
    >
      <v-app-bar-nav-icon color="white"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-app-bar-title style="color: white">My AppBar Title</v-app-bar-title>
      <v-icon class="mr-4" color="white">mdi-magnify</v-icon>
      <v-icon class="mr-4" color="white">mdi-heart</v-icon>
      <v-icon color="white">mdi-dots-vertical</v-icon>
    </v-app-bar>

    <v-bottom-navigation class="bg-cyan">
      <v-btn>
        <v-icon color="white">mdi-home</v-icon>
      </v-btn>
      <v-btn>
        <v-icon color="white">mdi-account</v-icon>
      </v-btn>
      <v-btn>
        <v-icon color="white">mdi-music</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-layout>
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
