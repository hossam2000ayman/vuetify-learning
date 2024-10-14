<template>
  <div class="home">
    <div class="text-center font-weight-light">This is Home page</div>
    <v-card width="400" class="mx-auto" variant="outlined">
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :value="item.value"
          base-color="primary"
          variant="plain"
        >
          <v-list-item-title class="text-center">
            {{ item.title }}
          </v-list-item-title>
          <template v-slot:prepend>
            <v-icon>{{ item.icon }}</v-icon>
          </template>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { title: "Home Page", value: 1, icon: "mdi-home" },
        { title: "Profile", value: 2, icon: "mdi-account" },
      ],
    };
  },
};
</script>
