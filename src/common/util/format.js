const num2money = (str) => {
    str += '';
    return str.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export default {
    num2money
}