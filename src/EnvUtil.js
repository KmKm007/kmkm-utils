const isProduction = process.env.NODE_ENV === 'production'

const EnvUtil = {}

EnvUtil.isProduction = isProduction

export default EnvUtil
