import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { Icon } from '@iconify/vue';
import 'vue3-carousel/dist/carousel.css'
import 'animate.css';
import 'primevue/resources/themes/lara-dark-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css ';
import { MotionPlugin } from '@vueuse/motion'
import VueAnimXyz from '@animxyz/vue3'
import '@animxyz/core'
import PrimeVue from 'primevue/config';
import Card from 'primevue/card/sfc';
import Button from 'primevue/button';
import VueAwesomePaginate from "vue-awesome-paginate";
import "vue-awesome-paginate/dist/style.css";

const app = createApp(App);
app.use(MotionPlugin)
app.use(VueAnimXyz)
app.use(PrimeVue)
app.use(VueAwesomePaginate)
app.component('Icon',Icon)
app.component('Card',Card)
app.component('Button',Button)
app.mount("#app")
