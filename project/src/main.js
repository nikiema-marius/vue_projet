import { createApp } from "vue";
import { createPinia } from "pinia";

import "@/assets/tabler.min.css";
import "@/assets/demo.min.css";
import "@/assets/tabler-vendors.min.css";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
