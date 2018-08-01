<template>
    <div class="page-orderlist">
        <div class="white-space"></div>
        <div class="top">
            <div class="left top-item">
                <div class="val">400</div>
                <div class="tit">近7日还款</div>
            </div>
            <div class="right top-item">
                <div class="val">0</div>
                <div class="tit">需补仓</div>
            </div>
        </div>
        <ul class="list">
            <div class="card">
                <div class="left">
                    <div class="coin"><i class="icon"></i>BTC</div>
                    <div class="rate">45.32%</div>
                    <div class="rage-hd">当前质押率</div>
                </div>
                <div class="center">
                    <div class="total">120.00</div>
                    <div class="total-hd">还款今日</div>
                </div>
                <div class="right">
                    <div class="status">今日还款</div>
                    <div class="time">2018/09/08</div>
                    <div class="time-hd">还款时间</div>
                </div>
            </div>
            <div class="card">
                <div class="left">
                    <div class="coin"><i class="icon"></i>BTC</div>
                    <div class="rate">45.32%</div>
                    <div class="rage-hd">当前质押率</div>
                </div>
                <div class="center">
                    <div class="total">120.00</div>
                    <div class="total-hd">还款今日</div>
                </div>
                <div class="right">
                    <div class="status">今日还款</div>
                    <div class="time">2018/09/08</div>
                    <div class="time-hd">还款时间</div>
                </div>
            </div>
            <div class="card">
                <div class="left">
                    <div class="coin"><i class="icon"></i>BTC</div>
                    <div class="rate">45.32%</div>
                    <div class="rage-hd">当前质押率</div>
                </div>
                <div class="center">
                    <div class="total">120.00</div>
                    <div class="total-hd">还款今日</div>
                </div>
                <div class="right">
                    <div class="status">待打款</div>
                    <div class="time">2018/09/08</div>
                    <div class="time-hd">还款时间</div>
                </div>
            </div>
        </ul>
        <div class="form-btns">
            <mt-button type="primary" size="large" class="btn-pledge" @click="_pledge">抵押</mt-button>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
    .page-orderlist {
		width: 100%;
		height: 100%;
		box-sizing: border-box;
        padding-top: 38px;
        background-color: #f5f6f9;
    }
    .white-space {
        background-color: #fff;
        height: 18px;
    }
    .top {
        margin: 11px 20px 0;
        overflow: hidden;
        .left {
            float: left;
        }
        .right {
            float: right;
        }
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
            font-size: 10px;
            color: #8e96a5;
        }
    }
    .list {
        padding: 0 20px;
    }
    .card {
        position: relative;
        margin-top: 10px;
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
            background-color: #eee;
            vertical-align: middle;
        }
        .status {
            display: inline-block;
            height: 22px;
            line-height: 22px;
            padding: 0 7px;
            border-radius: 5px;
            color: #ffaa00;
            background-color: #fff8de;
        }
        .rate,
        .time {
            font-weight: bold;
            color: #000;
            margin-top: 18px;
            text-align: center;
        }
        .rage-hd,
        .time-hd {
            font-weight: bold;
            color: #8e96a5;
            margin-top: 9px;
            text-align: center;
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
    }
    .form-btns {
        margin: 17px 20px 0;
    }
</style>
