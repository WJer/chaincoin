<template>
	<div class="page-form">
		<mt-header fixed title="币金所" class="form-header"></mt-header>
		<div class="form-line-wrap">
			<div class="line"></div>
			<div class="text">填写收款信息</div>
			<div class="line"></div>
		</div>
		<div class="form-group">
			<div class="left">
				<inputcell :label="'开户行'" v-model="dBank"></inputcell>
			</div>
			<div class="right">
				<inputcell :label="'开户支行'" v-model="dSubBank"></inputcell>
			</div>
		</div>
		<div class="form-group">
			<inputcell :label="'银行卡号'" v-model="dCard"></inputcell>
		</div>
		<div class="form-group">
			<inputcell :label="'银行卡号确认'"></inputcell>
		</div>
		<div class="form-group">
			<div class="fixation">
				<inputcell :label="'姓名'" v-model="dName"></inputcell>
			</div>
			<div class="right">
				<inputcell :label="'身份证号'" v-model="dIdenCard"></inputcell>
			</div>
		</div>
		<div class="form-btns">
			<mt-button type="default" size="large" class="btn-next" @click="_next">下一步</mt-button>
		</div>
	</div>
</template>
<script>
import inputcell from '@/components/form/text'
export default {
	components: {
		inputcell
	},
	data () {
		return {
			dBank: '建设银行',
			dSubBank: '莲花路建设支行',
			dCard: 123412341234123,
			dName: '吴敬',
			dIdenCard: 12341245
		}
	},
	methods: {
		_next () {
			this.util.confirm_dark([
				`<div>开户行：<span style="color: #f0f0f0;">${this.dBank}</span></div>`,
				`<div>开户支行：<span style="color: #f0f0f0;">${this.dSubBank}</span></div>`,
				`<div>银行卡号：<span style="color: #f0f0f0;">${this.dCard}</span></div>`].join(''), '请核实并确认以下信息');
		}
	}
}
</script>
<style lang="less" scoped>
	.page-form {
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		padding-top: 38px;
		background-color: #2a3452;
	}
	.form-header {
		font-size: 18px;
		height: 38px;
		padding: 0 10px;
		background-color: #2a3452;
	}
	.form-line-wrap {
		display: flex;
		margin: 0 13px;
		-webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
		.text {
			padding: 0 11px;
			color: #4d5b81;
			font-size: 15px;
			line-height: 23px;
		}
		.line {
			height: 1px;
			background-color: #4d5b81;
			-webkit-box-flex: 1;
            -ms-flex: 1;
            flex: 1;
		}
	}
	.form-group {
		display: flex;
		margin: 5px 30px 0;
		-webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
		.left,
		.right {
			flex: 1
		}
		.left {
			margin-right: 6.6666px;
		}
		.right {
			margin-left: 6.6666px;
		}
		.fixation{
			width: 100px;
		}
	}
	.form-btns {
		margin: 0 30px;
		text-align: center;
	}
	.btn-next {
		margin-top: 20px;
		background-color: #f0ab2f;
		border-color: #f0ab2f;
		color: #fff;
	}
</style>

