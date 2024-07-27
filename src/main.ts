import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import Login from './components/Login.vue'
import Dashboard from './components/Dashboard.vue'
import Signup from './components/Signup.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        
        { path: '/', component: Login },
        { path: '/Dashboard', component: Dashboard },
        { path: '/Signup', component: Signup },
        
        
    ]
});


const app = createApp(App)


app.use(router)

app.mount('#app')
