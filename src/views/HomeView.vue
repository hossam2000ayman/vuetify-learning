<template>
  <div class="home">
    <h1 class="text font-weight-light">This is Home Page</h1>
    <!-- display -->
    <!-- we can control on using the display through the breakpoints of the screen like (lg md sm ...) -->
    <!-- d-md-inline mean that the display in medium screen is inline  -->
    <!-- <span class="d-none d-md-inline d-sm-flex">This is span</span> -->
    <!-- to declare flex direction using flex-column (vertically) -->
    <!-- to declare flex direction using flex-row (horizontally) -->
    <div class="parent d-flex flex-column flex-sm-row">
      <h3>test</h3>
      <h3>test</h3>
      <h3>test</h3>
      <h3>test</h3>
    </div>

    <!-- on display flex we can make justify content through "justify-<value>" -->
    <!-- on display flex we can make align item through "align-<value>" -->
    <div
      class="parent d-flex justify-space-around align-center"
      style="height: 200px; border: 1px solid black"
    >
      <!-- how to control on font size -->
      <!-- .text-h1 = font-size: 6rem; -->
      <p class="text-h4">test</p>
      <!-- h1 = font-size: 2rem; -->
      <h1>test</h1>

      <p class="text-subtitle-2">test</p>
      <p class="text-body-1">test</p>
      <!-- "text-button" make your text letter upper case -->
      <p class="text-button">test</p>
    </div>

    <h1 class="text font-weight-light">This is message</h1>
    <p class="text-h5 font-weight-bold">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsum
      ipsam, repellendus rerum fugit ducimus perspiciatis ut eius illum sequi
      labore, consequuntur iusto molestiae, excepturi corporis exercitationem
      dolore. Fugit, doloremque!
    </p>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>
