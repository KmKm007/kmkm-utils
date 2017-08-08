(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) : (global.UrlUtil = factory())
})(this, function() {
    const UrlUtil = {}
    UrlUtil.getQueryString = function(key) {
      var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
      var result = window.location.search.substr(1).match(reg);
      return result?decodeURIComponent(result[2]) : null;
    }

    return UrlUtil
})
