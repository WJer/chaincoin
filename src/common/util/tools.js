const getRect = (el) => {
    if (el.getBoundingClientRect) {
        var rect = el.getBoundingClientRect();
        return {
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height
        }
    }
    return {
      top: el.offsetTop,
      left: el.offsetLeft,
      width: el.offsetWidth,
      height: el.offsetHeight
    }
}

const getCookie = (key) => {
    let data = {};
    let temp = document.cookie.split(';');
    temp.forEach((item) => {
        let t = item.split('=');
        data[t[0]] = t[1];
    })
    return data[key];
}

export default {
    getRect,
    getCookie
}