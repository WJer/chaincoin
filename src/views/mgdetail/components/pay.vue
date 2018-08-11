<template>
    <div class="pay">
        <div class="card">
            <div class="g-flex top">
                <div class="g-flex_item">
                    <div class="tit">还款总额</div>
                    <div class="val">{{dData.allMoney}}</div>
                </div>
                <div class="g-flex_item">
                    <div class="item-rate">
                        <span class="tit">利息</span>
                        <span class="val">{{dData.rate | toLowerCase}}</span>
                    </div>
                    <div class="item-rate">
                        <span class="tit">罚息</span>
                        <span class="val">0</span>
                    </div>
                </div>
            </div>
            <div class="g-line line"></div>
        </div>
        <div class="card"></div>
    </div>
</template>
<script>
export default {
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    data () {
        return {
            dData: this.data
        }
    },
}
</script>
<style lang="less" scoped>
@import '../detail.less';
</style>


