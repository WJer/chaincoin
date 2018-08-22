import { MessageBox, Indicator } from 'mint-ui';
import util from '@/common/util';
import Slide from '@/components/slide';

const alert = (message, title) => {
    var mb = MessageBox.alert(message, title);
    CC.widgets.alert = mb;
    util.addClass(document.querySelector('.mint-msgbox-wrapper'), 'mint-msgbox-wrapper-chaincoin');
    return mb;
}

const confirm = (message, title, options) => {
    var mb = MessageBox(Object.assign({
        title: title,
        message: message,
        showCancelButton: true
    }, options));
    CC.widgets.confirm = mb;
    util.addClass(document.querySelector('.mint-msgbox-wrapper'), 'mint-msgbox-wrapper-chaincoin');
    return mb;
}

const loading =  (title) => {
    Indicator.open({
        text: title || '',
        spinnerType: 'fading-circle'
    });
    CC.widgets.load = Indicator;
    return Indicator;
}

export default {
    alert,
    confirm,
    loading,
    slide: Slide
}
