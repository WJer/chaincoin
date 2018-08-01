<template>
    <mt-header fixed :title="dTitle" class="header"></mt-header>
</template>
<script>
export default {
    created () {
        CC.header = this;
    },
    data () {
        return {
            dTitle: '币金所'
        }
    }
}
</script>
<style lang="less">
    .header {
        font-size: 15px;
		height: 40px;
        padding: 0 10px;
        background-color: #fff;
        color: #081351;
    }
</style>
