webpackJsonp([5],{iygP:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={components:{inputcell:i("rXXD").a},data:function(){return{dMobile:"",dCode:"",dCountdown:0,dCodeBtn:"发送验证码",dClick:!1,I:null}},methods:{_next:function(){var t=this,e=this.util.loading("加载中...");this.util.api.post("/registerByPhone",{bitkeepId:CC.userid,phone:this.dMobile,code:this.dCode}).then(function(i){e.close(),i.result?(window.localStorage.time=+new Date,CC.userid=window.localStorage.uid=i.bitkeepId,CC.isRegist=!0,t.$emit("next")):t.util.alert(i.message)})},_sendCode:function(t){var e=this;this.dClick||(this.dClick=!0,this.util.api.post("/sendMessageCode",{phone:this.dMobile}).then(function(){e.dCodeBtn="重新发送",e.dClick=!1,e._runCountdown()}))},_runCountdown:function(){var t=this;this.dCountdown=60,this.I=setInterval(function(){t.dCountdown--,0==t.dCountdown&&clearInterval(t.I)},1e3)},beforeDestroy:function(){clearInterval(this.I)}}},s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-form"},[t._m(0),t._v(" "),i("div",{staticClass:"form-wrap"},[i("div",{staticClass:"item-wrap"},[i("mt-field",{attrs:{label:"手机",type:"tel",placeholder:"请输入手机号"},model:{value:t.dMobile,callback:function(e){t.dMobile=e},expression:"dMobile"}})],1),t._v(" "),i("div",{staticClass:"item-wrap"},[i("mt-field",{attrs:{label:"验证码",type:"number",placeholder:"请输入验证码"},model:{value:t.dCode,callback:function(e){t.dCode=e},expression:"dCode"}}),t._v(" "),t.dCountdown?i("div",{staticClass:"btn-send"},[t._v(t._s(t.dCountdown)+"秒")]):i("div",{staticClass:"btn-send",on:{click:function(e){t._sendCode(e)}}},[t._v(t._s(t.dCodeBtn))])],1)]),t._v(" "),i("div",{staticClass:"form-btns"},[i("mt-button",{staticClass:"btn-next",attrs:{type:"primary",size:"large"},on:{click:t._next}},[t._v("下一步")])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"line-wrap"},[e("div",{staticClass:"line"}),this._v(" "),e("div",{staticClass:"text"},[this._v("为完成借款，需绑定手机号")])])}]};var o=i("vSla")(n,s,!1,function(t){i("lXta")},null,null).exports;e.default=o},lXta:function(t,e){}});
//# sourceMappingURL=5.57065fd8fe85d15b4b0b.js.map