import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { Icon } from '@iconify/vue';
import 'vue3-carousel/dist/carousel.css'
import 'animate.css';
import { MotionPlugin } from '@vueuse/motion'
import VueAnimXyz from '@animxyz/vue3'
import '@animxyz/core'

const app=createApp(App);
app.use(MotionPlugin)
app.use(VueAnimXyz)
app.component('Icon',Icon)
app.mount("#app");
