import { createApp } from "vue";
import App from "./App.vue";
import { Icon } from '@iconify/vue';
import { MotionPlugin } from '@vueuse/motion'
import VueAnimXyz from '@animxyz/vue3'
import PrimeVue from 'primevue/config';
import Card from 'primevue/card';
import Button from 'primevue/button';
import Accordion  from 'primevue/accordion';
import AccordionTab  from 'primevue/accordiontab';
import Fieldset   from 'primevue/fieldset';
import "./style.css";
import 'vue3-carousel/dist/carousel.css'
import 'animate.css';
import 'primevue/resources/themes/md-dark-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css ';
import '@animxyz/core'

const app = createApp(App);
app.use(VueAnimXyz)
app.use(MotionPlugin)
app.use(PrimeVue)
app.component('Icon',Icon)
app.component('Card',Card)
app.component('Fieldset ',Fieldset )
app.component('Button',Button)
app.component('Accordion',Accordion )
app.component('AccordionTab',AccordionTab )
app.mount("#app")
