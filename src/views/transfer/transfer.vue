<template>
	<div class="page-transfer">
		<div class="line-wrap">
			<div class="g-line"></div>
		</div>
		<div class="form-wrap">
			<g-text label="收币地址" :readonly="true" v-model="dCoin.address"></g-text>
			<g-text label="数量" :readonly="true" v-model="dCount"></g-text>
			<!-- <g-radio :options="dOptions" v-model="dChecked"></g-radio> -->
			<div class="form-btns">
				<mt-button type="primary" size="large" class="btn-next" @click="_next">下一步</mt-button>
			</div>
		</div>
	</div>
</template>
<script>
import calljs from '@/common/jshost'
export default {
	props: {
		coin: {
			type: Object,
			default: null
		},
		count: {
			type: Number,
			default: 0
		}
	},
	data () {
		return {
			dOptions: [{
				label: '0.000199500BTC（6.35）确认时间<2小时',
				value: 1
			},{
				label: '0.000199500BTC（6.35）确认时间<2小时',
				value: 2
			},{
				label: '0.000199500BTC（6.35）确认时间<2小时',
				value: 3
			}],
			dChecked: 1,
			dCoin: this.coin,
			dCount: `${this.count}${this.coin.name}`
		}
	},
	created () {
		console.log(this.coin);
	},
	methods: {
		_next () {
			const load = this.util.loading('加载中');
			this._fetchSign((orderId, hash) => {
				calljs('actionP', {
					'contract': this.coin.name,
					'appId': '6V2RGS0VuSmZDTXJHeGwVXNl',
					'amount': 1,
					'coin': this.coin.name,
					'orderId': orderId,
					'userId': CC.userid,
					'fee': 0,
					'from': '', //自己的钱包地址,怎么获取？
					'to': this.coin.address,
					"note": "",
					"sign": "",
					"title": "",
					"hash": hash
				}, (err,response) => {
					load.close();
					if (err) {
						this.util.alert(JSON.stringify(err));
						return;
					}
					this.$emit('next');
				});
			});
		},
		_fetchSign (callback) {
			const orderId = +new Date();
			this.util.api.get('/createSign', {
				params: {
					amount: this.count,
					coin: this.coin.name,
					orderId: orderId,
					userId: CC.userid
				}
			}).then((res) => {
				callback && callback(orderId, res.hash);
			})
		}
	}
}
</script>
<style lang="less">
	.page-transfer {
		width: 100%;
		height: 100%;
		box-sizing: border-box;
        padding-top: 38px;
	}
	.form-wrap {
		padding: 0 20px;
	}
	.form-btns {
		margin-top: 34px;
	}
	.line-wrap {
		display: flex;
		height: 30px;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
	}
</style>

