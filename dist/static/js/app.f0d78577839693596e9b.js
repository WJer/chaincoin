webpackJsonp([11],{"50lq":function(t,e){},"5OHe":function(t,e){},"991W":function(t,e){},EDgR:function(t,e){!function(t,e){var n,i=t.document,o=i.documentElement,l=i.querySelector('meta[name="viewport"]'),r=1;if(/i(Phone|Pod|Pad)/.test(navigator.userAgent)){var s=t.devicePixelRatio;r=s>=3?3:s>=2?2:1}else r=1;n=1/r,o.setAttribute("data-dpr",r),l.setAttribute("content","initial-scale="+n+", maximum-scale="+n+", user-scalable=no");var a=function t(){i.removeEventListener("DOMContentLoaded",t),i.body.style.fontSize=16*r+"px"};"complete"===i.readyState?a():i.addEventListener("DOMContentLoaded",a,!1);var u=function(){var t=375*r,n=o.getBoundingClientRect().width;n>t&&(n=t),o.style.fontSize=n/10+"px",e.remScale=n/(375*r)};u();var c=null;t.addEventListener("resize",function(){c&&clearTimeout(c),c=setTimeout(u,300)},!1),e.rem=37.5,e.dpr=r,e.rem2px=function(t){var n=parseFloat(t)*e.rem;return"string"==typeof t&&t.match(/rem$/)&&(n+="px"),n},e.px2rem=function(t){var n=parseFloat(t)/e.rem;return"string"==typeof t&&t.match(/px$/)&&(n+="rem"),n}}(window,CC=window.CC||{})},IAGr:function(t,e){CC.delay=1e3,CC._slides=[]},It3A:function(t,e){},MJUK:function(t,e){},MfB9:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n("EDgR");var i=n("MVMM"),o=n("rXXD"),l={name:"g-radio",model:{prop:"checked",event:"change"},props:{options:{type:Array,required:!0,default:function(){return[]}},checked:{required:!1}},data:function(){return{dOptions:this.options,dChecked:this.checked}},methods:{_click:function(t){this.dChecked===t.value?this.dChecked="":this.dChecked=t.value,this.$emit("change",this.dChecked)}}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"g-form-radio",attrs:{type:"text"}},[n("div",{staticClass:"radio-hd"},[t._v("手续费")]),t._v(" "),t._l(t.dOptions,function(e){return n("div",{staticClass:"radio-item"},[n("div",{staticClass:"radio_cb",class:{checked:t.dChecked==e.value},on:{click:function(n){t._click(e)}}}),t._v(" "),n("div",{staticClass:"radio_bd"},[n("p",[t._v(t._s(e.label))])])])})],2)},staticRenderFns:[]};var s=n("vSla")(l,r,!1,function(t){n("MJUK")},"data-v-7badc01f",null).exports,a={name:"bubble",props:{y:{type:Number,default:0}},data:function(){return{width:50,height:80}},computed:{distance:function(){return Math.max(0,Math.min(this.y*this.ratio,this.maxDistance))},style:function(){return"width:"+this.width/this.ratio+"px;height:"+this.height/this.ratio+"px"}},created:function(){this.ratio=window.devicePixelRatio,this.width*=this.ratio,this.height*=this.ratio,this.initRadius=18*this.ratio,this.minHeadRadius=12*this.ratio,this.minTailRadius=5*this.ratio,this.initArrowRadius=10*this.ratio,this.minArrowRadius=6*this.ratio,this.arrowWidth=3*this.ratio,this.maxDistance=40*this.ratio,this.initCenterX=25*this.ratio,this.initCenterY=25*this.ratio,this.headCenter={x:this.initCenterX,y:this.initCenterY}},mounted:function(){this._draw()},methods:{_draw:function(){var t=this.$refs.bubble,e=t.getContext("2d");e.clearRect(0,0,t.width,t.height),this._drawBubble(e),this._drawArrow(e)},_drawBubble:function(t){t.save(),t.beginPath();var e=this.distance/this.maxDistance,n=this.initRadius-(this.initRadius-this.minHeadRadius)*e;this.headCenter.y=this.initCenterY-(this.initRadius-this.minHeadRadius)*e,t.arc(this.headCenter.x,this.headCenter.y,n,0,Math.PI,!0);var i=this.initRadius-(this.initRadius-this.minTailRadius)*e,o={x:this.headCenter.x,y:this.headCenter.y+this.distance},l={x:o.x-i,y:o.y},r={x:l.x,y:l.y-this.distance/2};t.quadraticCurveTo(r.x,r.y,l.x,l.y),t.arc(o.x,o.y,i,Math.PI,0,!0);var s={x:this.headCenter.x+n,y:this.headCenter.y},a={x:o.x+i,y:s.y+this.distance/2};t.quadraticCurveTo(a.x,a.y,s.x,s.y),t.fillStyle="rgb(170,170,170)",t.fill(),t.strokeStyle="rgb(153,153,153)",t.stroke(),t.restore()},_drawArrow:function(t){t.save(),t.beginPath();var e=this.distance/this.maxDistance,n=this.initArrowRadius-(this.initArrowRadius-this.minArrowRadius)*e;t.arc(this.headCenter.x,this.headCenter.y,n-(this.arrowWidth-e),-Math.PI/2,0,!0),t.arc(this.headCenter.x,this.headCenter.y,n,0,3*Math.PI/2,!1),t.lineTo(this.headCenter.x,this.headCenter.y-n-this.arrowWidth/2+e),t.lineTo(this.headCenter.x+2*this.arrowWidth-2*e,this.headCenter.y-n+this.arrowWidth/2),t.lineTo(this.headCenter.x,this.headCenter.y-n+3*this.arrowWidth/2-e),t.fillStyle="rgb(255,255,255)",t.fill(),t.strokeStyle="rgb(170,170,170)",t.stroke(),t.restore()}},watch:{y:function(){this._draw()}}},u={render:function(){var t=this.$createElement;return(this._self._c||t)("canvas",{ref:"bubble",style:this.style,attrs:{width:this.width,height:this.height}})},staticRenderFns:[]},c=n("vSla")(a,u,!1,null,null,null).exports,h={name:"loading",data:function(){return{balde:12}},props:{size:{type:Number,default:24}},computed:{style:function(){var t=this.size+"px";return{width:t,height:t}}}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"loading"},[e("span",{staticClass:"loading-spinners",style:this.style},this._l(this.balde,function(t,n){return e("i",{key:n,staticClass:"loading-spinner"})}))])},staticRenderFns:[]};var p=n("vSla")(h,d,!1,function(t){n("MfB9")},"data-v-4f404bf6",null).exports,f=n("rVsN"),m=n.n(f),w=n("aA9S"),b=n.n(w),y=n("hZtR"),g={observeDOM:!0,click:!0,probeType:0,scrollbar:!1,pullDownRefresh:!1,pullUpLoad:!1},v={name:"scroll-list",props:{data:{type:Array,default:function(){return[]}},options:{type:Object,default:function(){return{}}}},data:function(){return{beforePullDown:!0,isPullingDown:!1,isErrorPullingDown:!1,isRebounding:!1,isPullUpLoad:!1,pullUpDirty:!0,bubbleY:0,pullDownStyle:""}},computed:{pullDownRefresh:function(){return this.options.pullDownRefresh},pullUpLoad:function(){return this.options.pullUpLoad},pullUpTxt:function(){var t=this.pullUpLoad,e=t&&t.txt,n=e&&e.more||"加载更多",i=e&&e.noMore||"没有更多了";return this.pullUpDirty?n:i},refreshTxt:function(){var t=this.pullDownRefresh;return this.isErrorPullingDown?t&&t.errorTxt||"刷新失败":t&&t.txt||"刷新成功"}},created:function(){this.pullDownInitTop=-50},mounted:function(){setTimeout(this.initScroll,this.options.refreshDelay)},methods:{initScroll:function(){var t=this;if(this.$refs.wrapper){this.setScrollViewMinHeight();var e=b()({},g,{scrollY:"vertical"===this.options.direction,scrollX:"horizontal"===this.options.direction},this.options);this.scroll=new y.a(this.$refs.wrapper,e),this.options.listenBeforeScroll&&this.scroll.on("beforeScrollStart",function(){t.$emit("before-scroll-start")}),this.options.listenScrollStart&&this.scroll.on("scrollStart",function(e){t.$emit("scroll-start",e)}),this.options.listenScroll&&!this.pullDownRefresh&&0!==this.options.probeType&&this.scroll.on("scroll",function(e){t.$emit("scroll",e)}),this.options.listenScrollEnd&&this.scroll.on("scrollEnd",function(e){t.$emit("scroll-end",e)}),this.options.listenTouchEnd&&this.scroll.on("touchEnd",function(e){t.$emit("touch-end",e)}),this.options.listenFlick&&this.scroll.on("flick",function(){t.$emit("flick")}),this.options.listenRefresh&&this.scroll.on("refresh",function(){t.$emit("refresh")}),this.options.listenDestroy&&this.scroll.on("refresh",function(){t.$emit("destroy")}),this.pullDownRefresh&&"horizontal"!==this.options.direction&&this._initPullDownRefresh(),this.pullUpLoad&&"horizontal"!==this.options.direction&&this._initPullUpLoad()}},forceUpdate:function(t){var e=this;this.pullDownRefresh&&this.isPullingDown?(this.isPullingDown=!1,this._reboundPullDown().then(function(){e._afterPullDown()})):this.pullUpLoad&&this.isPullUpLoad?(this.isPullUpLoad=!1,this.scroll.finishPullUp(),this.pullUpDirty=t,this.refresh()):this.refresh()},errorUpdate:function(){var t=this;this.pullDownRefresh&&this.isPullingDown?(this.isPullingDown=!1,this.isErrorPullingDown=!0,this._reboundPullDown().then(function(){t._afterPullDown()})):this.refresh()},setScrollViewMinHeight:function(){if(this.$refs.scrollWrapper&&(this.pullDownRefresh||this.pullUpLoad||this.options.initMinHeight)){var t=this.util.getRect(this.$refs.wrapper).height,e=this.util.getRect(this.$refs.scrollWrapper).height-1;this.$refs.scrollWrapper.style.minHeight=e<=t?t+1+"px":"unset"}},getScrollViewHeight:function(){return this.$refs.scrollWrapper.offsetHeight},_initPullDownRefresh:function(){var t=this;this.scroll.on("scroll",function(e){t.options.listenScroll&&0!==t.options.probeType&&t.$emit("scroll",e),t.beforePullDown?(t.bubbleY=Math.max(0,e.y+t.pullDownInitTop),t.pullDownStyle="top:"+Math.min(e.y+t.pullDownInitTop,10)+"px"):t.bubbleY=0,t.isRebounding&&(t.pullDownStyle="top:"+Math.min(e.y-30,10)+"px")}),this.scroll.on("pullingDown",function(){t.$emit("pulling-down"),t.beforePullDown=!1,t.isPullingDown=!0})},_reboundPullDown:function(){var t=this,e=this.pullDownRefresh.stopTime,n=void 0===e?600:e;return new m.a(function(e){setTimeout(function(){t.isRebounding=!0,t.scroll.finishPullDown(),t.isPullingDown=!1,e()},n)})},_afterPullDown:function(){var t=this;setTimeout(function(){t.pullDownStyle="top:"+t.pullDownInitTop+"px",t.beforePullDown=!0,t.isRebounding=!1,t.isErrorPullingDown=!1,t.refresh()},this.scroll.options.bounceTime)},_initPullUpLoad:function(){var t=this;this.scroll.on("pullingUp",function(){t.$emit("pulling-up"),t.isPullUpLoad=!0})},disable:function(){this.scroll&&this.scroll.disable()},enable:function(){this.scroll&&this.scroll.enable()},refresh:function(){this.scroll&&this.scroll.refresh()},destroy:function(){this.scroll.destroy()},scrollTo:function(){this.scroll&&this.scroll.scrollTo.apply(this.scroll,arguments)},scrollToElement:function(){this.scroll&&this.scroll.scrollToElement.apply(this.scroll,arguments)},rebuild:function(){this.destroy(),this.initScroll()}},watch:{data:function(){var t=this;setTimeout(function(){t.forceUpdate(!0)},this.options.refreshDelay)}},components:{Loading:p}},C={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"wrapper",staticClass:"scroll-list-wrapper"},[n("div",{staticClass:"scroll-content"},[n("div",{ref:"scrollWrapper",staticClass:"scroll-wrapper"},[t._t("default")],2),t._v(" "),t._t("pullup",[t.pullUpLoad?n("div",{staticClass:"pullup-wrapper"},[t.isPullUpLoad?n("div",{staticClass:"after-trigger"},[n("loading")],1):n("div",{staticClass:"before-trigger"},[n("span",[t._v(t._s(t.pullUpTxt))])])]):t._e()],{pullUpLoad:t.pullUpLoad,isPullUpLoad:t.isPullUpLoad})],2),t._v(" "),t._t("pulldown",null,{pullDownRefresh:t.pullDownRefresh,pullDownStyle:t.pullDownStyle,beforePullDown:t.beforePullDown,isPullingDown:t.isPullingDown,bubbleY:t.bubbleY,refreshTxt:t.refreshTxt})],2)},staticRenderFns:[]};var D=n("vSla")(v,C,!1,function(t){n("50lq")},null,null).exports,x={name:"cc-scroll",props:{data:{type:Array,default:function(){return[]}},scrollbar:{type:Boolean,default:!1},scrollbarFade:{type:Boolean,default:!0},pullDownRefresh:{type:Boolean,default:!0},pullDownRefreshThreshold:{type:Number,default:90},pullDownRefreshStop:{type:Number,default:40},pullDownRefreshTxt:{type:String,default:"刷新成功"},pullDownRefreshFailTxt:{type:String,default:"刷新失败"},pullUpLoad:{type:Boolean,default:!0},pullUpLoadThreshold:{type:Number,default:0},pullUpLoadMoreTxt:{type:String,default:"加载更多"},pullUpLoadNoMoreTxt:{type:String,default:"没有更多了"},direction:{type:String,default:"vertical"},click:{type:Boolean,default:!0},probeType:{type:Number,default:0},tap:{type:Boolean,default:!1},refreshDelay:{type:Number,default:20},initMinHeight:{type:Boolean,default:!0},listenScroll:{type:Boolean,default:!1},listenBeforeScroll:{type:Boolean,default:!1},listenScrollStart:{type:Boolean,default:!1},listenScrollEnd:{type:Boolean,default:!1},listenTouchEnd:{type:Boolean,default:!1},listenFlick:{type:Boolean,default:!1},listenRefresh:{type:Boolean,default:!1},listenDestroy:{type:Boolean,default:!1}},data:function(){return{beforePullDown:!0,isPullingDown:!1,isErrorPullingDown:!1,bubbleY:0,pullDownStyle:""}},computed:{scrollOptions:function(){return{pullDownRefresh:this.pullDownRefreshObj,pullUpLoad:this.pullUpLoadObj,scrollbar:this.scrollbarObj,direction:this.direction,click:this.click,probeType:this.probeType,tap:this.tap,refreshDelay:this.refreshDelay,initMinHeight:this.initMinHeight,listenScroll:this.listenScroll,listenBeforeScroll:this.listenBeforeScroll,listenScrollStart:this.listenScrollStart,listenScrollEnd:this.listenScrollEnd,listenTouchEnd:this.listenTouchEnd,listenFlick:this.listenFlick,listenRefresh:this.listenRefresh,listenDestroy:this.listenDestroy}},scrollbarObj:function(){return!!this.scrollbar&&{fade:this.scrollbarFade}},pullDownRefreshObj:function(){return!!this.pullDownRefresh&&{threshold:parseInt(this.pullDownRefreshThreshold),stop:parseInt(this.pullDownRefreshStop),txt:this.pullDownRefreshTxt,errorTxt:this.pullDownRefreshFailTxt}},pullUpLoadObj:function(){return!!this.pullUpLoad&&{threshold:parseInt(this.pullUpLoadThreshold),txt:{more:this.pullUpLoadMoreTxt,noMore:this.pullUpLoadNoMoreTxt}}}},methods:{onScroll:function(t){this.$emit("scroll",t)},onBeforeScrollStart:function(){this.$emit("before-scroll-start")},onScrollStart:function(t){console.log(233),this.$emit("scroll-start",t)},onScrollEnd:function(t){this.$emit("scroll-end",t)},onTouchEnd:function(t){this.$emit("touch-end",t)},onFlick:function(){this.$emit("flick")},onRefresh:function(){this.$emit("refresh")},onDestroy:function(){this.$emit("destroy")},onPullingDown:function(){this.$emit("pulling-down")},onPullingUp:function(){this.$emit("pulling-up")},disable:function(){this.$refs.scroll&&this.$refs.scroll.disable()},enable:function(){this.$refs.scroll&&this.$refs.scroll.enable()},refresh:function(){this.$refs.scroll&&this.$refs.scroll.refresh()},destroy:function(){this.$refs.scroll&&this.$refs.scroll.destroy()},scrollTo:function(){this.$refs.scroll&&this.$refs.scroll.scrollTo.apply(this.scroll,arguments)},scrollToElement:function(){this.$refs.scroll&&this.$refs.scroll.scrollToElement.apply(this.scroll,arguments)},rebuild:function(){this.$refs.scroll&&this.$refs.scroll.rebuild()},forceUpdate:function(){this.$refs.scroll&&this.$refs.scroll.forceUpdate()},errorUpdate:function(){this.$refs.scroll&&this.$refs.scroll.errorUpdate()}},components:{Bubble:c,Loading:p,ScrollList:D}},S={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vue-scroll"},[t._t("top"),t._v(" "),n("scroll-list",{ref:"scroll",attrs:{data:t.data,options:t.scrollOptions},on:{"pulling-down":t.onPullingDown,"before-scroll-start":t.onBeforeScrollStart,"pulling-up":t.onPullingUp,scroll:t.onScroll,"scroll-start":t.onScrollStart,"scroll-end":t.onScrollEnd,"touch-end":t.onTouchEnd,flick:t.onFlick,refresh:t.onRefresh,destroy:t.onDestroy},scopedSlots:t._u([{key:"pulldown",fn:function(e){return[t._t("pulldown",[e.pullDownRefresh?n("div",{staticClass:"pulldown-wrapper",style:e.pullDownStyle},[e.beforePullDown?n("div",{staticClass:"before-trigger"},[n("bubble",{attrs:{y:e.bubbleY}})],1):n("div",{staticClass:"after-trigger"},[e.isPullingDown?n("div",{staticClass:"loading"},[n("loading")],1):n("div",[n("span",[t._v(t._s(e.refreshTxt))])])])]):t._e()],{pullDownRefresh:e.pullDownRefresh,pullDownStyle:e.pullDownStyle,beforePullDown:e.beforePullDown,isPullingDown:e.isPullingDown,bubbleY:e.bubbleY,refreshTxt:e.refreshTxt})]}}])},[t._t("default")],2),t._v(" "),t._t("bottom")],2)},staticRenderFns:[]};var R=n("vSla")(x,S,!1,function(t){n("qE8a")},null,null).exports,_=n("w6Jx");i.default.component(o.a.name,o.a),i.default.component(s.name,s),i.default.component(R.name,R),i.default.component(_.a.name,_.a),i.default.filter("toPercentage",function(t){return Number(100*t).toFixed(2)+"%"});n("IAGr"),n("5OHe"),n("991W"),n("ZH82"),n("atYJ");var $={name:"App",data:function(){return{isRun:!1}},created:function(){this._fetch()},methods:{_fetch:function(){var t=this;this.util.api.all(this._getAjax()).then(this.util.api.spread(function(e,n,i){e&&(CC.settings=e.settings),n&&(CC.bank={bankName:n.bankName,branchName:n.branchName,cardNumber:n.cardNumber}),i&&(CC.coins=i.coins),t.isRun=!0}))},_getAjax:function(){return[this.util.api.get("/getSettings"),this.util.api.get("/getBankInfo"),this.util.api.get("/getAllCoin")]},redirect:function(){this.util.getCookie("uid")?this.$router.push("/index"):this.$router.push("/form/account")}}},P={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"app-hd"},[e("cc-header",{attrs:{isBack:!0}})],1),this._v(" "),e("div",{staticClass:"app-bd"},[this.isRun?e("router-view"):this._e()],1)])},staticRenderFns:[]};var T=n("vSla")($,P,!1,function(t){n("It3A")},null,null).exports,k=n("zO6J");i.default.use(k.a);var U=new k.a({routes:[{path:"/index",name:"index",component:function(){return n.e(5).then(n.bind(null,"VzoM"))}},{path:"/form/account",name:"form-account",component:function(){return n.e(9).then(n.bind(null,"iygP"))}},{path:"/form/proceed",name:"form-proceed",component:function(){return n.e(2).then(n.bind(null,"/0lJ"))}},{path:"/form/borrow",name:"form-borrow",component:function(){return n.e(4).then(n.bind(null,"f/B5"))}},{path:"/form/transfer",name:"transfer",component:function(){return n.e(0).then(n.bind(null,"/7S4"))}},{path:"/rule",name:"rule",component:function(){return n.e(6).then(n.bind(null,"Byay"))}},{path:"/approval",name:"approval",component:function(){return n.e(8).then(n.bind(null,"TIoh"))}},{path:"/recharge",name:"recharge",component:function(){return n.e(1).then(n.bind(null,"PnfD"))}},{path:"/mglist",name:"mglist",component:function(){return n.e(7).then(n.bind(null,"/NXV"))}},{path:"/demo",name:"demo",component:function(){return n.e(3).then(n.bind(null,"oIR3"))}}]}),E=n("wSez"),B=n("4YfN"),L=n.n(B),M=n("ZLEe"),N=n.n(M);n("SY6E");function A(t){var e=[],n=void 0,o=void 0;for(n in t.data)e.push(":"+n+'="'+n+'"');var l=N()(t.component||t.components)[0],r={},s={};for(n in t.events){if(!(o=t.events[n]))return;if("function"==typeof o)return void(r[n]=o);var a=o.split(".");r[n]=a[0],a.length>1&&(s[n]=a[a.length-1])}var u,c=this,h=new(i.default.extend({template:'<transition name="fade"><div class="crm-slide" v-if="dShow"><cc-header :isBack=true></cc-header><component '+e.join(" ")+' ref="comp" :is="\''+l+'\'" class="slide-page"></component></div></transition>',data:function(){return L()({dShow:!0},t.data)},components:t.component||t.components,methods:{hide:function(){this.$refs.comp.hide&&this.$refs.comp.hide(),this.time&&clearInterval(this.time),this.dShow=!1}},mounted:function(){var e=this;this.dShow=!0,this.time=setInterval(function(){if(e.$refs.comp)for(n in clearInterval(e.time),e.time=null,t.complete&&t.complete(e.$refs.comp),r)o=r[n],e.$refs.comp.$on&&e.$refs.comp.$on(n,function(){for(var e=arguments.length,i=Array(e),o=0;o<e;o++)i[o]=arguments[o];s[n]&&c[s[n]]&&c[s[n]].apply(c,i);var l=r[n];"function"!=typeof l?t.context&&t.context[l]&&t.context[l].apply(t.context,i):l.apply(t.context,i)||c.hide()})},100)}}));this.comp=h,u=this,CC._slides||(CC._slides=[]),CC._slides.push(u),window.history.pushState(null,"","#"),document.body.appendChild(h.$mount().$el)}window.onpopstate=function(t){CC._slides.length&&CC.popSlide()},CC.popSlide=function(){var t=CC._slides.pop();t&&t.hide(),window.history.back()},A.prototype.hide=function(){this.comp.hide()};var I=A,F={alert:function(t,e){var n=E.MessageBox.alert(t,e);return X.addClass(document.querySelector(".mint-msgbox-wrapper"),"mint-msgbox-wrapper-chaincoin"),n},confirm:function(t,e){return E.MessageBox.confirm(t,e)},confirm_cc:function(t,e){var n=E.MessageBox.confirm(t,e);return X.addClass(document.querySelector(".mint-msgbox-wrapper"),"mint-msgbox-wrapper-chaincoin"),n},loading:function(t){return E.Indicator.open({text:t||"",spinnerType:"fading-circle"}),E.Indicator},slide:function(t){new I(t)}};function H(t,e){return!!t.className.match(new RegExp("(\\s|^)"+e+"(\\s|$)"))}var O={hasClass:H,addClass:function(t,e){H(t,e)||(t.className+=" "+e)},removeClass:function(t,e){H(t,e)&&(t.className=t.className.replace(new RegExp("(\\s|^)"+e+"(\\s|$)")," "))}},Y=n("aozt"),j=n.n(Y),q={getRect:function(t){if(t.getBoundingClientRect){var e=t.getBoundingClientRect();return{top:e.top,left:e.left,width:e.width,height:e.height}}return{top:t.offsetTop,left:t.offsetLeft,width:t.offsetWidth,height:t.offsetHeight}},getCookie:function(t){var e={};return document.cookie.split(";").forEach(function(t){var n=t.split("=");e[n[0]]=n[1]}),e[t]}},W=q.getCookie("uid")||"300100";j.a.defaults.withCredentials=!0,j.a.defaults.baseURL="http://dmpb.com.cn:6002",j.a.interceptors.request.use(function(t){return t.headers["Content-Type"]="application/json; charset=utf-8","get"==t.method?(t.params||(t.params={}),t.params.bitkeepId=W):"post"==t.method&&(t.data.bitkeepId=W),void 0===t.defaultErrAction&&(t.defaultErrAction=!0),t},function(t){return m.a.reject(t)}),j.a.interceptors.response.use(function(t){var e=t.data;return 0==e.code&&e},function(t){return m.a.reject(t)});var z={api:j.a,getCoinInstantPriceByName:function(t,e){e&&e(1e4)}},V={num2money:function(t){return(t+="").replace(/\B(?=(\d{3})+(?!\d))/g,",")}},X=b()({},F,O,z,V,q),J=n("hn2z");new(n.n(J).a),i.default.config.productionTip=!1,i.default.component(E.Header.name,E.Header),i.default.component(E.Button.name,E.Button),i.default.component(E.Field.name,E.Field),i.default.prototype.util=X,CC.$router=U,CC.userid=X.getCookie("uid"),new i.default({el:"#app",router:U,components:{App:T},template:"<App/>"})},SY6E:function(t,e){},XlNh:function(t,e){},ZH82:function(t,e){},atYJ:function(t,e){},qE8a:function(t,e){},rXXD:function(t,e,n){"use strict";var i={name:"g-text",props:{label:{type:String,default:"",required:!1},placeholder:{type:String,default:"请填写",required:!1},value:{default:""},readonly:{type:Boolean}},data:function(){return{dLabel:this.label,dPlaceholder:this.placeholder,dValue:this.value,dReadonly:this.readonly}},watch:{dValue:function(t){this.$emit("input",t)},value:function(t){this.dValue=t}}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"g-form-text",attrs:{type:"text"}},[n("mt-field",{attrs:{label:t.dLabel,placeholder:t.dPlaceholder,disableClear:!0,readonly:t.dReadonly},model:{value:t.dValue,callback:function(e){t.dValue=e},expression:"dValue"}})],1)},staticRenderFns:[]};var l=n("vSla")(i,o,!1,function(t){n("XlNh")},null,null);e.a=l.exports},w6Jx:function(t,e,n){"use strict";var i={name:"cc-header",created:function(){CC.header=this},props:{title:{type:String,default:""},isBack:{type:Boolean,default:!1}},data:function(){return{dTitle:this.title||"币金所"}},methods:{_back:function(){CC._slides.length?CC.popSlide():"index"!==this.$route.name&&history.back()}}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("mt-header",{attrs:{fixed:"",title:this.dTitle}},[this.isBack?e("div",{attrs:{slot:"left"},slot:"left"},[e("mt-button",{attrs:{icon:"back"},on:{click:this._back}})],1):this._e()])},staticRenderFns:[]},l=n("vSla")(i,o,!1,null,null,null).exports;e.a=l}},["NHnr"]);
//# sourceMappingURL=app.f0d78577839693596e9b.js.map