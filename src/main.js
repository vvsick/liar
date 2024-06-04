import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'

import { languages, defaultLocale } from './i18n';
import { createI18n, useI18n } from 'vue-i18n';

const langStorage = localStorage.getItem('lang')

const messages = Object.assign(languages);
const i18n = createI18n({
    legacy: false,
    locale: langStorage || defaultLocale,
    fallbackLocale: 'en',
    messages
});

const app = createApp(App, {
    setup() {
        const {t, tm} = useI18n();
        return {t, tm}
    }
});

app.use(i18n)
app.mount('#app')