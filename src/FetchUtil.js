const FetchUtil = {}

FetchUtil.getErrorMesg = function(error) {
  switch (error.message) {
    case 'Failed to fetch':
      return '网络出错，请检查网络！'
    default:
      return error.message
  }
}

module.exports = FetchUtil
