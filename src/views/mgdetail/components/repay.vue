<template>
    <div>
        <div class="card repay">
            <div class="g-flex top">
                <div class="g-flex_item">
                    <div class="val g-bold">
                        {{dData.currentRepayMoney}}
                        <span v-if="dData.status==4" class="g-status-2" style="margin-left:15px;">利息+罚息</span>
                        <span v-else class="g-status-1">利息</span>
                    </div>
                    <div class="tit tit-warn" v-if="dData.status==4">已逾期，需尽快还款</div>
                    <div class="tit" v-else>下一次还款金额</div>
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
            <div>还款计划</div>
            <plan :plans="dPlans" :cur="dCur"></plan>
        </div>
        <div v-if="dPlans.length">
            <div class="g-flex btn-wrap" v-if="dCur != dPlans.length-1">
                <mt-button type="primary" size="large" class="btn g-btn-thin" @click="_pay(1)">提前全额还款</mt-button>
                <mt-button type="primary" size="large" class="btn" @click="_pay(2)">{{dData.status==3?'':'提前'}}还本期</mt-button>
            </div>
            <div class="g-flex btn-wrap" v-else>
                <mt-button type="primary" size="large" class="btn" @click="_pay(1)">立即还款</mt-button>
            </div>
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
            dCur: 0
        }
    },
    created () {
      console.log(this.data);
        this._fetchPlans();
    },
    methods: {
        _fetchPlans () {
            this.util.api.get('/getRepayPlan', {
                params: {
                    mortgageId: this.dData.mortgageId
                }
            }).then((res) => {
                if (res) {
                    this.dCur = res.currentPlan;
                    this.dPlans = res.plans;
                    this.dPlans = res.plans.map((item) => {
                      item.money = item.overdue ? item.normalMoney : item.allMoney;
                      return item;
                    });
                }
            })
        },
        _pay (type) {
            this.$emit('pay', type, {
                normalMoney: this.dPlans[this.dCur].normalMoney
            });
        }
    }
}
</script>
<style lang="less" scoped>
@import '../detail.less';
</style>


