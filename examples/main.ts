import { createApp } from 'vue'
import HqUI from 'hq-ui'
import App from './App.vue'

const app = createApp(App)
app.use(HqUI)
app.mount('#app')
