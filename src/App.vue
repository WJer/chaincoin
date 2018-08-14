<template>
    <div id="app">
        <div class="app-hd">
            <cc-header :isBack="true"></cc-header>
        </div>
        <div class="app-bd">
            <router-view v-if="isRun"/>
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
                isRun: false
            }
        },
        created () {
            if (CC.userid) {
                this._fetch();
            }else{
                this.isRun = true;
            }
        },
        methods: {
            _fetch () {
                this.util.api.all(this._getAjax()).then(this.util.api.spread((res1, res2, res3) => {
                    res1 && (CC.settings = res1.settings);
                    res2 && (CC.bank = {
                        bankName: res2.bankName,
                        branchName: res2.branchName,
                        cardNumber: res2.cardNumber
                    })
                    res3 && (CC.coins = res3.coins);
                    this.isRun = true;
                    // this.redirect();
                }));
            },
            _getAjax() {
                return [
                    this.util.api.get('/getSettings'),
                    this.util.api.get('/getBankInfo'),
                    this.util.api.get('/getAllCoin')
                ]
            },
            // redirect() {
            //     if (CC.userid) {
            //         this.$router.push('/index');
            //     }else{
            //         this.$router.push('/form/account');
            //     }
            // }
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
