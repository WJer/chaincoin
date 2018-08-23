<template>
    <div class="page-orderdetail">
        <div class="white-space"></div>
        <div class="detail-wrap">
            <component :is="dType" :data="data" @pay="_pay"/>
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
            dType: ['remit','refuse','repay','repay','repay','cover','','complete','close'][this.data.status],
            dData: this.data
        }
    },
    methods: {
        _pay (type, obj) {
            if (type == 3) {
              this._payCoin(type, obj);
            }else{
              this._payMoney(type, obj);
            }
        },
        _payCoin (type, obj) {
          var coin = null;
          CC.coins.some((c) => {
            if (c.name == obj.coin) {
              coin = c;
              return true
            }
            return false
          })
          if (CC.isBitApp && coin.transfer == 1) {
            this._payCoinByApp(coin,obj);
          }else{
            this._payCoinByMe(coin,obj);
          }
        },
        _payCoinByMe (coin,obj) {
          this.util.slide({
                context: this,
                component: {
                    'detail' : () => import('@/views/recharge')
                },
                data: {
                  coin: coin,
                  count: obj.buyInNumber,
                },
                events: {
                    'next': '_saveBuyin.hide'
                }
            });
        },
        _payCoinByApp (coin,obj) {
          this.util.slide({
                context: this,
                component: {
                    'detail' : () => import('@/views/transfer')
                },
                data: {
                  coin: coin,
                  count: obj.buyInNumber,
                },
                events: {
                    'next': '_saveBuyin.hide'
                }
            });
        },
        _payMoney (type, obj) {
            this.util.slide({
                context: this,
                component: {
                    'detail' : () => import('@/views/pay')
                },
                data: {
                    data: Object.assign({}, this.data, obj||{}),
                    isLast: type == 1
                },
                events: {
                    'complete': '_complete.hide'
                }
            });
        },
        _complete () {
            this.$emit('complete');
        },
        _saveBuyin () {
          this.util.api.get('/saveBuyIn', {
            params: {
              mortgageId: this.data.mortgageId,
              buyInNumber: this.data.buyInNumber
            }
          }).then((res) => {
            if (res && res.result) {
              this._complete();
            }
          })
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
        padding: 10px 19px;
    }
</style>


