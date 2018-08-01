<template>
    <div id="app">
        <cc-header></cc-header>
        <router-view/>
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
        components: {
            'cc-header': header
        }
    }
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
