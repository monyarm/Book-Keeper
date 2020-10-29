import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import Library from '@/library';
Vue.config.productionTip = false;
Library.computeLibrary();
Vue.prototype.$library = Library._library;
new Vue({
    render: h => h(App)
}).$mount('#app');
//# sourceMappingURL=main.js.map