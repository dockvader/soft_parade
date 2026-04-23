import { createApp } from 'vue'
import './style.css'
import 'aos/dist/aos.css' // Import AOS styles
import AOS from 'aos'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)

// Initialize AOS
AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: true
})

app.mount('#app')
