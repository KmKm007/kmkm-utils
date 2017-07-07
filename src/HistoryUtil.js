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
  module.exports = HistoryUtil
} else {
  module.exports = null
}
