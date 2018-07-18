// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@/assets/js/rem.js'
import Vue from 'vue'
import App from './App'
import router from './router'
import { Header } from 'mint-ui'

import '@/assets/css/reset.css'

console.log(Header);

Vue.config.productionTip = false
Vue.component(Header.name, Header);

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>'
})
