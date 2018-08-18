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
        mounted () {
            if (CC.isBitApp) {
                this.util.api.get('/isRegistered').then((res) => {
                    if (res.code == 0) {
                        if (res.result) {
                            this.$router.push('/index');
                        }else {
                            this.$router.push('/form/account');
                        }
                    }
                })
            }else{
                this.$router.push('/form/account');
                this.isRun = true;
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
