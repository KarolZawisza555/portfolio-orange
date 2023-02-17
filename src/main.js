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
import Card from 'primevue/card';
import Button from 'primevue/button';
import Accordion  from 'primevue/accordion';
import AccordionTab  from 'primevue/accordiontab';
import Fieldset   from 'primevue/fieldset';
import VueAwesomePaginate from "vue-awesome-paginate";

const app = createApp(App);
app.use(MotionPlugin)
app.use(VueAnimXyz)
app.use(PrimeVue)
app.use(VueAwesomePaginate)
app.component('Icon',Icon)
app.component('Card',Card)
app.component('Fieldset ',Fieldset )
app.component('Button',Button)
app.component('Accordion',Accordion )
app.component('AccordionTab',AccordionTab )
app.mount("#app")
