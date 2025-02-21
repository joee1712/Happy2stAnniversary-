import { createApp } from 'vue'
import './main.css'
import App from './App.vue'
import './registerServiceWorker'

createApp(App).mount('#app')

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js');
    });
}