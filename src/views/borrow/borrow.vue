<template>
	<div class="page-borrow">
		<div class="form-wrap">
			<cc-scroll :pullUpLoad="false" :pullDownRefresh="false" class="page-scroll" ref="scroll">
				<div class="line-wrap">
					<div class="line"></div>
					<div class="text">抵押数量与时间</div>
					<div class="line"></div>
				</div>
				<div class="tip">提示：以下为质押率，是可借金额和数字货币总价值的比值。</div>
				<div class="coins">
					<div class="line" v-for="group in cCoins">
						<div class="coin" :class="{'active': coin.name == dCurCoin.name, 'hide': coin.isHide}" v-for="coin in group" @click="_click(coin)">
							<i class="icon-btc icon"></i>
							<div class="coin-label">{{coin.name}}</div>
							<div class="coin-rate">{{coin.mortgateRate | toPercentage}}</div>
						</div>
					</div>
				</div>
				<div class="g-line"></div>
				<div class="item-wrap">
					<g-text label="抵押数量" :placeholder="`不低于${dCurCoin?dCurCoin.mortgageMinimum:1}个${dCurCoin?dCurCoin.name:''}`" v-model="dCount" @input="_inputInCount"></g-text>
				</div>
				<div class="item-wrap">
					<g-text label="抵押时间" :placeholder="`${dMinDay}天至${dMaxDay}天`" v-model="dDay" @input="_inputInDay"></g-text>
				</div>
				<div class="item-wrap coupon-wrap">
					<g-text label="优惠券码" placeholder="请输入优惠券" v-model="dCoupon" @input="_inputCoupon"></g-text>
					<div v-if="!dRate">
						<div class="btn-coupon" v-if="dCouponRate" @click="_useCoupon">立即使用</div>
						<div class="btn-coupon btn-coupon-dark" v-else>立即使用</div>
					</div>
					<div v-else>
						<div class="btn-coupon" @click="_cancelCoupon">取消使用</div>
					</div>
					<div class="coupon-tip" v-if="dCouponTip">{{dCouponTip}}</div>
				</div>

				<!-- <div class="use-coupon" @click="_openCoupon">使用优惠券</div> -->
				<div class="g-clear"></div>
				<br><br>
				<div class="line-wrap">
					<div class="line"></div>
					<div class="text">借款信息</div>
					<div class="line"></div>
				</div>
				<div class="preview">
					<div class="left">
						<div class="total-tit">可借金额</div>
						<div class="total-num"><em>￥</em>{{dMoney}}</div>
					</div>
					<div class="right">
						<div class="right-item">
							<div class="right-label">利率</div>
							<div class="right-text">
								<span class="g-disabled" v-if="dRate">{{dRate | toPercentage}}</span>
								<span class="g-bold" style="margin-right: 0px;">{{dCurRate | toPercentage}}</span>
							</div>
						</div>
						<div class="right-item">
							<div class="right-label">利息</div>
							<div class="right-text">
								<span class="g-bold g-unit">{{dAccrual}}</span>
							</div>
						</div>
						<div class="right-item">
							<div class="right-label">借款时间</div>
							<div class="right-text">
								<div style="margin-bottom: 0.2em;">From: <span class="g-bold">{{dDate.start}}</span></div>
								<div>To: <span class="g-bold">{{dDate.end}}</span></div>
							</div>
						</div>
					</div>
				</div>
				<div class="line-wrap">
					<div class="line"></div>
					<div class="text">还款计划</div>
					<div class="line"></div>
				</div>
				<ccplan :plans="dPlans"></ccplan>
				<div class="repay-rule">
					<span class="radio-core" :class="{'check': dAgree}" @click="dAgree=!dAgree"></span>
					<span>查看并同意</span>
					<router-link to="/rule">借还款规则</router-link>
				</div>
				<div class="form-btns">
					<mt-button type="primary" size="large" class="btn-next" @click="_next">下一步</mt-button>
				</div>
			</cc-scroll>
		</div>
	</div>
