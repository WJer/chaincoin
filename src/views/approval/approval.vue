<template>
    <div class="page-approval">
		<div class="line-wrap">
			<div class="g-line"></div>
		</div>
        <div class="approval-wrap">
            <div class="step curstep">付款成功</div>
            <div class="line"></div>
            <div class="step">核实</div>
            <div class="line"></div>
            <div class="step">打款</div>
        </div>
        <div class="tip">如有问题可咨询123456789</div>
        <div class="form-btns">
            <mt-button type="default" size="large" class="btn-detail" @click="_next">查看详情</mt-button>
            <mt-button type="primary" size="large" class="btn-sure" @click="_next">确认</mt-button>
        </div>
	</div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
    .line-wrap {
		display: flex;
		height: 30px;
		-webkit-box-align: center;
		-ms-flex-align: center;
        align-items: center;
    }
    .page-approval {
		width: 100%;
		height: 100%;
		box-sizing: border-box;
        padding-top: 38px;
    }
    .approval-wrap {
        display: flex;
        -webkit-box-align: center;
		-ms-flex-align: center;
        align-items: center;
        margin: 33px 20px;
        .line {
            width: 90px;
            margin-bottom: 25px;
            border-bottom: 1px dashed #000;
        }
        .step,
        .line {
            flex: 1;
        }
        .step {
            font-size: 12px;
            color: #545377;
            text-align: center;
            &:before {
                content: '';
                display: block;
                width: 21px;
                height: 21px;
                margin: 8px auto 18px;
                border-radius: 50%;
                border: 1px dashed #000;
            }
        }
        .curstep {
            &:before {
                width: 40px;
                height: 40px;
                margin: 0 auto 10px;
                border: none;
                background-color: #f9cf31;
            }
        }
    }
    .tip {
        font-size: 12px;
        color: #b3b3c0;
        line-height: 33px;
        margin-left: 20px;
    }
    .form-btns {
        margin: 0 20px;
        button {
            width: 48%;
            display: inline-block;
        }
        .btn-detail {
            float: left;
            background-color: #d6edfe!important;
        }
        .btn-sure {
            float: right;
        }
    }
</style>
