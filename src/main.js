import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './index.css';

import App from './App.vue'
import router from './router'

import BaseCard from './components/base/BaseCard.vue';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('BaseCard', BaseCard);

app.mount('#app')
