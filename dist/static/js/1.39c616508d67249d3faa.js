webpackJsonp([1],{PnfD:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={props:{coin:{type:Object,default:null},count:{type:Number,default:0},cycle:{type:Number,default:0},money:{type:Number,default:0},rate:{type:Number,default:0},coupon:{type:String,default:""}},methods:{_complete:function(){this.util.api.get("/saveMortgage",{params:{coin:this.coin.name,coinNumber:this.count,cycle:this.cycle,money:this.money,rate:this.rate,exponent:this.coin.price,couponId:this.coupon,mortgageRate:this.coin.mortgateRate,address:this.coin.address}}).then(function(t){t&&t.result&&(CC.popSlide(),CC.$router.push("/approval"))})}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-recharge"},[a("div",{staticClass:"recharge-head"},[t._v("\n            充值货币\n        ")]),t._v(" "),a("div",{staticClass:"recharge-total"},[t._v("\n            "+t._s(""+t.count+t.coin.name)+"\n        ")]),t._v(" "),a("div",{staticClass:"recharge-head"},[t._v("\n            充值二维码\n        ")]),t._v(" "),a("div",{staticClass:"recharge-code"}),t._v(" "),a("mt-button",{staticClass:"btn-submit",attrs:{type:"primary",size:"large"}},[t._v("保存")]),t._v(" "),a("div",{staticClass:"recharge-address"},[a("span",[t._v(t._s(t.coin.address))]),t._v(" "),a("a",{staticClass:"btn-copy"},[t._v("复制")])]),t._v(" "),a("mt-button",{staticClass:"btn-complete",attrs:{type:"primary",size:"large"},on:{click:t._complete}},[t._v("完成充值")])],1)},staticRenderFns:[]};var c=a("vSla")(s,n,!1,function(t){a("nC1X")},"data-v-dc5ed140",null).exports;e.default=c},nC1X:function(t,e){}});
//# sourceMappingURL=1.39c616508d67249d3faa.js.map