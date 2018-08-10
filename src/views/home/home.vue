<template>
    <div class="page-index">
        <mt-button type="primary" size="large" class="btn-next" @click="_borrow">立即借款</mt-button>
        <mt-button type="primary" size="large" v-if="dIsMortgage" @click="_toBorrowList">借款记录</mt-button>
        <mt-button type="primary" size="large" @click="_pay">付款测试</mt-button>
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
                    console.log('error');
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
