<template>
    <div class="g-form-text" type="text">
        <mt-field :label="dLabel" :placeholder="dPlaceholder" v-model="dValue" :disableClear="true" :readonly="dReadonly" :type="dType"></mt-field>
    </div>
</template>
<script>
export default {
    name: 'g-text',
    props: {
        label: {
            type: String,
            default: '',
            required: false
        },
        placeholder: {
            type: String,
            default: '请填写',
            required: false
        },
        value: {
            default: ''
        },
        readonly: {
            type: Boolean
        },
        type: {
            type: String,
            required: false
        }
    },
    data () {
        return {
            dLabel: this.label,
            dPlaceholder: this.placeholder,
            dValue: this.value,
            dReadonly: this.readonly,
            dType: this.type
        }
    },
    watch: {
        dValue (val) {
            this.$emit('input', val);
        },
        value (val) {
            this.dValue = val;
        },
        placeholder (val) {
            this.dPlaceholder = val;
        }
    }
}
</script>
<style lang="less">
    .g-form-text {
        position: relative;
        .mint-field {
            min-height: 40px;
        }
        .mint-cell-text,
        .mint-field-core {
            font-size: 14px;
            color: #525377;
            line-height: 1.6;
        }
        .mint-cell-title {
            width: 80px;
        }
        .mint-cell-wrapper {
            background-position: bottom left;
            padding: 0;
        }
    }
</style>
