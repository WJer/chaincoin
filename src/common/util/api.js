import axios from 'axios';
import tools from './tools';

const bitkeepId = tools.getCookie('uid') || '300100';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://dmpb.com.cn:6002';

axios.interceptors.request.use((config) => {
    config.headers['Content-Type'] = 'application/json; charset=utf-8';
    if (config.method == 'get') {
        config.params || (config.params = {});
        config.params.bitkeepId = bitkeepId;
    }else if (config.method == 'post') {
        config.data.bitkeepId = bitkeepId;
    }
    if (config.defaultErrAction === undefined) {
        config.defaultErrAction = true
    }
    return config;
}, (err) => {
    return Promise.reject(err);
});

axios.interceptors.response.use((config) => {
    const data = config.data;
    if (data.code != 0) {
        // util.alert('错误异常，请联系管理员！');
        return false;
    }
    return data;
}, (err) => {
    return Promise.reject(err);
});

const getCoinInstantPriceByName = (name, callback) => {
    const price = 10000;
    callback && callback(price);
}

export default {
    api: axios,
    getCoinInstantPriceByName
}