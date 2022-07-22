import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import Router from './routes/router'

import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false
    
Vue.use(VueRouter);

new Vue({
  vuetify,
  render: h => h(App),
  router: Router
}).$mount('#app')





//zeca aqui
