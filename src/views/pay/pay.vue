<template>
    <div class="page-pay">
        <div class="white-space"></div>
        <div class="detail-wrap">
            <div class="card">
                <div class="g-flex top">
                    <div class="g-flex_item">
                        <div class="tit">还款总额</div>
                        <div class="total g-bold">{{dData.currentRepayMoney}}</div>
                    </div>
                    <div class="g-flex_item">
                        <div class="money-item">
                            <span class="g-left">本金</span>
                            <span class="g-right">{{dData.money}}</span>
                        </div>
                        <div class="money-item">
                            <span class="g-left">利息</span>
                            <span class="g-right">{{dData.normalMoney}}</span>
                        </div>
                        <div class="money-item">
                            <span class="g-left">罚息</span>
                            <span class="g-right">{{(dData.currentRepayMoney - dData.normalMoney) | toFixed2}}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card" v-if="dBank">
                <div class="card-tit">打款信息</div>
                <div class="g-flex card-item">
                    <div class="g-flex_item">
                        <div class="tit">银行卡号</div>
                        <div class="val cardno">{{dBank.cardnumber}}</div>
                    </div>
                </div>
                <div class="g-flex card-item">
                    <div class="g-flex_item">
                        <div class="tit">姓名</div>
                        <div class="val">{{dBank.name}}</div>
                    </div>
                    <div class="g-flex_item">
                        <div class="tit">开户行</div>
                        <div class="val">{{dBank.bankname}}</div>
                    </div>
                </div>
            </div>
            <div class="card" v-if="isLast">
                <div class="card-tit">收款信息</div>
                <div class="g-flex card-item">
                    <div class="g-flex_item">
                        <div class="tit">钱包地址</div>
                        <div class="address-wrap">
                            <input v-model="dAddress" type="text" class="val addres" placeholder="请输入钱包地址" :readonly="dReadonly">
                            <span v-if="!dReadonly" class="{disabled:!dAddress}" @click="_saveAddress">完成</span>
                        </div>
                    </div>
                </div>
                <div class="tip">提示：全部返款后，数字货币将返还到该钱包地址</div>
            </div>
        </div>
        <div class="g-flex btn-wrap">
            <mt-button type="primary" size="large" class="btn g-btn-thin" @click="dReadonly=false">更改地址</mt-button>
            <mt-button type="primary" size="large" class="btn" @click="_submitRepay">我已打款</mt-button>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        data: {
            type: Object,
            required: true
        },
        isLast: {
            type: Boolean,
            default: false
        }
    },
    filters: {
        toFixed2 (val) {
            return Number(val).toFixed(2);
        }
    },
    data () {
        return {
            dData: this.data,
            dBank: null,
            dReadonly: true,
            dAddress: this.data.address
        }
    },
    created () {
        this._fetchManagerBank();
    },
    methods: {
        _click () {
            this.dReadonly = false;
        },
        _fetchManagerBank () {
            this.util.api.get('/getManagerBank').then((res) => {
                res && (this.dBank = res.bank);
            })
        },
        _saveAddress () {
            if (!this.dAddress) {
                this.util.alert('不能为空');
                return;
            }
            this.util.api.get('/saveUserToAddress', {
                params: {
                    address: this.dAddress,
                    coin: this.dData.coin
                }
            }).then((res) => {
                if (res && res.result) {
                    this.dReadonly = true;
                }
            })
        },
        _submitRepay () {
            // this.util.api.get('/submitRepay', {
            //     params: {
            //         mortgageId: this.dData.mortgageId
            //     }
            // }).then((res) => {
            //     if (res && res.result) {
            //         this.$emit('complete');
            //     }
            // })
            this.$emit('complete');
        }
    }
}
</script>
<style lang="less" scoped>
    .page-pay {
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
    .card {
        background-color: #fff;
        padding: 20px;
        margin-bottom: 10px;
        font-size: 12px;
        color: #8e96a5;
        .val {
            color: #525377;
        }
        .card-item {
            margin-top: 15px;
        }
        .tit {
            line-height: 24px;
        }
        .cardno {
            font-size: 22px;
            color: #000;
        }
        
    }
    .address-wrap {
        position: relative;
        .addres {
            display: block;
            width: 100%;
            font-size: 20px;
            color: #000;
            line-height: 30px;
        }
        span {
            position: absolute;
            right: 0;
            top: 0;
            line-height: 30px;
            color: #5d82ff;
        }
        .disabled {
            color: #a3b5ff;
        }
    }
    .total {
        font-size: 24px;
        color: #000;
        line-height: 40px;
    }
    .money-item {
        overflow: hidden;
        line-height: 24px;
    }
    .btn-wrap {
        margin: 15px 14px 0;
        .btn {
            margin: 0 5px;
        }
    }
    .tip {
        line-height: 25px;
    }
</style>
