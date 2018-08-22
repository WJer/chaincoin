<template>
    <div class="plan-wrap">
        <p v-if="plans.length==0">暂无</p>
        <ul v-else>
            <li class="g-flex plan-item" v-for="(plan, index) in plans" :key="index">
                <div class="circle" :class="{cur: index==cur}"></div>
                <div class="line"></div>
                <div class="g-flex_item time">{{plan.year+'-'+plan.day}}</div>
                <div class="g-flex_item money">{{plan.money}}<span class="overdue" v-if="plan.overdue">+{{plan.overdue}}</span></div>
                <div class="g-flex_item status-wrap">
                    <span class="g-status-1" v-if="plan.type==0">利息{{plan.overdue?'+罚息':''}}</span>
                    <span class="g-status-2" v-else>本利{{plan.overdue?'+罚息':''}}</span>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'cc-plan',
    props: {
        plans: {
            type: Array,
            required: false,
            default () {
                return [];
            }
        },
        cur: {
            type: Number,
            default: -1
        }
    },
    watched (val) {
        console.log(val);
    }
}
</script>
<style lang="less" scoped>
.plan-item {
    position: relative;
    height: 44px;
    padding-left: 20px;
}
.circle {
    position: absolute;
    width: 12px;
    height: 12px;
    border: 1px dashed #484848;
    border-radius: 50%;
    left: 0;
    top: 11px;
}
.line {
    position: absolute;
    border: 0.5px dashed #484848;
    height: 23px;
    left: 6px;
    top: 27px;
}
.money {
    text-align: center;
}
.status-wrap {
    text-align: right;
}
.g-flex_item {
    font-size: 15px;
    line-height: 38px;
}
.plan-item:last-child {
    .line {
        display: none;
    }
}
.plan-wrap {
    p {
        font-size: 12px;
        text-align: center;
        line-height: 100px;
        color: #9da6ba;
    }
}
.cur {
    border-color: #ffaa00;
    background-color: #ffaa00;
}
.overdue {
  font-size: 12px;
}
</style>
