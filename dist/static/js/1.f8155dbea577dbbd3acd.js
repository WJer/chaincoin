webpackJsonp([1],{"/7S4":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("3cXf"),s=n.n(i),a={},o=function(){if(!(arguments.length<1)){for(var t,e,n,i=arguments[0],o=[],r=1;r<arguments.length;r++)arguments[r]instanceof Function?a[i]=arguments[r]:o.push(s()(arguments[r]));window.JSHost?window.JSHost[i].apply(this,o):(t=i,e=s()(o),n={cmd:t,data:e},window.webkit&&window.webkit.messageHandlers&&window.webkit.messageHandlers.JSHost.postMessage(n))}},r={props:{coin:{type:Object,default:null},count:{type:Number,default:0}},data:function(){return{dOptions:[{label:"0.000199500BTC（6.35）确认时间<2小时",value:1},{label:"0.000199500BTC（6.35）确认时间<2小时",value:2},{label:"0.000199500BTC（6.35）确认时间<2小时",value:3}],dChecked:1,dCoin:this.coin,dCount:""+this.count+this.coin.name}},created:function(){console.log(this.coin)},methods:{_next:function(){var t=this,e=this.util.loading("加载中");this._fetchSign(function(n,i){e.close(),o("actionP",{contract:t.coin.name,appId:"6V2RGS0VuSmZDTXJHeGwVXNl",amount:1,coin:t.coin.name,orderId:n,userId:CC.userid,fee:0,from:"",to:t.coin.address,note:"",sign:"",title:"",hash:i},function(n,i){e.close(),n?t.util.alert(s()(n)):t.$emit("next")})})},_fetchSign:function(t){var e=+new Date;this.util.api.get("/createSign",{params:{amount:this.count,coin:this.coin.name,orderId:e,userId:CC.userid}}).then(function(n){t&&t(e,n.hash)})}}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-transfer"},[t._m(0),t._v(" "),n("div",{staticClass:"form-wrap"},[n("g-text",{attrs:{label:"收币地址",readonly:!0},model:{value:t.dCoin.address,callback:function(e){t.$set(t.dCoin,"address",e)},expression:"dCoin.address"}}),t._v(" "),n("g-text",{attrs:{label:"数量",readonly:!0},model:{value:t.dCount,callback:function(e){t.dCount=e},expression:"dCount"}}),t._v(" "),n("div",{staticClass:"form-btns"},[n("mt-button",{staticClass:"btn-next",attrs:{type:"primary",size:"large"},on:{click:t._next}},[t._v("下一步")])],1)],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"line-wrap"},[e("div",{staticClass:"g-line"})])}]};var l=n("vSla")(r,c,!1,function(t){n("o9UJ")},null,null).exports;e.default=l},"3cXf":function(t,e,n){t.exports={default:n("RJ+u"),__esModule:!0}},"RJ+u":function(t,e,n){var i=n("AKd3"),s=i.JSON||(i.JSON={stringify:JSON.stringify});t.exports=function(t){return s.stringify.apply(s,arguments)}},o9UJ:function(t,e){}});
//# sourceMappingURL=1.f8155dbea577dbbd3acd.js.map