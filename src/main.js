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
    routes: [{ path: '/#*', redirect: '/' }],
    history: createWebHistory(),
    scrollBehavior (to, from, savedPosition) {
        return { top: document.body.scrollHeight }
    }
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