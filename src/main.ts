import { createApp } from "vue";

import "./styles/reset.scss";

import App from "./App.vue";
import router from "./router/routes";
import { install } from "./lib/helpers";

const app = createApp(App);

install(app);

app.use(router).mount("#app");
