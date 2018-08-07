<template>
    <div class="close">
        <div class="card">
            <div class="g-flex top">
                <div class="g-flex_item">
                    <div class="tit">借款金额</div>
                    <div class="val">{{dData.money}}</div>
                </div>
                <div class="g-flex_item">
                    <div class="tit">借款时间</div>
                    <div class="val">{{dData.ctime}}~{{dData.etime}}</div>
                </div>
            </div>
            <div class="g-line line"></div>
            <div class="g-flex bottom">
                <div class="g-flex_item">
                    <div class="val">{{dData.rate | toPercentage}}</div>
                    <div class="tit">年利率</div>
                </div>
                <div class="g-flex_item">
                    <div class="val">{{dData.coinNumber + dData.coin}}</div>
                    <div class="tit">抵押</div>
                </div>
                <div class="g-flex_item">
                    <div class="val">{{dData.currentMortgageRate | toPercentage}}</div>
                    <div class="tit">当前质押率</div>
                </div>
                <div class="g-flex_item">
                    <div class="val">{{dData.allMoney}}</div>
                    <div class="tit">本利总和</div>
                </div>
            </div>
        </div>
        <div class="card">
            <p class="tip">由于未及时补仓，此借款已平仓。</p>
            <p class="tel">如果问题可咨询 15602345656</p>
        </div>
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


