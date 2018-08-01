<template>
    <div class="g-form-text" type="text">
        <mt-field :label="dLabel" :placeholder="dPlaceholder"></mt-field>
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
        }
    },
    data () {
        return {
            dLabel: this.label,
            dPlaceholder: this.placeholder
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
            font-size: 12px;
            color: #525377;
        }
    }
</style>
