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
				<div class="btn-send" @click="_sendCode($event)" v-if="!dCountdown">{{dCodeBtn}}</div>
				<div class="btn-send" v-else>{{dCountdown}}秒</div>
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
			dCode: '',
			dCountdown: 0,
			dCodeBtn: '发送验证码',
      dClick: false,
			I: null
		}
	},
	methods: {
		_next () {
			const load = this.util.loading('加载中...');
			this.util.api.post('/registerByPhone', {
				bitkeepId: CC.userid,
				phone: this.dMobile,
				code: this.dCode
			}).then((res) => {
				load.close();
				if (res.result) {
          window.localStorage.time = +new Date();
					CC.userid = window.localStorage.uid = res.bitkeepId;
          CC.isRegist = true;
          this.$emit('next');
				}else{
					this.util.alert(res.message);
				}
			})
		},
		_sendCode (e) {
      if (!this.dClick) {
        this.dClick = true;
        this.util.api.post('/sendMessageCode', {
          phone: this.dMobile
        }).then(() => {
          this.dCodeBtn = '重新发送';
          this.dClick = false;
          this._runCountdown();
        })
      }
		},
		_runCountdown () {
			this.dCountdown = 60;
			this.I = setInterval(() => {
				this.dCountdown--;
				if (this.dCountdown == 0) {
					clearInterval(this.I);
				}
			}, 1000);
		},
		beforeDestroy () {
			clearInterval(this.I);
		}
	}
}
</script>
<style lang="less">
    @import '../../assets/css/mixin.less';
	.page-form {
		.line-wrap {
			margin-bottom: 13px;
			.text {
				width: 100%;
				margin-top: 10px;
				color: #9099af;
				font-size: 14px;
				text-align: center;
			}
			.line {
				width: 100%;
				height: 17px;
                .border-1px(#9099af);
			}
		}
		.mint-field {
			min-height: 40px;
		}
		.mint-cell-text,
		.mint-field-core {
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

