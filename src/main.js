// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@/assets/js/rem.js'
import '@/components/index.js'
import '@/filters/index.js'
import '@/common/const.js'
import Vue from 'vue'
import App from './App'
import router from './router'
import util from '@/common/util/index.js'
import { Header, Button, Field } from 'mint-ui'

import VConsole from 'vconsole/dist/vconsole.min.js' //import vconsole
new VConsole()

Vue.config.productionTip = false
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.component(Field.name, Field);
Vue.prototype.util = util;

alert(window.bitkeepUserId);

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>'
})
