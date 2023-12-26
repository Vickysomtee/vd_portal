import './assets/css/main.css'

import { createApp } from 'vue'
import Toast, {POSITION} from "vue-toastification";
import "vue-toastification/dist/index.css";
import App from './App.vue'
import router from './router'
import store from './store'


const app = createApp(App)

const options = {
    position: POSITION.TOP_CENTER,
    timeout: 3000,
};

app.use(store).use(router).use(Toast, options)


app.mount('#app')
