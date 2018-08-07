<template>
    <div class="page-orderdetail">
        <div class="white-space"></div>
        <div class="detail-wrap">
            <component :is="dType" :data="data"/>
        </div>
    </div>
</template>
<script>
import components from './components'
import ccheader from '@/components/header'
export default {
    components: Object.assign({}, components, {
        ccheader
    }),
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    data () {
        return {
            dType: ['','','repay','','repay','cover','','complete','close'][this.data.status],
            dData: this.data
        }
    },
    created () {
        console.log(this.dData);
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
        padding: 10px 19px;
    }
</style>


