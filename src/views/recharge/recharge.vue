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
            <span class="btn-copy" data-clipboard-action="copy" data-clipboard-target="#copy-target" @click="_copy">复制</span>
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
        },
        isBuyin: {
          type: Boolean,
          default: false
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
            this.util.alert('请长按文字区域，选择地址后执行复制！');
        });
    },
    methods: {
        _complete () {
            this.$emit('next');
        },
        _copy () {
          if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) { //ios
              var copyDOM = document.querySelector('#copy-target');  //要复制文字的节点
              var range = document.createRange();
              // 选中需要复制的节点
              range.selectNode(copyDOM);
              // 执行选中元素
              window.getSelection().addRange(range);
              // 执行 copy 操作
              var successful = document.execCommand('copy');
              try {
                var msg = successful ? 'successful' : 'unsuccessful';

                console.log('copy is' + msg);
                this.util.alert('复制成功！');
              } catch(err) {
                console.log('Oops, unable to copy');
              }
              // 移除选中的元素
              window.getSelection().removeAllRanges();
          }
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
