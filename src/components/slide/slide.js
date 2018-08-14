import Vue from 'vue'
import './slide.less'

window.onpopstate = function (e) {
	if (CC._slides.length) {
		CC.popSlide();
	}
}

function pushSlide (slide) {
	CC._slides || (CC._slides = []);
	CC._slides.push(slide);
	window.history.pushState(null, '', '#')
}

CC.popSlide = () => {
	var slide = CC._slides.pop();
	slide && (slide.hide())
	window.history.back();
}

function Slide(opts) {
	let strs = [];
	let k, v;
	for (k in opts.data) {
		strs.push(`:${k}="${k}"`);
	}
	let name = Object.keys(opts.component || opts.components)[0];

	let events = {};
	let sevents = {}; //默认监听设置头部菜单事件。
	for (k in opts.events) {
		v = opts.events[k];
		if(!v) return;
		if(typeof v == 'function') { //支持传入函数而不是函数名
			events[k] = v;
			return;
		}
		let vv = v.split('.');
		events[k] = vv[0];
		vv.length > 1 && (sevents[k] = vv[vv.length-1]);
	}
	let me = this;
	let Comp = Vue.extend({
		template: `<transition name="fade"><div class="crm-slide" v-if="dShow"><cc-header :isBack=true></cc-header><component ${strs.join(' ')} ref="comp" :is="'${name}'" class="slide-page"></component></div></transition>`,
		data() {
			return {
				dShow: true,
				...opts.data
			}
		},
		components: opts.component || opts.components,
		methods: {
			hide() {
				this.$refs.comp && this.$refs.comp.hide && this.$refs.comp.hide()
				this.time && clearInterval(this.time);
				this.dShow = false;
			}
		},
		mounted() {
			this.dShow = true;
			this.time = setInterval(() => {
			  if(this.$refs.comp) {
			  	clearInterval(this.time);
			  	this.time = null;
				opts.complete && opts.complete(this.$refs.comp);
				for (k in events) {
					v = events[k];
					this.$refs.comp.$on && this.$refs.comp.$on(k, (...data) => { //接管子组件上的事件
                        sevents[k] && me[sevents[k]] && me[sevents[k]].apply(me, data);
                        let vv = events[k];
                        if(typeof vv == 'function') {
                        	vv.apply(opts.context, data) || me.hide(); //函数不返回值关闭slide
                        	return;
                        }
			  			opts.context && opts.context[vv] && opts.context[vv].apply(opts.context, data);
			  		});
				}
			  }
			}, 100)
		}
	})
	var comp = new Comp();
	this.comp = comp;
	pushSlide(this);
	document.body.appendChild(comp.$mount().$el);
}

Slide.prototype.hide = function() {
	this.comp.hide();
}

export default Slide;