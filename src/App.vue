<template>
    <div id="app">
        <cc-header></cc-header>
        <div class="body">
            <router-view v-if="isRun"/>
        </div>
    </div>
</template>

<script>
    import '@/assets/css/reset.css'
    import 'mint-ui/lib/style.css'
    import '@/assets/css/resetui.less'
    import '@/assets/css/global.less'
    import header from '@/components/header'
    
    export default {
        name: 'App',
        data () {
            return {
                isRun: false
            }
        },
        components: {
            'cc-header': header
        },
        created () {
            this._fetch();
        },
        methods: {
            _fetch () {
                this.util.api.all([this._getSettings(), this._getBank()]).then(this.util.api.spread((res1, res2) => {
                    CC.settings = res1.settings;
                    CC.bank = res2.bankName ? {
                        bankName: res2.bankName,
                        branchName: res2.branchName,
                        cardNumber: res2.cardNumber
                    } : void 0;
                    this.isRun = true;
                }));
            },
            _getSettings () {
                return this.util.api.get('/getSettings');
            },
            _getBank () {
                return this.util.api.get('/getBankInfo');
            }
        }
    }
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
.body {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding-top: 38px;
}
</style>
