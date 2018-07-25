// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@/assets/js/rem.js'
import Vue from 'vue'
import App from './App'
import router from './router'
import util from '@/common/util/index.js'
import { Header, Button } from 'mint-ui'

import '@/assets/css/reset.css'
import '@/assets/css/resetui.less'
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.prototype.util = util;

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>'
})
