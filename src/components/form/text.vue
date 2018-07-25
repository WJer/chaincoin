<template>
    <div class="g-form">
        <label class="g-label">{{label}}</label>
        <input type="text" v-model="dValue" class="g-input"/>
    </div>
</template>
<script>
export default {
    props: {
        label: {
            type: String,
            default: '',
            required: false
        },
        value: {
            required: false
        }
    },
    watch: {
        dValue (val) {
            this.$emit('input', val)
        },
        value (val) {
            this.dValue = val;
        }
    },
    data () {
        return {
            dValue: this.value
        }
    }
}
</script>
<style>
    .g-form {
        display: block;
        width: 100%;
    }
    .g-label {
        font-size: 15px;
        color: #fff;
        line-height: 36px;
    }
    .g-input {
        width: 100%;
        height: 36px;
        padding: 0 5px;
        box-sizing: border-box;
        border-radius: 3px;
        border: 1px solid #283252;
        background-color: #4d5b81;
        font-size: 15px;
        color: #fff;
    }
</style>
