<template>
    <div class="cover">
        <div class="tip-wrap">提示：如未能及时补仓，质押率上升到90%时，该抵押将被平仓。</div>
        <div class="card">
            <div class="g-flex top">
                <div class="g-flex_item">
                    <div class="tit">补仓数量</div>
                    <div class="val g-bold val-big">{{dData.buyInNumber}}</div>
                </div>
                <div class="g-flex_item">
                    <div class="item-rate">
                        <span class="tit">健康质押率</span>
                        <span class="val">{{dHealthRate | toPercentage}}</span>
                    </div>
                    <div class="item-rate">
                        <span class="tit">当前质押率</span>
                        <span class="val">{{dData.currentMortgageRate | toPercentage}}</span>
                    </div>
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
                    <div class="val">{{dData.allMoney}}</div>
                    <div class="tit">本利总和</div>
                </div>
            </div>
        </div>
        <div class="card">
            <div>还款计划</div>
            <plan :plans="dPlans" :cur="dCur"></plan>
        </div>
        <div class="g-flex btn-wrap">
            <mt-button type="primary" size="large" class="btn g-btn-thin" @click="_pay(1)">提前全额还款</mt-button>
            <mt-button type="primary" size="large" class="btn" @click="_pay(2)">提前还本期</mt-button>
        </div>
    </div>
</template>
<script>
import plan from '@/components/plan'
export default {
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    components: {
        plan
    },
    data () {
        return {
            dData: this.data,
            dPlans: [],
            dCur: -1,
            dHealthRate: 0
        }
    },
    created () {
        this._fetchPlans();
        CC.coins.some((coin) => {
            if (coin.name == this.dData.coin) {
                this.dHealthRate = coin.mortgateRate;
            }
        });
    },
    methods: {
        _fetchPlans () {
            this.util.api.get('/getRepayPlan', {
                params: {
                    mortgageId: this.dData.mortgageId
                }
            }).then((res) => {
                if (res) {
                    this.dPlans = res.plans.map((item) => {
                      item.money = item.overdue ? item.normalMoney : item.allMoney;
                      return item;
                    });
                    this.dCur = res.currentPlan;
                }
            })
        },
        _pay (type) {
            this.$emit('pay', type);
        }
    }
}
</script>
<style lang="less" scoped>
@import '../detail.less';
</style>


