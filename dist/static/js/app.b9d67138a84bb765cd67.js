webpackJsonp([11],{"/Bgi":function(t,e){},"50lq":function(t,e){},"5OHe":function(t,e){},"991W":function(t,e){},EDgR:function(t,e){!function(t,e){var i,n=t.document,o=n.documentElement,l=n.querySelector('meta[name="viewport"]'),r=1;if(/i(Phone|Pod|Pad)/.test(navigator.userAgent)){var s=t.devicePixelRatio;r=s>=3?3:s>=2?2:1}else r=1;i=1/r,o.setAttribute("data-dpr",r),l.setAttribute("content","initial-scale="+i+", maximum-scale="+i+", user-scalable=no");var a=function t(){n.removeEventListener("DOMContentLoaded",t),n.body.style.fontSize=16*r+"px"};"complete"===n.readyState?a():n.addEventListener("DOMContentLoaded",a,!1);var u=function(){var t=375*r,i=o.getBoundingClientRect().width;i>t&&(i=t),o.style.fontSize=i/10+"px",e.remScale=i/(375*r)};u();var c=null;t.addEventListener("resize",function(){c&&clearTimeout(c),c=setTimeout(u,300)},!1),e.rem=37.5,e.dpr=r,e.rem2px=function(t){var i=parseFloat(t)*e.rem;return"string"==typeof t&&t.match(/rem$/)&&(i+="px"),i},e.px2rem=function(t){var i=parseFloat(t)/e.rem;return"string"==typeof t&&t.match(/px$/)&&(i+="rem"),i}}(window,CC=window.CC||{})},IAGr:function(t,e){CC.delay=1e3,CC._slides=[],CC.userid="300100"},MJUK:function(t,e){},MfB9:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});i("EDgR");var n=i("MVMM"),o=i("rXXD"),l={name:"g-radio",model:{prop:"checked",event:"change"},props:{options:{type:Array,required:!0,default:function(){return[]}},checked:{required:!1}},data:function(){return{dOptions:this.options,dChecked:this.checked}},methods:{_click:function(t){this.dChecked===t.value?this.dChecked="":this.dChecked=t.value,this.$emit("change",this.dChecked)}}},r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"g-form-radio",attrs:{type:"text"}},[i("div",{staticClass:"radio-hd"},[t._v("手续费")]),t._v(" "),t._l(t.dOptions,function(e){return i("div",{staticClass:"radio-item"},[i("div",{staticClass:"radio_cb",class:{checked:t.dChecked==e.value},on:{click:function(i){t._click(e)}}}),t._v(" "),i("div",{staticClass:"radio_bd"},[i("p",[t._v(t._s(e.label))])])])})],2)},staticRenderFns:[]};var s=i("vSla")(l,r,!1,function(t){i("MJUK")},"data-v-7badc01f",null).exports,a={name:"bubble",props:{y:{type:Number,default:0}},data:function(){return{width:50,height:80}},computed:{distance:function(){return Math.max(0,Math.min(this.y*this.ratio,this.maxDistance))},style:function(){return"width:"+this.width/this.ratio+"px;height:"+this.height/this.ratio+"px"}},created:function(){this.ratio=window.devicePixelRatio,this.width*=this.ratio,this.height*=this.ratio,this.initRadius=18*this.ratio,this.minHeadRadius=12*this.ratio,this.minTailRadius=5*this.ratio,this.initArrowRadius=10*this.ratio,this.minArrowRadius=6*this.ratio,this.arrowWidth=3*this.ratio,this.maxDistance=40*this.ratio,this.initCenterX=25*this.ratio,this.initCenterY=25*this.ratio,this.headCenter={x:this.initCenterX,y:this.initCenterY}},mounted:function(){this._draw()},methods:{_draw:function(){var t=this.$refs.bubble,e=t.getContext("2d");e.clearRect(0,0,t.width,t.height),this._drawBubble(e),this._drawArrow(e)},_drawBubble:function(t){t.save(),t.beginPath();var e=this.distance/this.maxDistance,i=this.initRadius-(this.initRadius-this.minHeadRadius)*e;this.headCenter.y=this.initCenterY-(this.initRadius-this.minHeadRadius)*e,t.arc(this.headCenter.x,this.headCenter.y,i,0,Math.PI,!0);var n=this.initRadius-(this.initRadius-this.minTailRadius)*e,o={x:this.headCenter.x,y:this.headCenter.y+this.distance},l={x:o.x-n,y:o.y},r={x:l.x,y:l.y-this.distance/2};t.quadraticCurveTo(r.x,r.y,l.x,l.y),t.arc(o.x,o.y,n,Math.PI,0,!0);var s={x:this.headCenter.x+i,y:this.headCenter.y},a={x:o.x+n,y:s.y+this.distance/2};t.quadraticCurveTo(a.x,a.y,s.x,s.y),t.fillStyle="rgb(170,170,170)",t.fill(),t.strokeStyle="rgb(153,153,153)",t.stroke(),t.restore()},_drawArrow:function(t){t.save(),t.beginPath();var e=this.distance/this.maxDistance,i=this.initArrowRadius-(this.initArrowRadius-this.minArrowRadius)*e;t.arc(this.headCenter.x,this.headCenter.y,i-(this.arrowWidth-e),-Math.PI/2,0,!0),t.arc(this.headCenter.x,this.headCenter.y,i,0,3*Math.PI/2,!1),t.lineTo(this.headCenter.x,this.headCenter.y-i-this.arrowWidth/2+e),t.lineTo(this.headCenter.x+2*this.arrowWidth-2*e,this.headCenter.y-i+this.arrowWidth/2),t.lineTo(this.headCenter.x,this.headCenter.y-i+3*this.arrowWidth/2-e),t.fillStyle="rgb(255,255,255)",t.fill(),t.strokeStyle="rgb(170,170,170)",t.stroke(),t.restore()}},watch:{y:function(){this._draw()}}},u={render:function(){var t=this.$createElement;return(this._self._c||t)("canvas",{ref:"bubble",style:this.style,attrs:{width:this.width,height:this.height}})},staticRenderFns:[]},c=i("vSla")(a,u,!1,null,null,null).exports,h={name:"loading",data:function(){return{balde:12}},props:{size:{type:Number,default:24}},computed:{style:function(){var t=this.size+"px";return{width:t,height:t}}}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"loading"},[e("span",{staticClass:"loading-spinners",style:this.style},this._l(this.balde,function(t,i){return e("i",{key:i,staticClass:"loading-spinner"})}))])},staticRenderFns:[]};var p=i("vSla")(h,d,!1,function(t){i("MfB9")},"data-v-4f404bf6",null).exports,f=i("rVsN"),m=i.n(f),w=i("aA9S"),y=i.n(w),b=i("hZtR"),v={observeDOM:!0,click:!0,probeType:0,scrollbar:!1,pullDownRefresh:!1,pullUpLoad:!1},g={name:"scroll-list",props:{data:{type:Array,default:function(){return[]}},options:{type:Object,default:function(){return{}}}},data:function(){return{beforePullDown:!0,isPullingDown:!1,isErrorPullingDown:!1,isRebounding:!1,isPullUpLoad:!1,pullUpDirty:!0,bubbleY:0,pullDownStyle:""}},computed:{pullDownRefresh:function(){return this.options.pullDownRefresh},pullUpLoad:function(){return this.options.pullUpLoad},pullUpTxt:function(){var t=this.pullUpLoad,e=t&&t.txt,i=e&&e.more||"加载更多",n=e&&e.noMore||"没有更多了";return this.pullUpDirty?i:n},refreshTxt:function(){var t=this.pullDownRefresh;return this.isErrorPullingDown?t&&t.errorTxt||"刷新失败":t&&t.txt||"刷新成功"}},created:function(){this.pullDownInitTop=-50},mounted:function(){setTimeout(this.initScroll,this.options.refreshDelay)},methods:{initScroll:function(){var t=this;if(this.$refs.wrapper){this.setScrollViewMinHeight();var e=y()({},v,{scrollY:"vertical"===this.options.direction,scrollX:"horizontal"===this.options.direction},this.options);this.scroll=new b.a(this.$refs.wrapper,e),this.options.listenBeforeScroll&&this.scroll.on("beforeScrollStart",function(){t.$emit("before-scroll-start")}),this.options.listenScrollStart&&this.scroll.on("scrollStart",function(e){t.$emit("scroll-start",e)}),this.options.listenScroll&&!this.pullDownRefresh&&0!==this.options.probeType&&this.scroll.on("scroll",function(e){t.$emit("scroll",e)}),this.options.listenScrollEnd&&this.scroll.on("scrollEnd",function(e){t.$emit("scroll-end",e)}),this.options.listenTouchEnd&&this.scroll.on("touchEnd",function(e){t.$emit("touch-end",e)}),this.options.listenFlick&&this.scroll.on("flick",function(){t.$emit("flick")}),this.options.listenRefresh&&this.scroll.on("refresh",function(){t.$emit("refresh")}),this.options.listenDestroy&&this.scroll.on("refresh",function(){t.$emit("destroy")}),this.pullDownRefresh&&"horizontal"!==this.options.direction&&this._initPullDownRefresh(),this.pullUpLoad&&"horizontal"!==this.options.direction&&this._initPullUpLoad()}},forceUpdate:function(t){var e=this;this.pullDownRefresh&&this.isPullingDown?(this.isPullingDown=!1,this._reboundPullDown().then(function(){e._afterPullDown()})):this.pullUpLoad&&this.isPullUpLoad?(this.isPullUpLoad=!1,this.scroll.finishPullUp(),this.pullUpDirty=t,this.refresh()):this.refresh()},errorUpdate:function(){var t=this;this.pullDownRefresh&&this.isPullingDown?(this.isPullingDown=!1,this.isErrorPullingDown=!0,this._reboundPullDown().then(function(){t._afterPullDown()})):this.refresh()},setScrollViewMinHeight:function(){if(this.$refs.scrollWrapper&&(this.pullDownRefresh||this.pullUpLoad||this.options.initMinHeight)){var t=this.util.getRect(this.$refs.wrapper).height,e=this.util.getRect(this.$refs.scrollWrapper).height-1;this.$refs.scrollWrapper.style.minHeight=e<=t?t+1+"px":"unset"}},getScrollViewHeight:function(){return this.$refs.scrollWrapper.offsetHeight},_initPullDownRefresh:function(){var t=this;this.scroll.on("scroll",function(e){t.options.listenScroll&&0!==t.options.probeType&&t.$emit("scroll",e),t.beforePullDown?(t.bubbleY=Math.max(0,e.y+t.pullDownInitTop),t.pullDownStyle="top:"+Math.min(e.y+t.pullDownInitTop,10)+"px"):t.bubbleY=0,t.isRebounding&&(t.pullDownStyle="top:"+Math.min(e.y-30,10)+"px")}),this.scroll.on("pullingDown",function(){t.$emit("pulling-down"),t.beforePullDown=!1,t.isPullingDown=!0})},_reboundPullDown:function(){var t=this,e=this.pullDownRefresh.stopTime,i=void 0===e?600:e;return new m.a(function(e){setTimeout(function(){t.isRebounding=!0,t.scroll.finishPullDown(),t.isPullingDown=!1,e()},i)})},_afterPullDown:function(){var t=this;setTimeout(function(){t.pullDownStyle="top:"+t.pullDownInitTop+"px",t.beforePullDown=!0,t.isRebounding=!1,t.isErrorPullingDown=!1,t.refresh()},this.scroll.options.bounceTime)},_initPullUpLoad:function(){var t=this;this.scroll.on("pullingUp",function(){t.$emit("pulling-up"),t.isPullUpLoad=!0})},disable:function(){this.scroll&&this.scroll.disable()},enable:function(){this.scroll&&this.scroll.enable()},refresh:function(){this.scroll&&this.scroll.refresh()},destroy:function(){this.scroll.destroy()},scrollTo:function(){this.scroll&&this.scroll.scrollTo.apply(this.scroll,arguments)},scrollToElement:function(){this.scroll&&this.scroll.scrollToElement.apply(this.scroll,arguments)},rebuild:function(){this.destroy(),this.initScroll()}},watch:{data:function(){var t=this;setTimeout(function(){t.forceUpdate(!0)},this.options.refreshDelay)}},components:{Loading:p}},C={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrapper",staticClass:"scroll-list-wrapper"},[i("div",{staticClass:"scroll-content"},[i("div",{ref:"scrollWrapper",staticClass:"scroll-wrapper"},[t._t("default")],2),t._v(" "),t._t("pullup",[t.pullUpLoad?i("div",{staticClass:"pullup-wrapper"},[t.isPullUpLoad?i("div",{staticClass:"after-trigger"},[i("loading")],1):i("div",{staticClass:"before-trigger"},[i("span",[t._v(t._s(t.pullUpTxt))])])]):t._e()],{pullUpLoad:t.pullUpLoad,isPullUpLoad:t.isPullUpLoad})],2),t._v(" "),t._t("pulldown",null,{pullDownRefresh:t.pullDownRefresh,pullDownStyle:t.pullDownStyle,beforePullDown:t.beforePullDown,isPullingDown:t.isPullingDown,bubbleY:t.bubbleY,refreshTxt:t.refreshTxt})],2)},staticRenderFns:[]};var D=i("vSla")(g,C,!1,function(t){i("50lq")},null,null).exports,x={name:"cc-scroll",props:{data:{type:Array,default:function(){return[]}},scrollbar:{type:Boolean,default:!1},scrollbarFade:{type:Boolean,default:!0},pullDownRefresh:{type:Boolean,default:!0},pullDownRefreshThreshold:{type:Number,default:90},pullDownRefreshStop:{type:Number,default:40},pullDownRefreshTxt:{type:String,default:"刷新成功"},pullDownRefreshFailTxt:{type:String,default:"刷新失败"},pullUpLoad:{type:Boolean,default:!1},pullUpLoadThreshold:{type:Number,default:0},pullUpLoadMoreTxt:{type:String,default:"加载更多"},pullUpLoadNoMoreTxt:{type:String,default:"没有更多了"},direction:{type:String,default:"vertical"},click:{type:Boolean,default:!0},probeType:{type:Number,default:0},tap:{type:Boolean,default:!1},refreshDelay:{type:Number,default:20},initMinHeight:{type:Boolean,default:!0},listenScroll:{type:Boolean,default:!1},listenBeforeScroll:{type:Boolean,default:!1},listenScrollStart:{type:Boolean,default:!1},listenScrollEnd:{type:Boolean,default:!1},listenTouchEnd:{type:Boolean,default:!1},listenFlick:{type:Boolean,default:!1},listenRefresh:{type:Boolean,default:!1},listenDestroy:{type:Boolean,default:!1}},data:function(){return{beforePullDown:!0,isPullingDown:!1,isErrorPullingDown:!1,bubbleY:0,pullDownStyle:""}},computed:{scrollOptions:function(){return{pullDownRefresh:this.pullDownRefreshObj,pullUpLoad:this.pullUpLoadObj,scrollbar:this.scrollbarObj,direction:this.direction,click:this.click,probeType:this.probeType,tap:this.tap,refreshDelay:this.refreshDelay,initMinHeight:this.initMinHeight,listenScroll:this.listenScroll,listenBeforeScroll:this.listenBeforeScroll,listenScrollStart:this.listenScrollStart,listenScrollEnd:this.listenScrollEnd,listenTouchEnd:this.listenTouchEnd,listenFlick:this.listenFlick,listenRefresh:this.listenRefresh,listenDestroy:this.listenDestroy}},scrollbarObj:function(){return!!this.scrollbar&&{fade:this.scrollbarFade}},pullDownRefreshObj:function(){return!!this.pullDownRefresh&&{threshold:parseInt(this.pullDownRefreshThreshold),stop:parseInt(this.pullDownRefreshStop),txt:this.pullDownRefreshTxt,errorTxt:this.pullDownRefreshFailTxt}},pullUpLoadObj:function(){return!!this.pullUpLoad&&{threshold:parseInt(this.pullUpLoadThreshold),txt:{more:this.pullUpLoadMoreTxt,noMore:this.pullUpLoadNoMoreTxt}}}},methods:{onScroll:function(t){this.$emit("scroll",t)},onBeforeScrollStart:function(){this.$emit("before-scroll-start")},onScrollStart:function(t){console.log(233),this.$emit("scroll-start",t)},onScrollEnd:function(t){this.$emit("scroll-end",t)},onTouchEnd:function(t){this.$emit("touch-end",t)},onFlick:function(){this.$emit("flick")},onRefresh:function(){this.$emit("refresh")},onDestroy:function(){this.$emit("destroy")},onPullingDown:function(){this.$emit("pulling-down")},onPullingUp:function(){this.$emit("pulling-up")},disable:function(){this.$refs.scroll&&this.$refs.scroll.disable()},enable:function(){this.$refs.scroll&&this.$refs.scroll.enable()},refresh:function(){this.$refs.scroll&&this.$refs.scroll.refresh()},destroy:function(){this.$refs.scroll&&this.$refs.scroll.destroy()},scrollTo:function(){this.$refs.scroll&&this.$refs.scroll.scrollTo.apply(this.scroll,arguments)},scrollToElement:function(){this.$refs.scroll&&this.$refs.scroll.scrollToElement.apply(this.scroll,arguments)},rebuild:function(){this.$refs.scroll&&this.$refs.scroll.rebuild()},forceUpdate:function(){this.$refs.scroll&&this.$refs.scroll.forceUpdate()},errorUpdate:function(){this.$refs.scroll&&this.$refs.scroll.errorUpdate()}},components:{Bubble:c,Loading:p,ScrollList:D}},S={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vue-scroll"},[t._t("top"),t._v(" "),i("scroll-list",{ref:"scroll",attrs:{data:t.data,options:t.scrollOptions},on:{"pulling-down":t.onPullingDown,"before-scroll-start":t.onBeforeScrollStart,"pulling-up":t.onPullingUp,scroll:t.onScroll,"scroll-start":t.onScrollStart,"scroll-end":t.onScrollEnd,"touch-end":t.onTouchEnd,flick:t.onFlick,refresh:t.onRefresh,destroy:t.onDestroy},scopedSlots:t._u([{key:"pulldown",fn:function(e){return[t._t("pulldown",[e.pullDownRefresh?i("div",{staticClass:"pulldown-wrapper",style:e.pullDownStyle},[e.beforePullDown?i("div",{staticClass:"before-trigger"},[i("bubble",{attrs:{y:e.bubbleY}})],1):i("div",{staticClass:"after-trigger"},[e.isPullingDown?i("div",{staticClass:"loading"},[i("loading")],1):i("div",[i("span",[t._v(t._s(e.refreshTxt))])])])]):t._e()],{pullDownRefresh:e.pullDownRefresh,pullDownStyle:e.pullDownStyle,beforePullDown:e.beforePullDown,isPullingDown:e.isPullingDown,bubbleY:e.bubbleY,refreshTxt:e.refreshTxt})]}}])},[t._t("default")],2),t._v(" "),t._t("bottom")],2)},staticRenderFns:[]};var R=i("vSla")(x,S,!1,function(t){i("aDlk")},null,null).exports,_=i("w6Jx");n.default.component(o.a.name,o.a),n.default.component(s.name,s),n.default.component(R.name,R),n.default.component(_.a.name,_.a),n.default.filter("toPercentage",function(t){return Number(100*t).toFixed(2)+"%"});i("IAGr"),i("5OHe"),i("991W"),i("ZH82"),i("atYJ");var $={name:"App",data:function(){return{isRun:!1}},mounted:function(){var t=this;CC.isBitApp?this.util.api.get("/isRegistered").then(function(e){0==e.code&&(t.isRun=!0,CC.isRegist=e.result)}):this.isRun=!0}},P={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"app-hd"},[e("cc-header",{attrs:{isBack:!0}})],1),this._v(" "),e("div",{staticClass:"app-bd"},[this.isRun?e("router-view"):this._e()],1)])},staticRenderFns:[]};var T=i("vSla")($,P,!1,function(t){i("XUPc")},null,null).exports,k=i("zO6J");n.default.use(k.a);var L=new k.a({routes:[{path:"/",redirect:"index"},{path:"/index",name:"index",component:function(){return i.e(8).then(i.bind(null,"VzoM"))}},{path:"/form/account",name:"form-account",component:function(){return i.e(4).then(i.bind(null,"iygP"))}},{path:"/form/proceed",name:"form-proceed",component:function(){return i.e(2).then(i.bind(null,"/0lJ"))}},{path:"/form/borrow",name:"form-borrow",component:function(){return i.e(5).then(i.bind(null,"f/B5"))}},{path:"/form/transfer",name:"transfer",component:function(){return i.e(0).then(i.bind(null,"/7S4"))}},{path:"/rule",name:"rule",component:function(){return i.e(6).then(i.bind(null,"Byay"))}},{path:"/approval",name:"approval",component:function(){return i.e(9).then(i.bind(null,"TIoh"))}},{path:"/recharge",name:"recharge",component:function(){return i.e(1).then(i.bind(null,"PnfD"))}},{path:"/mglist",name:"mglist",component:function(){return i.e(7).then(i.bind(null,"/NXV"))}},{path:"/demo",name:"demo",component:function(){return i.e(3).then(i.bind(null,"oIR3"))}}]});L.beforeEach(function(t,e,i){CC.header&&CC.header.toggleList(!1),i()});var U=L,B=i("wSez"),E=i("4YfN"),M=i.n(E),A=i("ZLEe"),F=i.n(A),I=(i("SY6E"),function(t){CC._slides||(CC._slides=[]),CC._slides.push(t),window.history.pushState(null,null,"/#/crmslide/"+(new Date).getTime())}),H=function t(){var e=CC._slides.pop();e&&(e.comp.hide(),CC._slides.length||window.removeEventListener("popstate",t))};function N(t){var e=this,i=[],o=void 0,l=void 0;for(o in t.data)i.push(":"+o+'="'+o+'"');var r=F()(t.component||t.components)[0],s={},a={};for(o in t.events)if(l=t.events[o])if("function"!=typeof l){var u=l.split(".");s[o]=u[0],u.length>1&&(a[o]=u[u.length-1])}else s[o]=l;var c=this,h=new(n.default.extend({template:'<transition name="fade"><div class="crm-slide" v-if="dShow"><cc-header :isBack=true></cc-header><component '+i.join(" ")+' ref="comp" :is="\''+r+'\'" class="slide-page"></component></div></transition>',data:function(){return M()({dShow:!0},t.data)},components:t.component||t.components,methods:{hide:function(){this.$refs.comp&&this.$refs.comp.hide&&this.$refs.comp.hide(),this.time&&clearInterval(this.time),this.dShow=!1}},mounted:function(){var e=this;this.dShow=!0,this.time=setInterval(function(){if(e.$refs.comp)for(o in clearInterval(e.time),e.time=null,t.complete&&t.complete(e.$refs.comp),s)l=s[o],e.$refs.comp.$on&&e.$refs.comp.$on(o,function(){for(var e=arguments.length,i=Array(e),n=0;n<e;n++)i[n]=arguments[n];a[o]&&c[a[o]]&&c[a[o]].apply(c,i);var l=s[o];"function"!=typeof l?t.context&&t.context[l]&&t.context[l].apply(t.context,i):l.apply(t.context,i)||c.hide()})},100)}}));this.comp=h,setTimeout(function(){CC._slides.length||window.addEventListener("popstate",H),I(e)},50),document.body.appendChild(h.$mount().$el)}N.prototype.hide=function(){history.back()};var O=N,Y={alert:function(t,e){var i=B.MessageBox.alert(t,e);return Z.addClass(document.querySelector(".mint-msgbox-wrapper"),"mint-msgbox-wrapper-chaincoin"),i},confirm:function(t,e,i){var n=Object(B.MessageBox)(y()({title:e,message:t,showCancelButton:!0},i));return Z.addClass(document.querySelector(".mint-msgbox-wrapper"),"mint-msgbox-wrapper-chaincoin"),n},loading:function(t){return B.Indicator.open({text:t||"",spinnerType:"fading-circle"}),B.Indicator},slide:function(t){new O(t)}};function W(t,e){return!!t.className.match(new RegExp("(\\s|^)"+e+"(\\s|$)"))}var j={hasClass:W,addClass:function(t,e){W(t,e)||(t.className+=" "+e)},removeClass:function(t,e){W(t,e)&&(t.className=t.className.replace(new RegExp("(\\s|^)"+e+"(\\s|$)")," "))}},q=i("aozt"),z=i.n(q);z.a.defaults.withCredentials=!0,z.a.defaults.baseURL="http://dmpb.com.cn:6002",z.a.interceptors.request.use(function(t){return t.headers["Content-Type"]="application/json; charset=utf-8","get"==t.method?(t.params||(t.params={}),t.params.bitkeepId=CC.userid):"post"==t.method&&(t.data.bitkeepId=CC.userid),void 0===t.defaultErrAction&&(t.defaultErrAction=!0),t},function(t){return m.a.reject(t)}),z.a.interceptors.response.use(function(t){var e=t.data;return 0==e.code&&e},function(t){return m.a.reject(t)});var V={api:z.a,getCoinInstantPriceByName:function(t,e){e&&e(1e4)}},X={num2money:function(t){return(t+="").replace(/\B(?=(\d{3})+(?!\d))/g,",")}},J={getRect:function(t){if(t.getBoundingClientRect){var e=t.getBoundingClientRect();return{top:e.top,left:e.left,width:e.width,height:e.height}}return{top:t.offsetTop,left:t.offsetLeft,width:t.offsetWidth,height:t.offsetHeight}},getCookie:function(t){var e={};return document.cookie.split(";").forEach(function(t){var i=t.split("=");e[i[0]]=i[1]}),e[t]}},Z=y()({},Y,j,V,X,J),G=i("hn2z");new(i.n(G).a),n.default.config.productionTip=!1,n.default.component(B.Header.name,B.Header),n.default.component(B.Button.name,B.Button),n.default.component(B.Field.name,B.Field),n.default.prototype.util=Z,CC.$router=U,CC.userid=Z.getCookie("uid"),CC.isBitApp=!!CC.userid,new n.default({el:"#app",router:U,components:{App:T},template:"<App/>"})},SY6E:function(t,e){},XUPc:function(t,e){},ZH82:function(t,e){},aDlk:function(t,e){},atYJ:function(t,e){},rXXD:function(t,e,i){"use strict";var n={name:"g-text",props:{label:{type:String,default:"",required:!1},placeholder:{type:String,default:"请填写",required:!1},value:{default:""},readonly:{type:Boolean},type:{type:String,required:!1}},data:function(){return{dLabel:this.label,dPlaceholder:this.placeholder,dValue:this.value,dReadonly:this.readonly,dType:this.type}},watch:{dValue:function(t){this.$emit("input",t)},value:function(t){this.dValue=t},placeholder:function(t){this.dPlaceholder=t}}},o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"g-form-text",attrs:{type:"text"}},[i("mt-field",{attrs:{label:t.dLabel,placeholder:t.dPlaceholder,disableClear:!0,readonly:t.dReadonly,type:t.dType},model:{value:t.dValue,callback:function(e){t.dValue=e},expression:"dValue"}})],1)},staticRenderFns:[]};var l=i("vSla")(n,o,!1,function(t){i("ytQi")},null,null);e.a=l.exports},w6Jx:function(t,e,i){"use strict";var n={name:"cc-header",created:function(){CC.header=this},props:{title:{type:String,default:""},isBack:{type:Boolean,default:!1}},data:function(){return{dTitle:this.title||"币金所",dShowList:!1}},methods:{_back:function(){window.history.back()},_toList:function(){this.$router.push("/mglist")},toggleList:function(t){this.dShowList=t}}},o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("mt-header",{attrs:{fixed:"",title:t.dTitle}},[t.isBack?i("div",{attrs:{slot:"left"},slot:"left"},[i("mt-button",{attrs:{icon:"back"},on:{click:t._back}})],1):t._e(),t._v(" "),t.dShowList?i("div",{staticClass:"icon-setting",attrs:{slot:"right"},on:{click:t._toList},slot:"right"},[i("div",{staticClass:"g-line"}),t._v(" "),i("div",{staticClass:"g-line"}),t._v(" "),i("div",{staticClass:"g-line"})]):t._e()])},staticRenderFns:[]};var l=i("vSla")(n,o,!1,function(t){i("/Bgi")},"data-v-6ce7d646",null).exports;e.a=l},ytQi:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.b9d67138a84bb765cd67.js.map