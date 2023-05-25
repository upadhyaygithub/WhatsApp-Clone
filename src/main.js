import { createApp } from "vue";
import './style.css';
import App from "./App.vue";
import router from "@/router";

import vue3GoogleLogin from "vue3-google-login";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);
app.use(pinia);
app.use(router);
app.use(vue3GoogleLogin, {
    clientId: "59223668954-5loi9ocdg05d72rq9rkafm7r4f6glot0.apps.googleusercontent.com",
});




app.mount("#app");


