webpackJsonp([0],{"/7S4":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={props:{coin:{type:Object,default:null},count:{type:Number,default:0}},data:function(){return{dOptions:[{label:"0.000199500BTC（6.35）确认时间<2小时",value:1},{label:"0.000199500BTC（6.35）确认时间<2小时",value:2},{label:"0.000199500BTC（6.35）确认时间<2小时",value:3}],dChecked:1,dCoin:this.coin,dCount:""+this.count+this.coin.name}},created:function(){console.log(this.coin)},methods:{_next:function(){this.$emit("next")}}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-transfer"},[t._m(0),t._v(" "),n("div",{staticClass:"form-wrap"},[n("g-text",{attrs:{label:"收货地址",readonly:!0},model:{value:t.dCoin.address,callback:function(e){t.$set(t.dCoin,"address",e)},expression:"dCoin.address"}}),t._v(" "),n("g-text",{attrs:{label:"数量",readonly:!0},model:{value:t.dCount,callback:function(e){t.dCount=e},expression:"dCount"}}),t._v(" "),n("g-radio",{attrs:{options:t.dOptions},model:{value:t.dChecked,callback:function(e){t.dChecked=e},expression:"dChecked"}}),t._v(" "),n("div",{staticClass:"form-btns"},[n("mt-button",{staticClass:"btn-next",attrs:{type:"primary",size:"large"},on:{click:t._next}},[t._v("下一步")])],1)],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"line-wrap"},[e("div",{staticClass:"g-line"})])}]};var l=n("vSla")(a,s,!1,function(t){n("p58J")},null,null).exports;e.default=l},p58J:function(t,e){}});
//# sourceMappingURL=0.39037edb94f98b0c259b.js.map