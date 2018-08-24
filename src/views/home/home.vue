<template>
    <div class="page-index">
    <cc-scroll :pullDownRefresh="false" :pullup="false" class="page-scroll" ref="scroll">
        <div class="top-wrap">
            <div class="icon"></div>
            <h1>
                <div>抵押数字资产</div>
                <div>安全快速借款</div>
            </h1>
            <h2>
                <div>币金所产品是借款人以持有的数字货币为质押标的，</div>
                <div>向出资人进行融资的专业数字资产抵押贷款平台</div>
            </h2>
        </div>
        <div class="middle1-wrap">
            <h1>流程极简 当天放款</h1>
            <div class="img"></div>
            <div class="btn" @click="_borrow">立即填写信息<span class="left-arrow"></span></div>
        </div>
        <div class="middle2-wrap">
            <h1>安全存管 无惧丢币</h1>
            <h2>
                <div>采用最高安全等级的银行资管确保每一笔交易安全可靠</div>
                <div>抵押期间，数字货币被盗、丢失等责任将由币金所全部承担</div>
            </h2>
            <div class="img"></div>
            <div class="arrow1"></div>
            <div class="arrow2"></div>
        </div>
        <div class="sponsor-wrap">
            <h1>权威背景 安全可靠</h1>
            <h2>
                <div>币金所由A股上市公司投资成立，星耀资本、屹立资本等一线</div>
                <div>投资机构参与，创始团队的投行和金融借贷经验丰富</div>
            </h2>
            <div class="sponsor"></div>
        </div>
        <div class="team-wrap" v-if="false">
            <div class="team-hd">创始人团队</div>
            <div class="four-members">
                <div class="member">
                    <div class="profile1 profile"></div>
                    <div class="name">徐可可</div>
                    <div class="desc">CEO，星耀资本合伙人，曾在私募股权投资领域主导多家企业公司达成交易</div>
                </div>
                <div class="member">
                    <div class="profile2 profile"></div>
                    <div class="name">邢悦</div>
                    <div class="desc">COO，前借贷宝个贷事业部运营负责人，经历交易额0到2000亿全过程</div>
                </div>
                <div class="member">
                    <div class="profile3 profile"></div>
                    <div class="name">秦路七</div>
                    <div class="desc">CMO，前借贷宝市场副总监，服务京东、 360、南孚等多家知名企业</div>
                </div>
                <div class="member">
                    <div class="profile4 profile"></div>
                    <div class="name">王嘉琪</div>
                    <div class="desc">CRO，深耕互金行业多年，京东消费金融风控体系的早期建设者</div>
                </div>
            </div>
            <div class="team-hd">顾问团队</div>
            <div class="three-members">
                <div class="member">
                    <div class="profile5 profile"></div>
                    <div class="name">杨舟</div>
                    <div class="desc">风控顾问，就职于普华永道香港金融服务部，创办标准普惠</div>
                </div>
                <div class="member">
                    <div class="profile6 profile"></div>
                    <div class="name">王立</div>
                    <div class="desc">风控顾问，就职于中国工商银行总行，创办波纹金融</div>
                </div>
                <div class="member">
                    <div class="profile7 profile"></div>
                    <div class="name">彭奕然</div>
                    <div class="desc">法律顾问，曾就职于DLA、方达律师事务所从事投融资及并购业务</div>
                </div>
            </div>
        </div>
    </cc-scroll>
    <div class="bottom">
        <div class="bottom-wrap">
            <router-link to="/rule">了解借款详细规则</router-link> | 客服电话：{{dPhone}}</div>
        <div class="g-flex btn-wrap" v-if="dIsFetch">
            <!-- <router-link to="/mglist" tag="div" class="g-flex_item" v-if="dIsMortgage">
                <mt-button type="primary" size="large" class="g-btn-thin">查看记录</mt-button>
            </router-link>
            <router-link to="/form/borrow" tag="div" class="g-flex_item">
                <mt-button type="primary" size="large">我要借款</mt-button>
            </router-link> -->
            <mt-button type="primary" size="large" class="g-btn-thin" @click="_record" v-if="dIsMortgage">查看记录</mt-button>
            <mt-button type="primary" size="large" @click="_borrow">我要借款</mt-button>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            dIsMortgage: false,
            dIsFetch: false,
            dPhone: ''
        }
    },
    created () {
        if (!CC.hasMortgage) {
          this._fetchIsMortgage();
        }else{
          this.dIsMortgage = CC.hasMortgage;
        }
        if (!CC.coins) {
            this._fetchInfos();
        }else{
            this.dIsFetch = true;
        }
    },
    methods: {
        _fetchInfos (cb) {
            this.util.api.all(this._getAjax()).then(this.util.api.spread((res1, res2, res3) => {
				res1 && (CC.settings = res1.settings);
        this.dPhone = res1.settings.phone;
				res2 && (CC.bank = {
					bankName: res2.bankName,
					branchName: res2.branchName,
					cardNumber: res2.cardNumber
				})
                res3 && (CC.coins = res3.coins);
                this.dIsFetch = true;
                cb && cb();
			}));
        },
        _getAjax() {
			return [
				this.util.api.get('/getSettings'),
				this.util.api.get('/getBankInfo'),
				this.util.api.get('/getAllCoin')
			]
		},
        _fetchIsMortgage () {
            this.util.api.get('/hasMortgage', {
                data: {
                    bitkeepId: 200190
                }
            }).then((res) => {
                if (res && res.code == 0) {
                    this.dIsMortgage = res.result;
                    CC.hasMortgage = res.result;
                }
            })
        },
        _borrow () {
            var me = this;
            if (CC.userid) {
                this.$router.push('/form/borrow');
            }else{
                this.util.slide({
                    context: this,
                    component: {
                        'account' : () => import('@/views/account')
                    },
                    events: {
                        'next': function (){
                            this._fetchInfos(function () {
                                me.$router.push('/form/borrow');
                            });
                        }
                    }
                })
            }
        },
        _record () {
            this.$router.push('/mglist');
        }
    }
}
</script>
<style lang="less" scoped>
    .page-index {
        width: 100%;
        height: 100%;
        position: relative;
    }
    .page-scroll {
        position: absolute;
		top: 0;
		left: 0;
		right: 0;
        bottom: 75px;
        height: auto;
		background-color: #fff;
    }
    .top-wrap {
        position: relative;
        width: 100%;
        height: 248px;
        .icon {
            width: 100%;
            height: 100%;
            background-image: url('/mortgage/chaincoin/dist/static/images/top.png');
            background-size: 100% 100%;
        }
        h1 {
            position: absolute;
            top: 70px;
            width: 100%;
            text-align: center;
            font-size: 26px;
            line-height: 1.3em;
            color: #fff;
        }
        h2 {
            position: absolute;
            top: 150px;
            width: 100%;
            text-align: center;
            font-size: 12px;
            line-height: 1.3em;
            color: #ccd2e7;
        }
    }
    .middle1-wrap {
        h1 {
            width: 100%;
            margin-top: 20px;
            text-align: center;
            font-size: 26px;
            line-height: 1.3em;
        }
        .img {
            width: 100%;
            margin-top: 30px;
            height: 70px;
            background-image: url('/mortgage/chaincoin/dist/static/images/approval.jpg');
            background-repeat: no-repeat;
            background-position: center;
            background-size: 100% 100%;
        }
        .btn {
            font-size: 12px;
            color: #5777f4;
            line-height: 60px;
            text-align: center;
        }
        .left-arrow {
            position: relative;
            display: inline-block;
            width: 15px;
            height: 15px;
            margin: 0 0 2px 5px;
            border: 1px solid #5777f4;
            border-radius: 50%;
            vertical-align: middle;
            &:before,
            &:after {
                content: '';
                display: inline-block;
                position: absolute;
                top: 2px;
                border: 5px solid transparent;
            }
            &:before {
              left: 6px;
              border-left-color: #5777f4;
            }
            &:after {
                left: 4px;
                border-left-color: #fff;
            }
        }
    }
    .middle2-wrap {
        position: relative;
        width: 100%;
        height: 220px;
        background-color: #f4f5f9;
        padding: 20px 0;
        margin-bottom: 40px;
        h1 {
            width: 100%;
            text-align: center;
            font-size: 26px;
            line-height: 60px;
        }
        h2 {
            width: 100%;
            text-align: center;
            font-size: 12px;
            line-height: 1.3em;
            color: #9a9a9d;
        }
        .img {
            width: 187px;
            height: 143px;
            margin: 0 auto;
            background-image: url('/mortgage/chaincoin/dist/static/images/mobile.png');
            background-repeat: no-repeat;
            background-size: 100% 100%;
        }
        .arrow1,
        .arrow2 {
            position: absolute;
            left: 0;
            right: 0;
            margin: 0 auto;
            width: 30px;
            height: 30px;
            background-repeat: no-repeat;
            background-size: 100% 100%;
        }
        .arrow1 {
            bottom: -15px;
            background-image: url('/mortgage/chaincoin/dist/static/images/arrow1.png');
        }
        .arrow2 {
            top: -15px;
            background-image: url('/mortgage/chaincoin/dist/static/images/arrow2.png');
        }
    }
    .team-wrap {
        width: 100%;
        padding-bottom: 30px;
    }
    .four-members {
        padding: 0 20px;
        overflow: hidden;
        .member {
            position: relative;
            float: left;
            width: 50%;
            height: 95px;
            padding: 0 5px 0 60px;
            margin: 12px 0;
            box-sizing: border-box;
            overflow: hidden;
        }
        .profile {
            position: absolute;
            left: 0;
            display: inline-block;
            width: 53px;
            height: 53px;
            border-radius: 50%;
            background-size: 100% 100%;
            background-repeat: no-repeat;
        }
        .name {
            font-size: 18px;
            margin-bottom: 10px;
        }
        .desc {
            font-size: 12px;
            line-height: 14px;
            color: #adadad;
        }
    }
    .three-members {
        overflow: hidden;
        .member {
            float: left;
            width: 33%;
            padding: 0 10px;
            box-sizing: border-box;
            text-align: center;
        }
        .profile {
            width: 53px;
            height: 53px;
            margin: 0 auto;
            border-radius: 50%;
            border: 1px solid #ccc;
            background-size: 100% 100%;
            background-repeat: no-repeat;
            vertical-align: top;
        }
        .name {
            font-size: 18px;
            line-height: 40px;
        }
        .desc {
            font-size: 12px;
            line-height: 14px;
            color: #adadad;
        }
    }
    .team-hd {
        font-size: 15px;
        margin: 20px 0 40px;
        text-align: center;
        position: relative;
        &:after {
            content: '';
            width: 0;
            height: 0;
            position: absolute;
            border-bottom: 8px solid transparent;
            border-top: 8px solid #ababab;
            border-left: 8px solid transparent;
            border-right: 8px solid transparent;
            left: 0;
            right: 0;
            top: 25px;
            margin: auto;
        }
    }
    .bottom-wrap {
        font-size: 12px;
        line-height: 24px;
        text-align: center;
        a {
            color: #5d82ff;
        }
    }
    .mint-button {
        border-radius: 0;
        font-size: 20px;
        height: 48px;
    }
    .bottom {
        position: fixed;
        bottom: 0;
        width: 100%;
    }
    .sponsor-wrap {
        h1 {
            width: 100%;
            text-align: center;
            font-size: 26px;
            line-height: 60px;
        }
        h2 {
            width: 100%;
            text-align: center;
            font-size: 12px;
            line-height: 1.3em;
            color: #9a9a9d;
        }
        .sponsor {
            display: block;
            width: 308px;
            height: 383px;
            margin: 30px auto 20px;
            background-image: url('/mortgage/chaincoin/dist/static/images/shield.png');
            background-repeat: no-repeat;
            background-size: 100% 100%;
        }
    }
    .profile1 {
        background-image: url('/mortgage/chaincoin/dist/static/images/1.png');
    }
    .profile2 {
        background-image: url('/mortgage/chaincoin/dist/static/images/2.png');
    }
    .profile3 {
        background-image: url('/mortgage/chaincoin/dist/static/images/3.png');
    }
    .profile4 {
        background-image: url('/mortgage/chaincoin/dist/static/images/4.png');
    }
    .profile5 {
        background-image: url('/mortgage/chaincoin/dist/static/images/5.png');
    }
    .profile6 {
        background-image: url('/mortgage/chaincoin/dist/static/images/6.png');
    }
    .profile7 {
        background-image: url('/mortgage/chaincoin/dist/static/images/7.png');
    }

</style>
