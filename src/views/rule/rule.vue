<template>
    <cc-scroll :pullUpLoad="false" :pullDownRefresh="false" ref="scroll" class="page-rule">
        <br/>
        <p>币金所产品是借款人以持有的数字货币为质押标的，向出资人进行融资的产品。目前支持的抵押数字货币有：BTC、ETH、BCH、 LTC、ETC、EOS。</p>
        <h2>质押率</h2>
        <p>质押率=贷款金额/质押币的当前市值，根据不同货币的价格稳定性，分别对应如下质押率：</p>
        <table>
            <tr>
                <td>币种</td>
                <td v-for="(coin, index) in dCoins" :key="index">{{coin.name}}</td>
            </tr>
            <tr>
                <td>质押率%</td>
                <td v-for="(coin, index) in dCoins" :key="index">{{coin.mortgateRate | toPercentage}}</td>
            </tr>
        </table>
        <div class="formula">*质押率=贷款金额/质押币的当前市值</div>
        <h2>借款约定</h2>
        <p>1、借款利率统一为：年利率30%；</p>
        <p>2、借款时间限制：30天到180天；</p>
        <p>3、还款方式：每月10号还息，到期还清；</p>
        <p>4、如推迟还息，您自逾期之日起每日按本月利息金额的3%向乙方支付违约金，到期一次还请；</p>
        <p>5、如到期逾期，自逾期之日起每日按本利总金额的0.30%计算违约金，逾期15天自动平仓；</p>
        <p>6、在借款满一个月后可提前还清本息，按还款日当天计算利息。</p>
        <h2>补仓与平仓</h2>
        <p>借款过程中，因市场波动导致质押币价格变动时，实时质押率可能会发生变化。</p>
        <p>1、若实时质押率高于80%，币金所会对您进行提醒（电话或邮件）您需补足不少于抵押币市值10%的数字货币，市质押率保持健康；</p>
        <p>2、如未能及时补仓，一旦实时质押率高于90%，币金所会对您的抵押货币进行平仓，若出售金额大于贷款本息合计的数额的，超出部分会为您退回；</p>
        <br/>
        <p>为保持在市场上的良好信誉，并遵守部分监管要求，我们决定不服务于来自中国大陆、日本以及美国的用户。如您来自上述地区，请您给予谅解，同事请您不要进行后续操作。</p>
        <br/>
        <p>有问题可以咨询客服电话：{{dPhone}}</p>
        <br/>
    </cc-scroll>
</template>
<script>
export default {
    name: 'cc-rule',
    data () {
        return {
            dCoins: CC.coins,
            dPhone: CC.settings.phone
        }
    }
}
</script>
<style lang="less" scoped>
    .page-rule {
        color: #333;
    }
    p {
        padding: 0 15px;
        font-size: 14px;
        line-height: 22px;
    }
    h2 {
        position: relative;
        margin: 20px 0;
        padding: 0 15px;
        font-size: 18px;
        line-height: 30px;
        &:before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            display: inline-block;
            width: 8px;
            height: 30px;
            background-color: #ffc95e;
        }
    }
    table {
        margin: 15px auto;
    }
    td {
        font-size: 12px;
        width: 40px;
        height: 30px;
        text-align: center;
        vertical-align: middle;
        border: 1px solid #ccc;
    }
    .formula {
      font-size: 12px;
      width: 300px;
      margin: 0 auto;
      text-align: right;
    }
</style>
