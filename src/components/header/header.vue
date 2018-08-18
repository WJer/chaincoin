<template>
    <mt-header fixed :title="dTitle">
        <div slot="left" v-if="isBack">
            <mt-button icon="back" @click="_back"></mt-button>
        </div>
        <div class="icon-setting" slot="right" v-if="dShowList" @click="_toList">
            <div class="g-line"></div>
            <div class="g-line"></div>
            <div class="g-line"></div>
        </div>
    </mt-header>
</template>
<script>
export default {
    name: 'cc-header',
    created () {
        CC.header = this;
    },
    props: {
        title: {
            type: String,
            default: ''
        },
        isBack: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            dTitle: this.title || '币金所',
            dShowList: false
        }
    },
    methods: {
        _back () {
            window.history.back();
        },
        _toList () {
            this.$router.push('/mglist');
        },
        toggleList (status) {
            this.dShowList = status;
        }
    }
}
</script>
<style lang="less" scoped>
.icon-setting {
    width: 15px;
    float: right;
    .g-line {
        width: 15px;
        background-image: -webkit-gradient(linear, left top, left bottom, from(#333), color-stop(50%, #333), color-stop(50%, transparent));
        background-image: linear-gradient(180deg, #333, #333 50%, transparent 50%);
        margin: 2px 0;
    }
}
</style>
