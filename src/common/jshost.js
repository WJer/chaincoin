var jMessageCallbacks = {};

var callApp = (cmd, data) => {
    var param = {
        cmd: cmd,
        data: data
    }
    if (window.webkit && window.webkit.messageHandlers) {
        window.webkit.messageHandlers.JSHost.postMessage(param);
    } else {
        // console.log('No JSHost for:'+JSON.stringify(param));
    }
}


export default function () {
    if(arguments.length < 1){
        return;
    }
    var method = arguments[0];
    var args = [];
    for(var i = 1; i < arguments.length; i++) {
        if(arguments[i] instanceof Function){
            jMessageCallbacks[method] = arguments[i];
        } else {
            args.push(JSON.stringify(arguments[i]));
        }
    }
    if(window.JSHost){
        window.JSHost[method].apply(this, args);
    } else {
        callApp(method, JSON.stringify(args));
    }
}