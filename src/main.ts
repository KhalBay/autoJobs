import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router";
import boot from "./boot"

const app = createApp(App)

app.use(router)
app.use(boot)
app.mount('#app')