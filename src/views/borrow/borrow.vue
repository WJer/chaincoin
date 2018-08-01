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
					<div class="coin" v-for="coin in group">
						<div class="coin-label">{{coin.label}}</div>
						<div class="coin-rate">{{coin.rate}}</div>
					</div>
				</div>
			</div>
			<div class="g-line"></div>
			<g-text label="抵押数量" placeholder="不低于1BTC"></g-text>
			<g-text label="抵押时间" placeholder="30天至80天"></g-text>
			<div class="use-coupon">使用优惠券</div>
			<div class="g-clear"></div>
			<div class="line-wrap">
				<div class="line"></div>
				<div class="text">借款信息</div>
				<div class="line"></div>
			</div>
			<div class="preview">
				<div class="left">
					<div class="total-tit">可借金额</div>
					<div class="total-num"><em>￥</em>10000</div>
				</div>
				<div class="right">
					<div>
						<span class="right-label">年利率</span>
						<span class="right-text">2.5%</span>
					</div>
					<div>
						<span class="right-label">借款时间</span>
						<span class="right-text">2.5%</span>
					</div>
				</div>
			</div>
			<div class="line-wrap">
				<div class="line"></div>
				<div class="text">还款计划</div>
				<div class="line"></div>
			</div>
			<div class="repay-rule">
				<span class="radio-core" :class="{'check': dAgree}" @click="dAgree=!dAgree"></span>
				<span>查看并同意</span>
				<a href="javascript:;">借还款规则</a>
			</div>
			<div class="form-btns">
				<mt-button type="primary" size="large" class="btn-next" @click="_next">下一步</mt-button>
			</div>
		</div>
	</div>
</template>
<script>
import { coins } from './config'
export default {
	data () {
		return {
			dAgree: true
		}
	},
	computed: {
		cCoins () {
			const result = [];
			coins.forEach((coin, index) => {
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

		}
	}
}
</script>
<style lang="less">
	.page-borrow {
		width: 100%;
		height: 100%;
		box-sizing: border-box;
        padding-top: 38px;
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
			.right-label {
				color: #9da6ba;
				line-height: 40px;
				margin-left: 20px;
			}
			.right-text {
				float: right;
				line-height: 40px;
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
    }
</style>

