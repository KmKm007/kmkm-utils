(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) : (global.ReducerUtil = factory())
})(this, function() {
  const ReducerUtil = {}
  ReducerUtil.updateErrorsIfFailed = function(errors, errorType, errorMesg) {
    const nextErrors = errors.filter(error => error.errorType !== errorType)
    nextErrors.push({
      errorType,
      errorMesg
    })
    return nextErrors
  }

  ReducerUtil.updateErrorsIfSucceed = function(initErrors, errorType) {
    const nextErrors = initErrors.filter(mesg => mesg.errorType !== errorType)
    return nextErrors
  }

  return ReducerUtil
})
