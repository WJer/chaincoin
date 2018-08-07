import { MessageBox, Indicator } from 'mint-ui';
import util from '@/common/util';
import Slide from '@/components/slide';

const alert = (message, title) => {
    return MessageBox.alert(message, title);
}

const confirm = (message, title) => {
    return MessageBox.confirm(message, title);
}

const confirm_cc = (message, title) => {
    var mb = MessageBox.confirm(message, title);
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
    confirm_cc,
    loading,
    slide: Slide
}