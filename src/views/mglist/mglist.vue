<template>
    <div class="page-mortgagelist">
        <div class="white-space"></div>
        <div class="g-flex top-wrapper">
            <div class="top-item g-fled_item">
                <div class="val">
                  <span class="unit">￥</span>
                  {{dSevenRepay}}
                </div>
                <div class="tit">近7日还款</div>
            </div>
            <div class="top-item g-fled_item">
                <div class="val">{{dAllOverdue}}</div>
                <div class="tit">逾期罚息</div>
            </div>
        </div>
        <cc-scroll :pullUpLoad="false" @pulling-down="_fetchList" class="page-scroll" ref="scroll">
            <ul class="list">
                <div class="card" v-for="mortgage in dList" @click="_clickHandle(mortgage)">
                    <div class="left">
                        <div class="coin"><i class="icon" :class="`icon-${mortgage.coin.toLowerCase()}`"></i><span style="vertical-align: middle;">{{mortgage.coin}}</span></div>
                        <div class="rate">{{mortgage.currentMortgageRate | toPercentage}}</div>
                        <div class="rage-hd">初始质押率</div>
                    </div>
                    <div class="center">
                        <div class="total">
                          <span class="unit" v-if="mortgage.status!=5">￥</span>
                        {{mortgage.status!=5?mortgage.currentRepayMoney:mortgage.buyInNumber}}</div>
                        <div class="total-hd">{{mortgage.status==5?'补仓数量':'还款金额'}}</div>
                    </div>
                    <div class="right">
                        <div class="status status-1" :class="{'status-2': mortgage.status==4||mortgage.status==5}">{{mortgage.message}}</div>
                        <div class="time">{{mortgage.currentRepayTime}}</div>
                        <div class="time-hd">还款时间</div>
                    </div>
                </div>
                <div v-if="dList.length==0" class="g-nodata">暂无抵押记录</div>
            </ul>
        </cc-scroll>
        <div class="form-btns">
            <mt-button type="primary" size="large" class="btn-pledge" @click="_pledge">立即借款</mt-button>
        </div>
    </div>
</template>
<script>
export default {
    created () {
        this._fetchList();
    },
    data () {
        return {
            dList: [],
            dSevenRepay: 0,
            dAllOverdue: 0
        }
    },
    methods: {
        _pledge () {
            this.$router.push('/form/borrow');
        },
        _fetchList () {
            const load = this.util.loading('加载中...');
            this.util.api.get('/getMortgageList').then((res) => {
                res && (this.dList = res.mortgages);
                res && (this.dSevenRepay = res.sevenDaysRepay);
                res && (this.dAllOverdue = res.allOverdue);
                this.$refs.scroll.forceUpdate();
                load.close();
            })
        },
        _clickHandle (mortgage) {
            this.util.slide({
                context: this,
                component: {
                    'detail' : () => import('@/views/mgdetail')
                },
                data: {
                    data: mortgage
                },
                events: {
                    'complete': '_fetchList.hide'
                }
            })
        },
    }
}
</script>
<style lang="less" scoped>
    .page-mortgagelist {
        position: relative;
        height: 100%;
        overflow: hidden;
        background-color: #f5f6f9;
    }
    .white-space {
        background-color: #fff;
        height: 18px;
    }
    .top-wrapper {
        margin: 11px 20px 0;
        height: 64px;
        justify-content: space-between;
    }
    .top-item {
        width: 48%;
        padding: 7px 0 9px;
        border-radius: 5px;
        background-color: #fff;
        .val {
            line-height: 28px;
            text-align: center;
            font-size: 16px;
            color: #545377;
        }
        .tit {
            line-height: 20px;
            text-align: center;
            font-size: 13px;
            color: #8e96a5;
        }
        .unit {
            position: relative;
            top: -5px;
            color: #9da6ba;
            font-size: 14px;
        }
    }
    .page-scroll {
        position: absolute;
        top: 103px;
        left: 0;
        right: 0;
        bottom: 70px;
        height: auto;
    }
    .list {
        padding: 0 20px;
    }
    .card {
        position: relative;
        margin-bottom: 10px;
        padding: 15px;
        background-color: #fff;
        font-size: 13px;
        .left {
            position: absolute;
            top: 15px;
            left: 15px;
        }
        .right {
            position: absolute;
            top: 15px;
            right: 15px;
        }
        .center {
            margin: 0 80px;
            text-align: center;
            min-height: 60px;
        }
        .coin {
            line-height: 22px;
            font-weight: bold;
            color: #000;
        }
        .icon {
            display: inline-block;
            width: 16px;
            height: 16px;
            margin-right: 5px;
            border-radius: 50%;
            //background-color: #eee;
            vertical-align: middle;
        }
        .status {
            display: inline-block;
            height: 22px;
            line-height: 22px;
            padding: 0 7px;
            border-radius: 5px;
        }
        .status-1 {
            color: #ffaa00;
            background-color: #fff8de;
        }
        .status-2 {
            color: #5a7ef8;
            background-color: #e8ecfa;
        }
        .rate,
        .time {
            font-weight: bold;
            color: #000;
            margin-top: 18px;
            text-align: left;
        }
        .rage-hd,
        .time-hd {
            // font-weight: bold;
            color: #8e96a5;
            margin-top: 9px;
            text-align: left;
        }
        .total {
            margin-top: 28px;
            font-size: 24px;
            color: #000;
            font-weight: bold;
        }
        .total-hd {
            margin-top: 15px;
            color: #8e96a5;
        }
        .unit {
            position: relative;
            top: -8px;
            color: #9da6ba;
            font-size: 18px;
        }
    }
    .form-btns {
        position: fixed;
        bottom: 0;
        width: 100%;
        box-sizing: border-box;
        padding: 17px 20px!important;
    }
    .icon-btc,
    .icon-bch,
    .icon-etc,
    .icon-eth,
    .icon-ltc,
    .icon-eos {
      background-image: url('/lianbi/chaincoin/dist/static/images/btc.jpeg');
      background-size: 100% 100%;
      background-repeat: no-repeat;
      border-radius: 50%;
    }
    .icon-btc {
      background-image: url('/lianbi/chaincoin/dist/static/images/btc.jpeg');
    }
    .icon-bch {
      background-image: url('/lianbi/chaincoin/dist/static/images/bch.jpeg');
    }
    .icon-etc {
      background-image: url('/lianbi/chaincoin/dist/static/images/etc.jpeg');
    }
    .icon-eth {
      background-image: url('/lianbi/chaincoin/dist/static/images/eth.jpeg');
    }
    .icon-ltc {
      background-image: url('/lianbi/chaincoin/dist/static/images/ltc.jpeg');
    }
    .icon-eos {
      background-image: url('/lianbi/chaincoin/dist/static/images/eos.jpeg');
    }
</style>
