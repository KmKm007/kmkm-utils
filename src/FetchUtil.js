(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) : (global.FetchUtil = factory())
})(this, function() {
  const FetchUtil = {}
  FetchUtil.getErrorMesg = function(error) {
    const message = error.message
    if (message.search('Network Error') {
      return '网络异常，请重试！'
    } else if (message.search('timeout')) {
      return '网络异常，请重试'
    } else {
      return message
    }
  }
  return FetchUtil
})
