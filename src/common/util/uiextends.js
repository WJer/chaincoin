import { MessageBox, Indicator } from 'mint-ui';
import util from '@/common/util';
import Slide from '@/components/slide';

const alert = (message, title) => {
    var mb = MessageBox.alert(message, title);
    util.addClass(document.querySelector('.mint-msgbox-wrapper'), 'mint-msgbox-wrapper-chaincoin');
    return mb;
}

const confirm = (message, title, options) => {
    var mb = MessageBox(Object.assign({
        title: title,
        message: message,
        showCancelButton: true
    }, options));
    util.addClass(document.querySelector('.mint-msgbox-wrapper'), 'mint-msgbox-wrapper-chaincoin');
    return mb;
}

const loading =  (title) => {
    Indicator.open({
        text: title || '',
        spinnerType: 'fading-circle'
    });
    return Indicator;
}

export default {
    alert,
    confirm,
    loading,
    slide: Slide
}