<template>
    <mt-header fixed :title="dTitle">
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
            if (slide) {
                slide.hide();
            }else{
                if (this.$route.name !== 'index') {
                    history.back();
                }
            }
        }
    }
}
</script>
