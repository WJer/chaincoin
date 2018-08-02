<template>
    <div class="page-orderdetail">
        <div class="white-space"></div>
        <div class="top">
            <div class="info">
                <div class="two-item">
                    <div class="tit">借款金额</div>
                    <div class="val">1000.00</div>
                </div>
                <div class="two-item">
                    <div class="tit">借款时间</div>
                    <div class="val time">2017/10/19-2019/01/01</div>
                </div>
            </div>
            <div class="summary">
                <div class="four-item">
                    <div class="val">49.5%</div>
                    <div class="tit">年利率</div>
                </div>
                <div class="four-item">
                    <div class="val">1BTC</div>
                    <div class="tit">抵押</div>
                </div>
                <div class="four-item">
                    <div class="val">99.00%</div>
                    <div class="tit">初始质押率</div>
                </div>
                <div class="four-item">
                    <div class="val">1000.00</div>
                    <div class="tit">本利综合</div>
                </div>
            </div>
        </div>
        <div class="contents">
            
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
    .page-orderdetail {
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
        background-color: #fff;
        padding: 22px 28px;
        .info,
        .summary {
            overflow: hidden;
        }
    }
    .four-item{
        float: left;
        width: 25%;
        text-align: center;
        font-size: 12px;
        color: #8e96a5;
    }
    .two-item {
        float: left;
        width: 50%;
        font-size: 12px;
        color: #8e96a5;
    }
    .summary {
        .val {
            line-height: 30px;
        }
    }
    .info {
        .val {
            line-height: 40px;
            font-size: 16px;
            color: #000;
        }
        .time {
            font-size: 12px;
        }
    }
</style>


