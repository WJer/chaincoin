webpackJsonp([7],{"/NXV":function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e={created:function(){this._fetchList()},data:function(){return{dList:[],dSevenRepay:0,dAllOverdue:0}},methods:{_pledge:function(){this.$router.push("/form/borrow")},_fetchList:function(){var t=this,s=this.util.loading("加载中...");this.util.api.get("/getMortgageList").then(function(a){a&&(t.dList=a.mortgages),a&&(t.dSevenRepay=a.sevenDaysRepay),a&&(t.dAllOverdue=a.allOverdue),t.$refs.scroll.forceUpdate(),s.close()})},_clickHandle:function(t){this.util.slide({context:this,component:{detail:function(){return a.e(12).then(a.bind(null,"OznE"))}},data:{data:t},events:{complete:"_fetchList.hide"}})}}},i={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"page-mortgagelist"},[a("div",{staticClass:"white-space"}),t._v(" "),a("div",{staticClass:"g-flex top-wrapper"},[a("div",{staticClass:"top-item g-fled_item"},[a("div",{staticClass:"val"},[a("span",{staticClass:"unit"},[t._v("￥")]),t._v("\n              "+t._s(t.dSevenRepay)+"\n            ")]),t._v(" "),a("div",{staticClass:"tit"},[t._v("近7日还款")])]),t._v(" "),a("div",{staticClass:"top-item g-fled_item"},[a("div",{staticClass:"val"},[t._v(t._s(t.dAllOverdue))]),t._v(" "),a("div",{staticClass:"tit"},[t._v("逾期罚息")])])]),t._v(" "),a("cc-scroll",{ref:"scroll",staticClass:"page-scroll",attrs:{pullUpLoad:!1},on:{"pulling-down":t._fetchList}},[a("ul",{staticClass:"list"},[t._l(t.dList,function(s,e){return a("div",{key:e,staticClass:"card",on:{click:function(a){t._clickHandle(s)}}},[a("div",{staticClass:"left"},[a("div",{staticClass:"coin"},[a("i",{staticClass:"icon"}),t._v(t._s(s.coin))]),t._v(" "),a("div",{staticClass:"rate"},[t._v(t._s(t._f("toPercentage")(s.currentMortgageRate)))]),t._v(" "),a("div",{staticClass:"rage-hd"},[t._v("当前质押率")])]),t._v(" "),a("div",{staticClass:"center"},[a("div",{staticClass:"total"},[a("span",{staticClass:"unit"},[t._v("￥")]),t._v(t._s(s.currentRepayMoney))]),t._v(" "),a("div",{staticClass:"total-hd"},[t._v(t._s(5==s.status?"补仓数量":"还款金额"))])]),t._v(" "),a("div",{staticClass:"right"},[a("div",{staticClass:"status status-1",class:{"status-2":4==s.status||5==s.status}},[t._v(t._s(s.message))]),t._v(" "),a("div",{staticClass:"time"},[t._v(t._s(s.currentRepayTime))]),t._v(" "),a("div",{staticClass:"time-hd"},[t._v("还款时间")])])])}),t._v(" "),0==t.dList.length?a("div",{staticClass:"g-nodata"},[t._v("暂无抵押记录")]):t._e()],2)]),t._v(" "),a("div",{staticClass:"form-btns"},[a("mt-button",{staticClass:"btn-pledge",attrs:{type:"primary",size:"large"},on:{click:t._pledge}},[t._v("立即借款")])],1)],1)},staticRenderFns:[]};var l=a("vSla")(e,i,!1,function(t){a("zjdN")},"data-v-67951872",null).exports;s.default=l},zjdN:function(t,s){}});
//# sourceMappingURL=7.8ee0670249a23c590dd9.js.map