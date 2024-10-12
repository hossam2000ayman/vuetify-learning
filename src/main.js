import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//Vuetify
import { createVuetify } from "vuetify/lib/framework.mjs";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "vuetify/styles";
const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(store).use(router).use(vuetify).mount("#app");
