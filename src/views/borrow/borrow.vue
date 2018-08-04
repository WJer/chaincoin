<template>
	<div class="page-borrow">
		<div class="form-wrap">
			<div class="line-wrap">
				<div class="line"></div>
				<div class="text">抵押数量与时间</div>
				<div class="line"></div>
			</div>
			<div class="tip">提示：以下为质押率，是可借金额和数字货币总价值的比值。</div>
			<div class="coins">
				<div class="line" v-for="group in cCoins">
					<div class="coin" :class="{'active': coin.name == dCurCoin.name}" v-for="coin in group" @click="_click(coin)">
						<div class="coin-label">{{coin.name}}</div>
						<div class="coin-rate">{{coin.mortgateRate | toPercentage}}</div>
					</div>
				</div>
			</div>
			<div class="g-line"></div>
			<g-text label="抵押数量" placeholder="不低于1BTC" v-model="dCount" @input="_inputInCount"></g-text>
			<g-text label="抵押时间" placeholder="30天至80天" v-model="dDay" @input="_inputInDay"></g-text>
			<div class="use-coupon" @click="_openCoupon">使用优惠券</div>
			<div class="g-clear"></div>
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
						<div class="right-label">年利率</div>
						<div class="right-text">{{dRate | toPercentage}}</div>
					</div>
					<div class="right-item">
						<div class="right-label">借款时间</div>
						<div class="right-text">
							<div style="margin-bottom: 0.2em;">From: {{dDate.start}}</div>
							<div>To: {{dDate.end}}</div>
						</div>
					</div>
				</div>
			</div>
			<div class="line-wrap">
				<div class="line"></div>
				<div class="text">还款计划</div>
				<div class="line"></div>
			</div>
			<div class="plan-wrap">
				<p v-if="dPlans.length==0">暂无</p>
				<ul v-else>
					<li class="g-flex plan-item" v-for="(plan, index) in dPlans">
						<div class="circle"></div>
						<div class="line"></div>
						<div class="g-flex_item">{{plan.year+'-'+plan.day}}</div>
						<div class="g-flex_item">{{plan.money}}</div>
						<div class="g-flex_item">{{index == dPlans.length-1?'本利':'利息'}}</div>
					</li>
				</ul>
			</div>
			<div class="repay-rule">
				<span class="radio-core" :class="{'check': dAgree}" @click="dAgree=!dAgree"></span>
				<span>查看并同意</span>
				<a href="#rule">借还款规则</a>
			</div>
			<div class="form-btns">
				<mt-button type="primary" size="large" class="btn-next" @click="_next">下一步</mt-button>
			</div>
		</div>
	</div>
