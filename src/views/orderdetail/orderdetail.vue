<template>
    <div class="page-orderdetail">
        <div class="white-space"></div>
        <div class="detail-wrap">
            <component :is="dType"/>
        </div>
    </div>
</template>
<script>
import components from './components'
export default {
    components: components,
    data () {
        return {
            dType: 'confirm_pay'
        }
    }
}
</script>
<style lang="less" scoped>
    .page-orderdetail {
        width: 100%;
        height: 100%;
        background-color: #f5f6f9;
    }
    .white-space {
        background-color: #fff;
        height: 18px;
    }
    .detail-wrap {
        padding: 0 19px;
    }
</style>


