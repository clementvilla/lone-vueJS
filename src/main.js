import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Particles from 'particles.vue';
import store from './store'
import VueSplide from '@cycraft/vue-splide';
import '@cycraft/splide/dist/css/themes/splide-default.min.css';

Vue.config.productionTip = false

Vue.use( VueSplide );

Vue.use(Particles);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
