(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) : (global.HistoryUtil = factory())
})(this, function() {
  if (typeof (window) !== 'undefined') {
    const createHashHistory = require('history/createHashHistory').default
    const createBrowserHistory = require('history/createBrowserHistory').default
    const hashHistory = createHashHistory()
    const browserHistory = createBrowserHistory()

    const HistoryUtil = {}
    HistoryUtil.getHashHistory = function() {
      return hashHistory
    }

    HistoryUtil.getBrowswerHistory = function() {
      return browserHistory
    }
    return HistoryUtil
  } else {
    return null
  }
})