</template>
<script>
import moment from 'moment'
import ccplan from '@/components/plan'
export default {
	components: {
		ccplan
	},
	data () {
		return {
			dAgree: false,
			dRate: 0,
			dCurRate: CC.settings.year_rate,
			dCoins: CC.coins,
			dCurCoin: '',
			dCount: '',
			dDay: '',
			dMoney: 0,
			dAccrual: 0,
			dDate: {
				start: '0000-00-00',
				end: '0000-00-00'
			},
			dPlans: [],
			dCoupon: '',
			dCouponTip: '',
			dCouponRate: 0,
			dMinDay: CC.settings.repay_minday,
			dMaxDay: CC.settings.repay_maxday,
			T1: null,
			T2: null,
			T3: null
		}
	},
	computed: {
		cCoins () {
			const result = [];
			this.dCoins.forEach((coin, index) => {
				if (index % 3 == 0) {
					result.push([]);
				}
				result[Math.floor(index/3)].push(coin);
			});
			if (this.dCoins.length%3!=0) {
				for (var i=0; i<3-this.dCoins.length%3; i++) {
					result[result.length-1].push({
						name: 'aaa',
						mortgageRate: 0,
						isHide: true
					});
				}
			}
			return result;
		}
	},
	created () {
		CC.header.toggleList(true);
	},
	mounted () {
		document.querySelector('.coupon-wrap input').setAttribute('maxlength', 10);
	},
	methods: {
		_next () {
			if (this._validate()) {
				this._addBackInfo();
			}
		},
		_addBackInfo () {
			this.util.slide({
				context: this,
				component: {
					'detail' : () => import('@/views/proceed')
				},
				events: {
					'next': function (){
						if (CC.isBitApp && this.dCurCoin.transfer == 1) {
							this._addMortgage();
						}else{
							this._addPay();
						}
					}
				}
			})
		},
		_addMortgage () {
			if (!CC.isBitApp) {
				this._addPay();
				return;
			}
			this.util.slide({
				context: this,
				component: {
					'detail' : () => import('@/views/transfer')
				},
				data: {
					coin: this.dCurCoin,
					count: this.dCount * 1
				},
				events: {
					'next': 'toApproval.hide'
				}
			})
		},
		_addPay () {
			this.util.slide({
				context: this,
				component: {
					'detail' : () => import('@/views/recharge')
				},
				data: {
					coin: this.dCurCoin,
					count: this.dCount * 1,
					cycle: this.dDay * 1,
					money: this.dMoney * 1,
					rate: this.dCurRate  * 1,
					coupon: this.dCoupon,
				},
				events: {
					'next': 'toApproval.hide'
				}
			})
		},
		toApproval () {
			this.util.api.get('/saveMortgage', {
                params: {
                    coin: this.dCurCoin.name,
                    coinNumber: this.dCount,
                    cycle: this.dDay,
                    money: this.dMoney,
					rate: this.dCurRate,
                    exponent: this.dCurCoin.price,
					couponId: this.dCoupon,
                    mortgageRate: this.dCurCoin.mortgateRate, //质押率
                    address: this.dCurCoin.address
                }
            }).then((res) => {
                if (res && res.result) {
					window.history.back();
					setTimeout(() => {
						this.$router.push('/approval');
					}, 200)
                }
            })
		},
		_click (coin) {
			this.util.getCoinInstantPriceByName(coin.name, (price) => {
				coin.price = price;
				this.dCurCoin = coin;
				this.dCount = '';
				this.dDay = '';
				this.dCoupon = '';
				this.dMoney = 0;
				this.dRate = 0;
				this.dCurRate = CC.settings.year_rate;
			})
		},
		_openCoupon () {
			this.util.confirm('<input type="text" class="discount_code">', '请输入优惠劵码').then(() => {
				const dom = document.querySelector('.discount_code');
				const couponId = dom.value;
				dom.value = '';
				this._validateCoupon(couponId);
			});
		},
		_useCoupon () {
			this.dRate = this.dCurRate;
			this.dCurRate = this.dCouponRate * this.dCurRate;
			this._fetchPlan();
		},
		_cancelCoupon () {
			this.dCurRate = this.dRate;
			this.dRate = 0;
			this._fetchPlan();
		},
		_inputInCount () {
			this._fetchMortgagMoney();
			this._fetchAccrual();
		},
		_inputInDay (val) {
			if (val) {
				this.dDate.start = moment().format('YYYY-MM-DD');
				this.dDate.end = moment().add(this.dDay, 'days').format('YYYY-MM-DD');
			}else {
				this.dDate.start = this.dDate.end = '0000-00-00';
			}
			this._fetchPlan();
		},
		_inputCoupon () {
			const max = 10;
			// if (this.dCoupon.length > 9) {
			// 	this.dCoupon = this.dCoupon.slice(0, 9);
			// 	return;
			// }
			if (this.dCoupon.length == max) {
				this._validateCoupon(this.dCoupon);
			}else{
				this.dCouponRate = 0;
				this.dCoupon = '';
			}
		},
		//校验
		_validate () {
			if (!this.dCurCoin) {
				this.util.alert('请选择币种');
				return false;
			}else if (!this.dCount || this.dCount == 0) {
				this.util.alert('请填写抵押数量');
				return false;
			}else if (+this.dCount < this.dCurCoin.mortgageMinimum) {
				this.util.alert(`抵押数量必须大于${this.dCurCoin.mortgageMinimum}`);
				return false;
			}else if (!this.dDay || this.dDay == 0) {
				this.util.alert('请填写抵押时间');
				return false;
			}else if (+this.dDay < this.dMinDay || +this.dDay > this.dMaxDay) {
				this.util.alert(`抵押时间必须在${this.dMinDay}天到${this.dMaxDay}天之间`);
				return false;
			}else if (!this.dAgree) {
				this.util.alert('请查看并同意借还款规则，并勾选');
				return false;
			}
			return true;
		},
		//获取还款计划
		_fetchPlan () {
			clearTimeout(this.T1);
			if (!this.dCurCoin || !this.dCount || +this.dCount < this.dCurCoin.mortgageMinimum || !this.dDay || +this.dDay < this.dMinDay || +this.dDay > this.dMaxDay) {
				this.dPlans = [];
				return;
			}
			this.T1 = setTimeout(() => {
				this.util.api.get('/generateRepayPlan', {
					params: {
						money: this.dMoney,
						rate: this.dCurRate,
						cycle: this.dDay
					}
				}).then((res) => {
					res && (this.dPlans = res.plans);
					this.$refs.scroll.forceUpdate();
					this._fetchAccrual();
				})
			}, CC.delay);
		},
		//获取可借款金额
		_fetchMortgagMoney () {
			clearTimeout(this.T2);
			if (!this.dCurCoin || !this.dCount || +this.dCount < this.dCurCoin.mortgageMinimum) {
				this.dMoney = 0;
				return;
			}
			this.T2 = setTimeout(() => {
				this.util.api.get('/getMortgageMoney', {
					params: {
						coin: this.dCurCoin.name,
						mortgageRate: this.dCurCoin.mortgateRate,
						coinNumber: this.dCount
					}
				}).then((res) => {
					res && (this.dMoney = res.money);
					this._fetchPlan();
				})
			}, CC.delay)
		},
		_fetchAccrual () {
			this.util.api.get('/getMortgageAccrual', {
				params: {
					money: this.dMoney,
					cycle: this.dDay,
					rate: this.dCurRate
				}
			}).then((res) => {
				res && (this.dAccrual = res.accrual);
			})
		},
		_validateCoupon (id) {
			this.util.api.get('/validateCoupon', {
				params: {
					couponId: id
				}
			}).then((res) => {
				if (!res.result) {
					this.util.alert(res.message);
					return;
				}
				this.dCouponRate = res.discount * this.dCurRate;
			})
		}
	}
}
</script>
<style lang="less">
	@import '../../assets/css/icons.less';
	.page-borrow {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #fff;
		.page-scroll {
			position: absolute;
			top: 0;
			left: 20px;
			right: 20px;
			bottom: 0;
			height: auto;
		}
        .line-wrap {
			display: flex;
			-webkit-box-align: center;
			-ms-flex-align: center;
			align-items: center;
			.text {
				padding: 0 11px;
				color: #9099af;
				font-size: 12px;
				line-height: 30px;
			}
			.line {
				height: 1px;
				background-color: #d9d9d9;
				-webkit-box-flex: 1;
				-ms-flex: 1;
				flex: 1;
			}
		}
		.form-wrap {
			padding: 0 20px;
		}
		.tip {
			margin-top: 10px;
			color: #9da6ba;
			font-size: 10px;
			line-height: 21px;
		}
		.coins {
			.line {
				display: flex;
				margin: 7px 0 18px;
				justify-content: space-between;
			}
		}
		.coin {
			float: left;
			width: 31%;
			position: relative;
			// height: 35px;
			box-sizing: border-box;
			padding-left: 34px;
			background-color: #e3ecff;
			border: 2px solid #e3ecff;
			border-radius: 5px;
			&.hide {
				visibility: hidden;
			}
		}
		.coin-label {
			color: #4067e8;
			font-size: 12px;
			line-height: 20px;
		}
		.coin-rate {
			color: #a3b5f4;
			font-size: 10px;
			margin-bottom: 5px;
		}
		.active {
			border-color: #5d82ff;
		}
		.use-coupon {
			float: right;
			text-align: right;
			line-height: 30px;
			font-size: 12px;
			color: #ff5ca8;
		}
		.preview {
			position: relative;
			padding: 10px 0 22px;
			.left {
				position: absolute;
				width: 140px;
				min-height: 80px;
				border-right: 1px solid #d9d9d9;
			}
			.right {
				margin-left: 140px;
				font-size: 12px;
			}
			.total-tit {
				line-height: 30px;
				font-size: 12px;
				color: #8e96a5;
			}
			.total-num {
				font-size: 24px;
				padding: 12px 0;
				color: #23334f;
				word-break: break-all;
    			word-wrap: break-word;
			}
			.right-item {
				overflow: hidden;
			}
			.right-label {
				float: left;
				color: #9da6ba;
				padding: 7px 0 7px 20px;
			}
			.right-text {
				float: right;
				padding: 7px 0;
				text-align: right;
			}
		}
		.btn-next {
			background-color: #5d82ff;
		}
		.repay-rule {
			font-size: 12px;
			line-height: 33px;
			a {
				color: #5d82ff;
			}
		}
		.radio-core {
			position: relative;
			display: inline-block;
			width: 15px;
			height: 15px;
			background-color: #e3ecff;
			border-radius: 50%;
			vertical-align: middle;
			&.check:before {
				position: absolute;
				left: 0;
				right: 0;
				bottom: 0;
				top: 0;
				margin: auto;
				content: '';
				display: inline-block;
				width: 8px;
				height: 8px;
				background-color: #5d82ff;
				border-radius: 50%;
			}
		}
		.icon {
			position: absolute;
			left: 8px;
			top: 8px;
		}
		.form-btns {
			padding: 10px 0;
			margin: 0;
		}
		.item-wrap {
			position: relative;
		}
		.btn-coupon {
			position: absolute;
			right: 0;
			top: 0;
			line-height: 40px;
			font-size: 12px;
			color: #5d82ff;
		}
		.btn-coupon-dark {
			color: #b9c6ff;
		}
		.coupon-tip {
			color: #ffaa00;
			line-height: 24px;
			font-size: 12px;	
		}
    }
</style>

