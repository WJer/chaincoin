<template>
	<div class="page-transfer">
		<div class="line-wrap">
			<div class="g-line"></div>
		</div>
		<div class="form-wrap">
			<g-text label="收货地址"></g-text>
			<g-text label="数量"></g-text>
			<g-radio :options="dOptions" v-model="dChecked"></g-radio>
			<div class="form-btns">
				<mt-button type="primary" size="large" class="btn-next" @click="_next">下一步</mt-button>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data () {
		return {
			dOptions: [{
				label: 1,
				value: 1
			},{
				label: 2,
				value: 2
			}],
			dChecked: 1
		}
	},
	methods: {
		_next () {

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

