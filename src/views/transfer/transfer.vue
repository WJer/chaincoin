<template>
	<div class="page-transfer">
		<div class="line-wrap">
			<div class="g-line"></div>
		</div>
		<div class="form-wrap">
			<g-text label="收货地址" :readonly="true" v-model="dCoin.address"></g-text>
			<g-text label="数量" :readonly="true" v-model="dCount"></g-text>
			<!-- <g-radio :options="dOptions" v-model="dChecked"></g-radio> -->
			<div class="form-btns">
				<mt-button type="primary" size="large" class="btn-next" @click="_next">下一步</mt-button>
			</div>
		</div>
	</div>
</template>
<script>
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
			this.$emit('next');
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

