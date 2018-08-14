<template>
    <div class="page-recharge">
        <div class="recharge-head">
            充值货币
        </div>
        <div class="recharge-total">
            {{`${count}${coin.name}`}}
        </div>
        <div class="recharge-head">
            扫描此二维码充值
        </div>
        <div class="recharge-code">
            <img :src="coin.qrcode">
        </div>
        <!-- <mt-button type="primary" size="large" class="btn-submit">保存</mt-button> -->
        <div class="recharge-address">
            <span id="copy-target">{{coin.address}}</span>
            <a class="btn-copy" data-clipboard-action="copy" data-clipboard-target="#copy-target">复制</a>
        </div>
        <mt-button type="primary" size="large" class="btn-complete" @click="_complete">完成充值</mt-button>
	</div>
</template>
<script>
import ClipboardJS from 'clipboard';
export default {
    props: {
		coin: {
			type: Object,
			default: null
		},
		count: {
			type: Number,
			default: 0
        },
        cycle: {
            type: Number,
			default: 0
        },
        money: {
            type: Number,
			default: 0
        },
        rate: {
            type: Number,
			default: 0
        },
        coupon: {
            type: String,
			default: ''
        }
    },
    mounted () {
        var clipboard = new ClipboardJS('.btn-copy');
        clipboard.on('success', (e) => {
            console.info('Action:', e.action);
            console.info('Text:', e.text);
            console.info('Trigger:', e.trigger);
            this.util.alert('复制成功！');
            e.clearSelection();
        });
        clipboard.on('error', function(e) {
            console.error('Action:', e.action);
            console.error('Trigger:', e.trigger);
        });
    },
    methods: {
        _complete () {
            this.util.api.get('/saveMortgage', {
                params: {
                    coin: this.coin.name,
                    coinNumber: this.count,
                    cycle: this.cycle,
                    money: this.money,
                    rate: this.rate,
                    exponent: this.coin.price,
                    couponId: this.coupon,
                    mortgageRate: this.coin.mortgateRate,
                    address: this.coin.address
                }
            }).then((res) => {
                if (res && res.result) {
                    this.util.alert('充值成功，等待放款。此处模拟调用');
                    history.back();
                    CC.$router.push('/approval');
                }
            })
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
        img {
            display: inline-block;
            width: 100%;
            height: 100%;
        }
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
