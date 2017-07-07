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

module.exports = ReducerUtil
