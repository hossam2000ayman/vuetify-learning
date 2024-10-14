<template>
  <div class="home">
    <div class="text font-weight-light">This is home page</div>
    <v-btn @click="showDialog1 = !showDialog1">Click Me 1 </v-btn>
    <v-dialog width="400px" v-model="showDialog1" fullscreen>
      <v-card>
        <v-card-title>This is Dialog</v-card-title>
        <v-card-text
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
          neque fugiat sint eligendi ex, illum voluptatem mollitia voluptatibus
          aut beatae perspiciatis veniam odit quam dolores odio, minus porro
          magni deserunt? .. .. .. .. .. ..</v-card-text
        >
        <v-card-actions>
          <v-btn @click="showDialog1 = false" color="red">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-btn @click="showDialog2 = !showDialog2">Click Me 2 </v-btn>
    <v-dialog v-model="showDialog2" transition="dialog-bottom-transition">
      <v-card>
        <v-card-title>This is Dialog</v-card-title>
        <v-card-text
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          alias animi dolor ad iste dolorem esse, commodi eveniet, obcaecati
          assumenda harum unde voluptatum, vel pariatur veniam hic ex enim quae!
          .. .. .. .. .. ..</v-card-text
        >
        <v-card-actions>
          <v-btn @click="showDialog2 = false" color="red">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-btn v-on:click="showDialog3 = !showDialog3">Click Me 3</v-btn>
    <v-dialog v-model="showDialog3" persistent>
      <v-card>
        <v-card-title>This is Dialog</v-card-title>
        <v-card-text
          >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
          iusto, enim vel ipsam debitis repudiandae et. Id corrupti similique
          dolores quod, quo corporis, dolore quidem, facilis ad itaque eos
          debitis? .. .. .. .. .. .. .. .. .. ..</v-card-text
        >
        <v-card-actions>
          <v-btn @click="showDialog3 = false" color="red">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return { showDialog1: false, showDialog2: false, showDialog3: false };
  },
};
</script>
