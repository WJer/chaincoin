<template>
    <div class="page-index">
        <mt-button type="primary" size="large" class="btn-next" @click="_borrow">立即借款</mt-button>
        <mt-button type="primary" size="large" v-if="dIsMortgage">借款记录</mt-button>
    </div>
</template>
<script>
export default {
    data () {
        return {
            dIsMortgage: false
        }
    },
    created () {
        this._fetchIsMortgage();
    },
    methods: {
        _borrow () {
            this.util.api.get('/isRegistered').then((res) => {
                if (res.code == 0) {
                    if (res.result) {
                        this.$router.push('/form/borrow');
                    }else {
                        this.$router.push('/form/account');
                    }
                }
            })
        },
        _fetchIsMortgage () {
            this.util.api.get('/hasMortgage', {
                data: {
                    bitkeepId: 200190
                }
            }).then((res) => {
                if (res && res.code == 0) {
                    this.dIsMortgage = true;
                }
            })
        }
    }
}
</script>
