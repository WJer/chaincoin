webpackJsonp([8],{NOOJ:function(t,s){},VzoM:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a={data:function(){return{dIsMortgage:!1,dIsFetch:!1,dPhone:""}},created:function(){CC.hasMortgage?this.dIsMortgage=CC.hasMortgage:this._fetchIsMortgage(),CC.coins?this.dIsFetch=!0:this._fetchInfos()},methods:{_fetchInfos:function(t){var s=this;this.util.api.all(this._getAjax()).then(this.util.api.spread(function(i,a,e){i&&(CC.settings=i.settings),s.dPhone=i.settings.phone,a&&(CC.bank={bankName:a.bankName,branchName:a.branchName,cardNumber:a.cardNumber}),e&&(CC.coins=e.coins),s.dIsFetch=!0,t&&t()}))},_getAjax:function(){return[this.util.api.get("/getSettings"),this.util.api.get("/getBankInfo"),this.util.api.get("/getAllCoin")]},_fetchIsMortgage:function(){var t=this;this.util.api.get("/hasMortgage",{data:{bitkeepId:200190}}).then(function(s){s&&0==s.code&&(t.dIsMortgage=s.result,CC.hasMortgage=s.result)})},_borrow:function(){var t=this;CC.userid?this.$router.push("/form/borrow"):this.util.slide({context:this,component:{account:function(){return i.e(5).then(i.bind(null,"iygP"))}},events:{next:function(){this._fetchInfos(function(){t.$router.push("/form/borrow")})}}})},_record:function(){this.$router.push("/mglist")}}},e={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"page-index"},[i("cc-scroll",{ref:"scroll",staticClass:"page-scroll",attrs:{pullDownRefresh:!1,pullup:!1}},[i("div",{staticClass:"top-wrap"},[i("div",{staticClass:"icon"}),t._v(" "),i("h1",[i("div",[t._v("抵押数字资产")]),t._v(" "),i("div",[t._v("安全快速借款")])]),t._v(" "),i("h2",[i("div",[t._v("币金所产品是借款人以持有的数字货币为质押标的，")]),t._v(" "),i("div",[t._v("向出资人进行融资的专业数字资产抵押贷款平台")])])]),t._v(" "),i("div",{staticClass:"middle1-wrap"},[i("h1",[t._v("流程极简 当天放款")]),t._v(" "),i("div",{staticClass:"img"}),t._v(" "),i("div",{staticClass:"btn",on:{click:t._borrow}},[t._v("立即填写信息"),i("span",{staticClass:"left-arrow"})])]),t._v(" "),i("div",{staticClass:"middle2-wrap"},[i("h1",[t._v("安全存管 无惧丢币")]),t._v(" "),i("h2",[i("div",[t._v("采用最高安全等级的银行资管确保每一笔交易安全可靠")]),t._v(" "),i("div",[t._v("抵押期间，数字货币被盗、丢失等责任将由币金所全部承担")])]),t._v(" "),i("div",{staticClass:"img"}),t._v(" "),i("div",{staticClass:"arrow1"}),t._v(" "),i("div",{staticClass:"arrow2"})]),t._v(" "),i("div",{staticClass:"sponsor-wrap"},[i("h1",[t._v("权威背景 安全可靠")]),t._v(" "),i("h2",[i("div",[t._v("币金所由A股上市公司投资成立，星耀资本、屹立资本等一线")]),t._v(" "),i("div",[t._v("投资机构参与，创始团队的投行和金融借贷经验丰富")])]),t._v(" "),i("div",{staticClass:"sponsor"})]),t._v(" "),t._e()]),t._v(" "),i("div",{staticClass:"bottom"},[i("div",{staticClass:"bottom-wrap"},[i("router-link",{attrs:{to:"/rule"}},[t._v("了解借款详细规则")]),t._v(" | 客服电话："+t._s(t.dPhone))],1),t._v(" "),t.dIsFetch?i("div",{staticClass:"g-flex btn-wrap"},[t.dIsMortgage?i("mt-button",{staticClass:"g-btn-thin",attrs:{type:"primary",size:"large"},on:{click:t._record}},[t._v("查看记录")]):t._e(),t._v(" "),i("mt-button",{attrs:{type:"primary",size:"large"},on:{click:t._borrow}},[t._v("我要借款")])],1):t._e()])],1)},staticRenderFns:[]};var r=i("vSla")(a,e,!1,function(t){i("NOOJ")},"data-v-1f0c2815",null).exports;s.default=r}});
//# sourceMappingURL=8.2334e0cb3579874c9b06.js.map