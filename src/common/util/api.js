import axios from 'axios';
// import util from './uiextends';

const HOST = 'http://dmpb.com.cn:6002';

axios.interceptors.request.use((config) => {
    let query = [];
    config.headers['Content-Type'] = 'application/json; charset=utf-8'

    config.url = HOST + config.url;
    if (config.method == 'get' && config.data) {
        for(var key in config.data) {
            query.push(`${key}=${config.data[key]}`);
        }
        config.url += `?${query.join('&')}`;
    }

    if (config.defaultErrAction === undefined) {
        config.defaultErrAction = true
    }
    // config.httpAgent: new http.Agent({ keepAlive: true }),
    // config.httpsAgent: new https.Agent({ keepAlive: true }),
    return config;
}, (err) => {
    return Promise.reject(err);
});

axios.interceptors.response.use((config) => {
    const data = config.data;
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