</template>
<script>
import moment from 'moment'
export default {
	data () {
		return {
			dAgree: false,
			dRate: CC.settings.year_rate,
			dCoins: [],
			dCurCoin: '',
			dCount: '',
			dDay: '',
			dMoney: 0,
			dDate: {
				start: '0000/00/00',
				end: '0000/00/00'
			},
			dPlans: [],
			T1: null,
			T2: null
		}
	},
	created () {
		this.fetchAllCoin();
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
			return result;
		}
	},
	methods: {
		_next () {
			if (this._validate()) {
				console.log('校验通过');
				if (CC.bank) {
					this.$router.push('/form/proceed');
				}else {
					
				}
			}
		},
		_click (coin) {
			this.util.getCoinInstantPriceByName(coin.name, (price) => {
				coin.price = price;
				this.dCurCoin = coin;
				this.dCount = '';
				this.dDay = '';
				this.dMoney = 0;
			})
		},
		_openCoupon () {
			this.util.confirm_cc('<input type="text" class="discount_code">', '请输入优惠劵码').then(() => {
				const dom = document.querySelector('.discount_code');
				const couponId = dom.value;
				dom.value = '';
				this._validateCoupon(couponId);
			});
		},
		fetchAllCoin () {
			this.util.api.get('/getAllCoin').then((res) => {
				if (res.code == 0) {
					this.dCoins = res.coins;
				}
			})
		},
		_inputInCount () {
			if (this.dCurCoin) {
				this._fetchMoney();
				this._fetchPlan();
				this._fetchAccrual();
			}
		},
		_inputInDay (val) {
			if (val) {
				this.dDate.start = moment().format('YYYY/MM/DD');
				this.dDate.end = moment().add(this.dDay, 'days').format('YYYY/MM/DD');
				this._fetchPlan();
			}else {
				this.dDate.start = this.dDate.end = '0000/00/00';
			}
		},
		_validate () {
			if (!this.dCurCoin) {
				this.util.alert('请选择币种');
				return false;
			}else if (!this.dCount || this.dCount == 0) {
				this.util.alert('请填写抵押数量');
				return false;
			}else if (!this.dDay || this.dDay == 0) {
				this.util.alert('请填写抵押时间');
				return false;
			}else if (!this.dAgree) {
				this.util.alert('请查看并同意借还款规则，并勾选');
				return false;
			}
			return true;
		},
		_fetchPlan () {
			if ((this.dMoney || this.dMoney != 0) && (this.dDay || this.dDay != 0)) {
				this.T1 && clearTimeout(this.T);
				this.T1 = setTimeout(() => {
					this.util.api.get('/generateRepayPlan', {
						data: {
							money: this.dMoney,
							rate: this.dRate,
							cycle: this.dDay
						}
					}).then((res) => {
						if (res && res.code == 0) {
							this.dPlans = res.plans;
						}
					})
				}, 400);
			}
		},
		_fetchMoney () {
			if (this.dCurCoin && (this.dCount && this.dCount != 0)) {
				this.T2 && clearTimeout(this.T2);
				this.T2 = setTimeout(() => {
					this.util.api.get('/getMortgageMoney', {
						data: {
							coin: this.dCurCoin.name,
							mortgageRate: this.dCurCoin.mortgateRate,
							coinNumber: this.dCount
						}
					}).then((res) => {
						if (res && res.code == 0) {
							this.dMoney = res.money;
						}
					})
				}, 400)
			}	
		},
		_validateCoupon (id) {
			this.util.api.get('/validateCoupon', {
				data: {
					couponId: id
				}
			}).then((res) => {
				if (res && res.code == 0) {
					
				}
			})
		}
	}
}
</script>
<style lang="less">
	.page-borrow {
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
			// height: 35px;
			box-sizing: border-box;
			padding-left: 34px;
			background-color: #e3ecff;
			border: 2px solid #e3ecff;
			border-radius: 5px;
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
				height: 80px;
				border-right: 1px solid #d9d9d9;
			}
			.right {
				margin-left: 140px;
				font-size: 12px;
			}
			.total-tit {
				line-height: 20px;
				font-size: 12px;
				color: #8e96a5;
			}
			.total-num {
				line-height: 48px;
				font-size: 24px;
				color: #23334f;
			}
			.right-item {
				overflow: hidden;
			}
			.right-label {
				float: left;
				color: #9da6ba;
				padding: 15px 0 15px 20px;
			}
			.right-text {
				float: right;
				padding: 15px 0;
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
		.plan-wrap {
			p {
				font-size: 12px;
				text-align: center;
				line-height: 100px;
				color: #9da6ba;
			}
		}
		.plan-item {
			position: relative;
			height: 38px;
			padding-left: 20px;
			.circle {
				position: absolute;
				width: 12px;
				height: 12px;
				border: 1px dashed #000;
				border-radius: 50%;
				left: 0;
				top: 11px;
			}
			.line {
				position: absolute;
				border: 1px dashed #000;
				height: 23px;
				left: 6px;
				top: 25px;
			}
			.g-flex_item {
				font-size: 12px;
				line-height: 38px;
			}
		}
		.plan-item:last-child {
			.line {
				display: none;
			}
		}
    }
</style>

