import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import i18n from './i18n'
import './registerServiceWorker'
import VueCookies from 'vue-cookies'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(VueCookies)
Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next()
});
new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')