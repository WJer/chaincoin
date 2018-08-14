<template>
	<div class="page-form">
		<div class="line-wrap">
			<div class="line"></div>
			<div class="text">填写收款信息</div>
			<div class="line"></div>
		</div>
		<div class="form-wrap">
			<div class="item-wrap">
				<g-text label="开户行" placeholder="请输入开户行" v-model="dBank"></g-text>
			</div>
			<div class="item-wrap">
				<g-text label="开户支行" placeholder="请输入开户支行" v-model="dSubBank"></g-text>
			</div>
			<div class="item-wrap">
				<g-text label="银行卡号" placeholder="请输入银行卡号" v-model="dCard"></g-text>
			</div>
			<div class="item-wrap">
				<g-text label="银行卡号确认" placeholder="请输入银行卡号确认" v-model="dTwoCard"></g-text>
			</div>
			<div class="item-wrap">
				<g-text label="姓名" placeholder="请输入姓名" v-model="dName"></g-text>
			</div>
			<div class="item-wrap">
				<g-text label="身份证号" placeholder="请输入身份证号" v-model="dIdenCard"></g-text>
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
			dBank: '',
			dSubBank: '',
			dCard: '',
			dTwoCard: '',
			dName: '',
			dIdenCard: ''
		}
	},
	methods: {
		_next () {
			if (!this.validate()) {
				return;
			}
			var content = [
				`<div>开户行<span style="color: #727391;margin-left: 0.5rem;">${this.dBank}</span></div>`,
				`<div>开户支行<span style="color: #727391;margin-left: 0.5rem;">${this.dSubBank}</span></div>`,
				`<div>银行卡号<span style="color: #727391;margin-left: 0.5rem;">${this.dCard}</span></div>`
			].join('');
			var title = '请核实并确认以下信息';
			this.util.confirm(content, title).then(() => {
				const load = this.util.loading('保存中');
				this._getSaveRealName().then((res1) => {
					if (res1 && res1.result) {
						this._getSaveBank().then((res2) => {
							load.close();
							if (res2 && res2.result) {
								this.$emit('next');
							}else{
								this.util.alert(res2.message);
							}
						})
					}else {
						this.util.alert(res1.message);
						load.close();
					}
				})
			});
		},
		_getSaveBank () {
			return this.util.api.get('/saveOrUpdateBankInfo', {
				params: {
					bankName: this.dBank,
					branchName: this.dSubBank,
					cardNumber: this.dCard
				}
			})
		},
		_getSaveRealName () {
			return this.util.api.get('/saveRealName', {
				params: {
					name: this.dName,
					identification: this.dIdenCard
				}
			})
		},
		validate () {
			if (!this.dBank) {
				this.util.alert('请输入开户行');
				return false;
			}else if (!this.dSubBank) {
				this.util.alert('请输入开户支行');
				return false;
			}else if (!this.dCard) {
				this.util.alert('请输入银行卡号');
				return false;
			}else if(this.dCard != this.dTwoCard) {
				this.util.alert('两次输入的银行卡号不一致，请重新输入');
				return false;
			}else if (!this.dName) {
				this.util.alert('请输入姓名');
				return false;
			}else if (!this.dIdenCard) {
				this.util.alert('请输入身份证号');
				return false;
			}
			return true;
		}
	}
}
</script>
<style lang="less">
	.page-form {
		.line-wrap {
			display: flex;
			margin: 0 13px;
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
				background-color: #9099af;
				-webkit-box-flex: 1;
				-ms-flex: 1;
				flex: 1;
			}
		}
		.item-wrap {
			position: relative;
		}
		.form-wrap {
			padding: 0 20px;
		}
		.mint-field {
			min-height: 40px;
		}
		.mint-cell-text,
		.mint-field-core {
			font-size: 12px;
			color: #525377;
		}
		.form-btns {
			margin: 36px 20px 0;
		}
	}
</style>

