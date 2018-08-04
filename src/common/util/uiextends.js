import { MessageBox } from 'mint-ui';
import util from '@/common/util';

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

export default {
    alert,
    confirm,
    confirm_cc
}