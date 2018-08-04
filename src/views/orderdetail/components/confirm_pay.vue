<template>
    <div>
        <div class="card">
            <div class="g-flex top">
                <div class="g-flex_item">
                    <div class="tit">借款金额</div>
                    <div class="val">1000.00</div>
                </div>
                <div class="g-flex_item">
                    <div class="tit">借款时间</div>
                    <div class="val">2019/10/10~2020/03/01</div>
                </div>
            </div>
            <div class="g-line line"></div>
            <div class="g-flex bottom">
                <div class="g-flex_item">
                    <div class="val">2.2%</div>
                    <div class="tit">年利率</div>
                </div>
                <div class="g-flex_item">
                    <div class="val">2.2%</div>
                    <div class="tit">抵押</div>
                </div>
                <div class="g-flex_item">
                    <div class="val">2.2%</div>
                    <div class="tit">初始质押率</div>
                </div>
                <div class="g-flex_item">
                    <div class="val">2.2%</div>
                    <div class="tit">本利总和</div>
                </div>
            </div>
        </div>
        <div class="card">
            <p class="tip">抵押申请已提交成功，正在确认充值情况。</p>
            <p class="tel">如果问题可咨询 15602345656</p>
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
    .card {
        background-color: #fff;
        padding: 20px;
        margin-top: 10px;
        font-size: 12px;
        color: #8e96a5;
    }
    .top {
        .tit {
            margin-bottom: 17px;
        }
        .val {
            font-size: 16px;
            color: #000;
        }
    }
    .bottom {
        .val {
            margin-bottom: 10px;
        }
    }
    .line {
        margin: 15px 0;
    }
    .tip,
    .tel {
        line-height: 23px;
        text-align: center;
    }
    .tip {
        color: #23334f;
    }
</style>


