import Vue from 'vue'

Vue.filter('toPercentage', (val) => {
    return Number(val * 100).toFixed(2) + '%';
})