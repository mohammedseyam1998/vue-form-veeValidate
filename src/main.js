import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';
import { ValidationProvider , ValidationObserver } from 'vee-validate';
import VCalendar from 'v-calendar';
import Toasted from 'vue-toasted';
import VueToastr from 'vue-toastr'
 



 
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
 
// Add the required rule
extend('required', {
  ...required,
  message: 'This field is required'
});
Vue.use(VCalendar)
Vue.use(Toasted)
Vue.use(VueToastr)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
