// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.component('tv-header', require('./components/TvHeader.vue').default)
Vue.component('tv-footer', require('./components/TvFooter.vue').default)
Vue.component('tv-sidebar', require('./components/TvSideBar.vue').default)
Vue.component('tv-categories', require('./components/TvCategories.vue').default)

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
