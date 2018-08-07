<template>
    <div class="g-form-radio" type="text">
        <div class="radio-hd">手续费</div>
        <div class="radio-item" v-for="item in dOptions">
            <div class="radio_cb" :class="{'checked': dChecked == item.value}" @click="_click(item)"></div>
            <div class="radio_bd"><p>{{item.label}}</p></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'g-radio',
    model: {
		prop: 'checked',
		event: 'change'
	},
    props: {
        options: {
            type: Array,
            required: true,
            default () {
                return [];
            }
        },
        checked: {
            required: false
        }
    },
    data () {
        return {
            dOptions: this.options,
            dChecked: this.checked
        }
    },
    methods: {
        _click (item) {
            if (this.dChecked === item.value) {
                this.dChecked = '';
            }else{
                this.dChecked = item.value;
            }
            this.$emit('change', this.dChecked);
        }
    }
}
</script>
<style lang="less" scoped>
    .radio-item {
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        line-height: 1;
        min-height: inherit;
        height: 30px;
        overflow: hidden;
        padding: 0 10px;
        margin-left: 25px;
        width: 100%;
    }
    .radio_cb {
        position: relative;
        display: inline-block;
        width: 17px;
        height: 17px;
        margin-right: 14px;
        background-color: #e3ecff;
        border-radius: 50%;
        vertical-align: middle;
        &.checked:before {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            top: 0;
            margin: auto;
            content: '';
            display: inline-block;
            width: 8px;
            height: 8px;
            background-color: #5d82ff;
            border-radius: 50%;
        }
    }
    .radio_bd {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        font-size: 12px;
        color: #525377;
    }
    .radio-hd {
        display: inline-block;
        font-size: 12px;
        color: #525377;
        line-height: 40px;
        vertical-align: middle;
        margin: 0 10px;
    }
</style>
