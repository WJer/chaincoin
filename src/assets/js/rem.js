// H5项目 - rem布局方案
(function (window, CC) {
    var document = window.document
    var root = document.documentElement
    var viewport = document.querySelector('meta[name="viewport"]')
    var dpr = 1
    var scale = 1
    var fontBase = 16 // 基础字号
  
    // 仅ios考虑2/3倍方案，其他设备下，仍旧使用1倍的方案
    if (/i(Phone|Pod|Pad)/.test(navigator.userAgent)) {
      var ratio = window.devicePixelRatio
      dpr = ratio >= 3 ? 3 : (ratio >= 2 ? 2 : 1)
    } else {
      dpr = 1
    }
    scale = 1 / dpr
  
    root.setAttribute('data-dpr', dpr)
    viewport.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', user-scalable=no')
  
    var setBodyFontSize = function () {
      document.removeEventListener('DOMContentLoaded', setBodyFontSize)
      document.body.style.fontSize = fontBase * dpr + 'px'
    }
  
    if (document.readyState === 'complete') {
      setBodyFontSize()
    } else {
      document.addEventListener('DOMContentLoaded', setBodyFontSize, false)
    }
  
    var setRootFontSize = function () {
      var maxWidth = 375 * dpr
      var width = root.getBoundingClientRect().width
  
      if (width > maxWidth) {
        width = maxWidth
      }
  
      root.style.fontSize = width / 10 + 'px'
      CC.remScale = width / (375 * dpr);
    }
  
    setRootFontSize()
  
    var timer = null
    window.addEventListener('resize', function () {
      timer && clearTimeout(timer)
      timer = setTimeout(setRootFontSize, 300)
    }, false)
  
    CC.rem = 37.5 // 基准rem
    CC.dpr = dpr
  
    CC.rem2px = function (d) {
      var val = parseFloat(d) * CC.rem
      if (typeof d === 'string' && d.match(/rem$/)) {
        val += 'px'
      }
      return val
    }
  
    CC.px2rem = function (d) {
      var val = parseFloat(d) / CC.rem
      if (typeof d === 'string' && d.match(/px$/)) {
        val += 'rem'
      }
      return val
    }
  })(window, (CC = (window.CC || {})))
  
