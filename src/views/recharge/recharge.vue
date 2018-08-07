<template>
    <div class="page-recharge">
        <div class="recharge-head">
            充值货币
        </div>
        <div class="recharge-total">
            10BTC
        </div>
        <div class="recharge-head">
            充值二维码
        </div>
        <div class="recharge-code"></div>
        <mt-button type="primary" size="large" class="btn-submit" @click="_submit">保存</mt-button>
        <div class="recharge-address">
            dasdf9asd08098as09d8f09a8s0d<a class="btn-copy">复制</a>
        </div>
        <mt-button type="primary" size="large" class="btn-complete" @click="_complete">完成充值</mt-button>
	</div>
</template>
<script>
export default {
    methods: {
        _submit () {

        },
        _complete () {
            this.$router.push('/approval');
        }
    }
}
</script>
<style lang="less" scoped>
    .page-recharge {
		width: 100%;
		height: 100%;
		box-sizing: border-box;
        padding: 38px 20px 0;
    }
    .recharge-wrap {
        display: flex;
        -webkit-box-align: center;
		-ms-flex-align: center;
        align-items: center;
    }
    .recharge-head {
        margin-top: 15px;
        line-height: 41px;
        font-size: 12px;
        color: #525377;
        text-align: center;
    }
    .recharge-total {
        color: #23334f;
        font-size: 24px;
        font-weight: 500;
        text-align: center;
    }
    .recharge-code {
        width: 115px;
        height: 115px;
        margin: 0 auto;
        background-color: #eee;
    }
    .btn-submit {
        width: 127px;
        background-color: #f9cf31;
        margin: 10px auto 0;
    }
    .recharge-address {
        margin-top: 30px;
        text-align: center;
        font-size: 12px;
        line-height: 48px;
    }
    .btn-copy {
        padding-left: 8px;
        color: #f9cf31;
    }
</style>

</style>
