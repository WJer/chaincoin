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

CC.$router = router;
// CC.userid = util.getCookie('uid') || '19824';
CC.userid = util.getCookie('uid');
CC.isBitApp = !!CC.userid;

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>'
})

//修改了3处地方
