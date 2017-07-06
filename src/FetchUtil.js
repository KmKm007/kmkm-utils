(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) : (global.FetchUtil = factory())
})(this, function() {
  const FetchUtil = {}
  FetchUtil.getErrorMesg = function(error) {
    switch (error.message) {
      case 'Failed to fetch':
        return '网络出错，请检查网络！'
      default:
        return error.message
    }
  }
  return FetchUtil
})
