<template>
    <mt-header fixed :title="dTitle" class="header">
        <div slot="left" v-if="isBack">
            <mt-button icon="back" @click="_back"></mt-button>
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
            dTitle: this.title || '币金所'
        }
    },
    methods: {
        _back () {
            const slide = CC._slides.pop();
            slide && (slide.hide());
        }
    }
}
</script>
<style lang="less">
    .header {
        font-size: 15px;
		height: 40px;
        padding: 0 10px;
        background-color: #fff;
        color: #081351;
    }
</style>
