<template>
    <div class="page-index">
        <mt-button type="primary" size="large" class="btn-next" @click="_borrow">立即借款</mt-button>
        <mt-button type="primary" size="large" v-if="dIsMortgage" @click="_toBorrowList">借款记录</mt-button>
        <mt-button type="primary" size="large" @click="_pay">付款测试11</mt-button>
        <div class="top-wrap">
            <div class="icon"></div>
            <h1>
                <div>抵押比特币</div>
                <div>安全借现金</div>
            </h1>
            <h2>
                <div>币金所产品是借款人以持有的数字货币为质押标的，</div>
                <div>向出资人进行融资的专业数字资产抵押贷款平台</div>
            </h2>
        </div>
        <div class="middle-wrap">
            <h1>流程极简 当天放款</h1>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            dIsMortgage: false
        }
    },
    created () {
        this._fetchIsMortgage();
    },
    methods: {
        _borrow () {
            this.util.api.get('/isRegistered').then((res) => {
                if (res.code == 0) {
                    if (res.result) {
                        this.$router.push('/form/borrow');
                    }else {
                        this.$router.push('/form/account');
                    }
                }
            })
        },
        _toBorrowList () {
            this.$router.push('/mglist');
        },
        _fetchIsMortgage () {
            this.util.api.get('/hasMortgage', {
                data: {
                    bitkeepId: 200190
                }
            }).then((res) => {
                if (res && res.code == 0) {
                    this.dIsMortgage = true;
                }
            })
        },
        _pay () {
            // const time = +new Date();
            // this.util.api.get('/createSign', {
            //     params: {
            //         amount: 10,
            //         coin: 'eth',
            //         orderId: time,
            //         userId: CC.userid
            //     }
            // }).then((res) => {
            //     console.log(res);
            //     console.log(+new Date());
            // })
            this.jhost('actionP', JSON.stringify({
                'contract': 'ETH',
                'appId': '6V2RGS0VuSmZDTXJHeGwVXNl',
                'amount': 1,
                'coin': 'ETH',
                'orderId': 1533899172238,
                'userId': CC.userid,
                'fee': 0,
                'from': '',
                'to': '0x9182b2e0d40C7bFC3c08C73636d7bdb08bB5B32b',
                "note": "备注信息",
                "sign": "",
                "title": "主题信息",
                "hash": '187071afbcb137e22743d8a050a1044d992edf2fa107871f66c2fb0f4ecf72ea'
            }), function(err,response){
                if (err) {
                    console.log(JSON.stringify(err));
                    console.log(JSON.stringify(response));
                    return;
                }
                console.log(JSON.stringify(response));
            });
        },
        jhost(){
            if(arguments.length < 1){
                return;
            }
            var method = arguments[0];
            var args = [];
            for(var i = 1; i < arguments.length; i++) {
                if(arguments[i] instanceof Function){
                    this.jMessageCallbacks[method] = arguments[i];
                } else {
                    args.push(arguments[i]);
                }
            }
            if(window.JSHost){
                window.JSHost[method].apply(this, args);
            } else {
                this.callApp(method, JSON.stringify(args));
            }
        },
    }
}
</script>
<style lang="less" scoped>
    .page-index {
        position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #fff;
    }
    .top-wrap {
        position: relative;
        height: 248px;
        .icon {
            width: 100%;
            height: 100%;
            background-image: url('/static/images/top.jpg');
        }
        h1 {
            position: absolute;
            top: 70px;
            width: 100%;
            text-align: center;
            font-size: 26px;
            line-height: 1.3em;
            color: #fff;
        }
        h2 {
            position: absolute;
            top: 150px;
            width: 100%;
            text-align: center;
            font-size: 12px;
            line-height: 1.3em;
            color: #ccd2e7;
        }
    }
    .middle-wrap {
        h1 {
            width: 100%;
            margin-top: 20px;
            text-align: center;
            font-size: 26px;
            line-height: 1.3em;
        }
    }
</style>
