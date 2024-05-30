import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { languages, defaultLocale } from './i18n';
import { createI18n, useI18n } from 'vue-i18n';
import { createRouter, createWebHistory } from 'vue-router';

const langStorage = localStorage.getItem('lang')

const messages = Object.assign(languages);
const i18n = createI18n({
    legacy: false,
    locale: langStorage || defaultLocale,
    fallbackLocale: 'en',
    messages
});

const router = createRouter({
    routes: [{
        path: '/',
        component: App
    }],
    history: createWebHistory(),
    scrollBehavior (to, from, savedPosition) {
        return { top: document.body.scrollHeight }
    }
})

router.beforeEach((to, from) => {
    return '/'
})

const app = createApp(App, {
    setup() {
        const {t} = useI18n();
        return {t}
    }
});

app.use(i18n)
app.use(router)
app.mount('#app')