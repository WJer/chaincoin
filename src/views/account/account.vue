<template>
	<div class="page-form">
		<div class="line-wrap">
			<div class="line"></div>
			<div class="text">为完成借款，需绑定手机号</div>
		</div>
		<div class="form-wrap">
			<div class="item-wrap">
				<mt-field label="手机" type="tel" placeholder="请输入手机号" v-model="dMobile"></mt-field>
			</div>
			<div class="item-wrap">
				<mt-field label="验证码" type="number" placeholder="请输入验证码" v-model="dCode"></mt-field>
				<div class="btn-send">发送验证码</div>
			</div>
		</div>
		<div class="form-btns">
			<mt-button type="primary" size="large" class="btn-next" @click="_next">下一步</mt-button>
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
			dMobile: '',
			dCode: ''
		}
	},
	methods: {
		_next () {
			this.util.confirm_dark([
				`<div>开户行：<span style="color: #727391;">${this.dBank}</span></div>`,
				`<div>开户支行：<span style="color: #727391;">${this.dSubBank}</span></div>`,
				`<div>银行卡号：<span style="color: #727391;">${this.dCard}</span></div>`].join(''), '请核实并确认以下信息');
		}
	}
}
</script>
<style lang="less">
    @import '../../assets/css/mixin.less';
	.page-form {
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		padding-top: 38px;
		.line-wrap {
			margin-bottom: 13px;
			.text {
				margin-top: 10px;
				color: #9099af;
				font-size: 12px;
				text-align: center;
			}
			.line {
				height: 17px;
                .border-1px(#9099af);
			}
		}
		.mint-field {
			min-height: 40px;
		}
		.mint-cell-text,
		.mint-field-core {
			font-size: 12px;
			color: #525377;
		}
		.form-wrap {
			padding: 0 20px;
		}
		.item-wrap {
			position: relative;
		}
		.btn-send {
			position: absolute;
			right: 0;
			top: 0;
			line-height: 40px;
			font-size: 12px;
			color: #ff5ca8;
		}
		.form-btns {
			margin: 36px 20px 0;
		}
		.btn-next {
			background-color: #5d82ff;
		}
	}
</style>

