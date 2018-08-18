<template>
    <div id="app">
        <div class="app-hd">
            <cc-header :isBack="true"></cc-header>
        </div>
        <div class="app-bd">
            <!-- <router-view v-if="isRun"/> -->
            <div @click="_pay">运行</div>
        </div>
    </div>
</template>

<script>
    import 'mint-ui/lib/style.css'
    import '@/assets/css/reset.css'
    import '@/assets/css/resetui.less'
    import '@/assets/css/global.less'
    
    export default {
        name: 'App',
        data () {
            return {
                isRun: false,
                jMessageCallbacks: {}
            }
        },
        mounted () {
            // if (CC.isBitApp) {
            //     this.util.api.get('/isRegistered').then((res) => {
            //         if (res.code == 0) {
            //             if (res.result) {
            //                 this.$router.push('/index');
            //             }else {
            //                 this.$router.push('/form/account');
            //             }
            //         }
            //     })
            // }else{
            //     this.$router.push('/form/account');
            //     this.isRun = true;
            // }
        },
        methods: {
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
                    'userId': '19824',
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
            callApp(cmd, data) {
                var param = {
                    cmd: cmd,
                    data: data
                }
                if (window.webkit && window.webkit.messageHandlers) {
                    window.webkit.messageHandlers.JSHost.postMessage(param);
                } else {
                    // console.log('No JSHost for:'+JSON.stringify(param));
                }
            }
        }
    }
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  position: relative;
}
.app-hd {
    height: 38px;
}
.app-bd {
    position: absolute;
    top: 38px;
    left: 0;
    right: 0;
    bottom: 0;
}
</style>
