<template>
    <div>
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
                    <div class="tit">初始质押率</div>
                </div>
                <div class="g-flex_item">
                    <div class="val">{{dData.allMoney}}</div>
                    <div class="tit">本利总和</div>
                </div>
            </div>
        </div>
        <div class="card">
            <p class="tip">抵押申请已提交成功，正在确认充值情况。</p>
            <p class="tel">如果问题可咨询 {{dPhone}}</p>
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
            dData: this.data,
            dPhone: CC.settings.phone
        }
    },
}
</script>
<style lang="less" scoped>
@import '../detail.less';
</style>


