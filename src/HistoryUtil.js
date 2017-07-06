(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) : (global.HistoryUtil = factory())
})(this, function() {
  if (typeof (window) !== 'undefined') {
    const createHistory = require('history/createHashHistory').default
    const history = createHistory()

    const HistoryUtil = {}
    HistoryUtil.getHistory = function() {
      return history
    }

    return HistoryUtil
  } else {
    return null
  }
})
