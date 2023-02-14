import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { Icon } from '@iconify/vue';
import 'vue3-carousel/dist/carousel.css'
import 'animate.css';


const app=createApp(App);
app.component('Icon',Icon)
app.mount("#app");
